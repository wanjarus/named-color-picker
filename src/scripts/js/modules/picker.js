"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const window_var_1 = require("window-var");
const namedColorVars = require("named-color-vars");
let $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');
let tinycolor = window_var_1.win.tinycolor || require('tinycolor2');
if (!$.fn.selectize)
    require('selectize'); // jQuery extension.
let ns = 'namedColorPicker';
let ss = 'named-color-picker';
let instanceCounter = 0;
let instances = [];
class Instance {
    // Public constructor.
    constructor(options) {
        this.emPixels = 0;
        this.searchIcon = '';
        this.totalGridColors = 0;
        this.instance = (instanceCounter = instanceCounter + 1);
        this.ns = ns + String(this.instance);
        this.ss = ss + '-' + this.instance;
        instances.splice(this.instance - 1, 0, this);
        this.options = $.extend(true, {}, {
            i18n: {
                copied: 'copied',
                select: 'select',
                searchColors: 'search',
                promptCopyFallback: 'press ctrl+c to copy:',
            },
        }, options || {});
        this.$window = $(window_var_1.win),
            this.$document = $(window_var_1.win.document);
        this.$html = $('html'),
            this.$head = $('head'),
            this.$body = $('body');
        this.$picker = $(this.pickerMarkup()),
            this.$picker.data(ns, this);
        this.$body.append(this.$picker);
        this.$info = this.$picker.find('> .-info'),
            this.$grid = this.$picker.find('> .-grid');
        this.$search = this.$picker.find('> .-search'),
            this.$searchSelect = this.$search.find('> select'),
            this.$searchOverlay = this.$picker.find('> .-search-overlay');
        this.$textarea = this.$picker.find('> .-textarea');
        this.emPixels = parseInt(getComputedStyle(this.$picker[0]).fontSize);
        this.searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.3 446.3"><g><path d="M318.8 280.5h-20.5l-7.6-7.7c25.5-28 40.8-66.2 40.8-107 0-92-74-165.8-165.8-165.8S0 74 0 165.8s74 165.7 165.8 165.7c40.7 0 79-15.3 107-40.8l7.7 7.6v20.4L408 446.3l38.3-38.3-127.6-127.5zm-153 0C102 280.5 51 229.5 51 165.7S102 51 165.8 51s114.7 51 114.7 114.8-51 114.7-114.8 114.7z"/></g></svg>';
        this.windowWidth = this.$window.width(),
            this.windowHeight = this.$window.height(),
            this.windowScrollTop = this.$window.scrollTop();
        this.defaultTiny = tinycolor('#000000'),
            this.lightTiny = tinycolor('#ffffff'),
            this.darkTiny = tinycolor('#000000');
        this.setupColors(), this.setupSearchSelect(), this.setupEvents();
    }
    // Setup helpers.
    setupColors() {
        this.colorVars = namedColorVars.colors;
        this.colorsByHex = {};
        this.colors = {};
        $.each(this.colorVars, (key, hex) => {
            this.colors[key] = this.colorProps(key, hex);
            this.colorsByHex[hex] = this.colors[key];
        });
        this.colorKeysByName = this.sortColorKeys(this.colors, 'name');
        this.colorKeysByHue = this.sortColorKeys(this.colors, 'hue');
        this.colorKeysByHue.forEach((key) => {
            let color = this.colors[key];
            let $anchor = $(this.colorAnchorMarkup(color));
            $anchor.data('color', color);
            this.$grid.append($anchor);
            this.totalGridColors++;
        });
        this.$grid.prepend($(this.searchAnchorMarkup()));
        this.totalGridColors++; // One more color.
        this.colorOptions = [],
            this.colorKeysByName.forEach((key) => {
                let color = this.colors[key];
                let markup = this.colorOptionMarkup(color);
                this.colorOptions.push({
                    value: color.key,
                    text: color.name,
                    markup: markup,
                });
            });
    }
    setupSearchSelect() {
        this.$searchSelect.selectize({
            options: this.colorOptions,
            dropdownParent: this.$search,
            placeholder: this.options.i18n.searchColors,
            render: {
                item: (data) => {
                    return $('<div>' + data.markup + '</div>');
                },
                option: (data) => {
                    return $('<div>' + data.markup + '</div>');
                },
            },
            diacritics: false,
            closeAfterSelect: true,
            maxOptions: Math.min(50, this.colorOptions.length),
        });
    }
    setupEvents() {
        this.$grid.on('click.' + this.ns, '> .-color', this.onColorClick.bind(this));
        this.$info.on('click.' + this.ns, '> .-hex, > .-rgb, > .-hsl, > .-hsv', this.onInfoCopyClick.bind(this));
        this.$info.on('click.' + this.ns, '> .-select', this.onInfoSelectClick.bind(this));
        this.$searchSelect[0].selectize.on('item_add', this.onSearchSelect.bind(this));
        this.$searchOverlay.on('click.' + this.ns, this.onSearchOverlayClick.bind(this));
        this.$window.on('resize.' + this.ns, this.onWindowResize.bind(this));
        this.$document.on('keyup.' + this.ns, this.onDocumentKeyup.bind(this));
    }
    // Event handlers.
    onColorClick(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let $anchor = $(e.currentTarget);
        let color = $anchor.data('color');
        if ($anchor.hasClass('-search')) {
            this.toggleSearch();
        }
        else if ($anchor.hasClass('-active')) {
            this.closeActiveColor();
        }
        else if (color) {
            this.setActiveColor(color);
        }
    }
    onInfoCopyClick(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.copyText($.trim($(e.target).text()));
    }
    onInfoSelectClick(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.selectActiveColor();
    }
    onSearchSelect(key) {
        this.setActiveColor(key);
    }
    onSearchOverlayClick(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.closeSearch();
    }
    onWindowResize(e) {
        this.resizeGrid(); // Resize grid colors.
    }
    onDocumentKeyup(e) {
        if (e.keyCode !== 27)
            return;
        e.preventDefault();
        e.stopImmediatePropagation();
        this.close();
    }
    // Public open/close utilities.
    open(options, hexKeyOrName) {
        options = $.extend({}, {
            onBeforeOpen: undefined,
            onOpened: undefined,
            onBeforeClose: undefined,
            onClosed: undefined,
            onColorActive: undefined,
            onActiveColorClosed: undefined,
            onColorSelected: undefined,
            showCodes: true,
            openSearch: false,
        }, options || {});
        this.onBeforeOpen = options.onBeforeOpen;
        this.onOpened = options.onOpened;
        this.onBeforeClose = options.onBeforeClose;
        this.onClosed = options.onClosed;
        this.onColorActive = options.onColorActive;
        this.onActiveColorClosed = options.onActiveColorClosed;
        this.onColorSelected = options.onColorSelected;
        this.showCodes = options.showCodes;
        if (typeof this.onBeforeOpen === 'function') {
            this.onBeforeOpen();
        }
        this.closeOthers();
        this.closeSearch();
        this.closeActiveColor();
        if (!this.$picker.is(':visible')) {
            this.windowScrollTop = this.$window.scrollTop();
        } // Remember `scrollTop()` before showing picker.
        this.$picker.show(), this.resizeGrid();
        this.$html.addClass(ss + '-open');
        if (hexKeyOrName) {
            this.setActiveColor(hexKeyOrName);
        }
        else if (options.openSearch) {
            this.openSearch();
        }
        if (typeof this.onOpened === 'function') {
            this.onOpened();
        }
    }
    toggle(options) {
        if (this.$picker.is(':visible')) {
            this.close();
            return false;
        }
        else {
            this.open(options);
            return true;
        }
    }
    close(restoreScrollTop = true) {
        if (typeof this.onBeforeClose === 'function') {
            this.onBeforeClose();
        }
        this.closeSearch();
        this.closeActiveColor();
        this.$picker.hide();
        this.removeGridStyles();
        this.$html.removeClass(ss + '-open');
        if (restoreScrollTop) {
            this.$window.scrollTop(this.windowScrollTop);
        }
        if (typeof this.onClosed === 'function') {
            this.onClosed();
        }
        this.onBeforeOpen = undefined;
        this.onOpened = undefined;
        this.onBeforeClose = undefined;
        this.onClosed = undefined;
        this.onColorActive = undefined;
        this.onActiveColorClosed = undefined;
        this.onColorSelected = undefined;
        this.showCodes = true;
    }
    // Public color utilities.
    getColors() {
        return this.colors;
    }
    getColorKeysByName() {
        return this.colorKeysByName;
    }
    getColorKeysByHue() {
        return this.colorKeysByHue;
    }
    getActiveColor() {
        let $color = this.$grid.find('> .-color.-active');
        return $color.data('color') || undefined;
    }
    setActiveColor(hexKeyOrName) {
        if (!this.$picker.is(':visible'))
            return; // Not possible.
        let color = this.getColor(hexKeyOrName);
        if (!color)
            return; // Not possible.
        let $color = this.$grid.find('> .-color[href="#' + color.key + '"]');
        if (!$color.length)
            return; // Not possible.
        this.closeSearch();
        this.closeActiveColor();
        $color.addClass('-active');
        this.$info.html(this.infoMarkup(color)).fadeIn(150);
        let infoCssData = this.infoCssData($color, color);
        this.$info.css(infoCssData.css).attr('class', '-info ' + infoCssData.arrowClass);
        this.$info.find('> .-select').css(infoCssData.selectCss);
        if (infoCssData.arrowClass && infoCssData.arrowStyles) {
            this.$head.append(this.infoArrowStylesMarkup(infoCssData.arrowClass, infoCssData.arrowStyles));
        }
        if (typeof this.onColorActive === 'function') {
            this.onColorActive(this.getActiveColor());
        }
    }
    selectActiveColor() {
        if (typeof this.onColorSelected === 'function') {
            this.onColorSelected(this.getActiveColor());
        }
        this.close(); // Close picker.
    }
    closeActiveColor() {
        let $color = this.$grid.find('> .-color.-active');
        if (!$color.length)
            return;
        this.$info.hide();
        this.$info.html('');
        this.removeInfoStyles();
        $color.removeClass('-active');
        if (typeof this.onActiveColorClosed === 'function') {
            this.onActiveColorClosed($color.data('color'));
        }
    }
    // Public search utilities.
    openSearch(hexKeyOrName) {
        if (!this.$picker.is(':visible'))
            return; // Not possible.
        this.closeActiveColor();
        this.$searchOverlay.show();
        this.$search.show();
        this.$searchSelect[0].selectize.clear();
        this.$searchSelect[0].selectize.open();
        if (hexKeyOrName) {
            let color = this.getColor(hexKeyOrName);
            if (color)
                this.$searchSelect[0].selectize.setTextboxValue(color.name);
        }
    }
    toggleSearch() {
        if (this.$search.is(':visible')) {
            this.closeSearch();
            return false;
        }
        else {
            this.openSearch();
            return true;
        }
    }
    closeSearch() {
        this.$searchSelect[0].selectize.close();
        this.$search.hide();
        this.$searchOverlay.hide();
    }
    // Misc. public utilities.
    debounce(f, delay) {
        let timeout; // Timeout handle.
        return function (...args) {
            if (timeout)
                clearTimeout(timeout);
            timeout = setTimeout(() => f.apply(this, args), delay);
        };
    }
    getColor(hexKeyOrName) {
        if (typeof hexKeyOrName === 'object') {
            return hexKeyOrName; // Color.
        }
        else if (hexKeyOrName.indexOf('#') === 0) {
            let hex = hexKeyOrName; // Hex code.
            if (this.colorsByHex[hex]) {
                return this.colorsByHex[hex];
            }
        }
        else {
            let name = hexKeyOrName;
            let key = this.colorNameToKey(name);
            if (this.colors[key]) {
                return this.colors[key];
            }
        }
    }
    destroy() {
        this.close(false);
        this.removeInfoStyles();
        this.removeGridStyles();
        this.destroySearchSelect();
        this.$window.off('resize.' + this.ns);
        this.$picker.remove();
        instances.splice(this.instance - 1, 1);
    }
    // Other misc. utilities.
    closeOthers() {
        instances.forEach((instance, i) => {
            if (i !== this.instance - 1)
                instance.close(false);
        });
    }
    resizeGrid() {
        if (!this.$picker.is(':visible'))
            return; // Not possible.
        this.windowWidth = this.$window.width();
        this.windowHeight = this.$window.height();
        let gridPadding = 3, colorMargin = 3;
        if (this.windowWidth < 768) {
            gridPadding = 1, colorMargin = 1;
        }
        let gridInnerWidth = this.$grid.innerWidth();
        let gridInnerHeight = this.$grid.innerHeight();
        let gridWidth = gridInnerWidth - (gridPadding * 2);
        let gridHeight = gridInnerHeight - (gridPadding * 2);
        let colorSize = this.optimalColorSize(gridWidth, gridHeight, this.totalGridColors);
        colorSize = colorSize - (colorMargin * 2); // Excluding margin.
        this.removeGridStyles(); // Remove previous styles, before adding.
        this.$head.append(this.gridStylesMarkup(gridPadding, colorMargin, colorSize));
    }
    copyText(text) {
        let $copied = this.$info.find('> .-copied');
        this.$textarea.val(text).select();
        try {
            if (!window_var_1.win.document.queryCommandSupported('copy')) {
                this.promptCopy(text);
            }
            else if (!window_var_1.win.document.queryCommandEnabled('copy')) {
                this.promptCopy(text);
            }
            else if (!window_var_1.win.document.execCommand('copy', false, null)) {
                this.promptCopy(text);
            }
            else {
                $copied.css('visibility', 'visible');
                setTimeout(() => $copied.css('visibility', 'hidden'), 500);
            }
        }
        catch (exception) {
            this.promptCopy(text);
        }
        this.$textarea.val('').blur();
    }
    promptCopy(text) {
        window_var_1.win.prompt(this.options.i18n.promptCopyFallback, text);
    }
    colorKeyToSlug(key) {
        return key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
    }
    colorKeyToName(key) {
        return key.replace(/[A-Z]/g, (m) => ' ' + m).replace(/^./, (m) => m.toUpperCase());
    }
    colorNameToKey(name) {
        return name.replace(/\s+([a-z])/gi, (m, $1) => $1.toUpperCase()).replace(/^./, (m) => m.toLowerCase());
    }
    colorProps(key, hex) {
        let tinyColor = tinycolor(hex);
        return {
            key: key,
            slug: this.colorKeyToSlug(key),
            name: this.colorKeyToName(key),
            hex: tinyColor.toHex(),
            rgb: tinyColor.toRgb(),
            hsl: tinyColor.toHsl(),
            hsv: tinyColor.toHsv(),
            hexString: tinyColor.toHexString(),
            rgbString: tinyColor.toRgbString(),
            hslString: tinyColor.toHslString(),
            hsvString: tinyColor.toHsvString(),
            isDark: tinyColor.isDark(),
            isLight: tinyColor.isLight(),
            tiny: tinyColor,
        };
    }
    sortColorKeys(colors, by) {
        if (by === 'name') {
            return Object.keys(colors).sort((keyA, keyB) => {
                let nameA = colors[keyA].name.toLowerCase();
                let nameB = colors[keyB].name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
        }
        else if (by === 'hue') {
            return Object.keys(colors).sort((keyA, keyB) => {
                return colors[keyA].hsv.h - colors[keyB].hsv.h;
            });
        }
        return Object.keys(colors);
    }
    optimalColorSize(x, y, n) {
        // See <https://jas.xyz/2oWF0uu>
        let px = Math.ceil(Math.sqrt(n * x / y));
        let py = Math.ceil(Math.sqrt(n * y / x));
        let pxyx = px * y / x;
        let pyxy = py * x / y;
        let sx, sy; // Initialize.
        if (Math.floor(pxyx) * px < n)
            sx = y / Math.ceil(pxyx);
        else
            sx = x / px;
        if (Math.floor(pyxy) * py < n)
            sy = x / Math.ceil(pyxy);
        else
            sy = y / py;
        return Math.max(sx, sy);
    }
    destroySearchSelect() {
        this.$searchSelect[0].selectize.destroy();
    }
    removeGridStyles() {
        this.$head.find('.' + this.ss + '-grid-styles').remove();
    }
    removeInfoStyles() {
        this.$head.find('.' + this.ss + '-info-styles').remove();
    }
    // Markup utilities.
    pickerMarkup() {
        let markup = ''; // Initialize.
        markup += '<div class="' + ss + ' ' + this.ss + '">';
        markup += '  <div class="-grid"></div>';
        markup += '  <div class="-info"></div>';
        markup += '  <div class="-search-overlay"></div>';
        markup += '  <div class="-search"><select></select></div>';
        markup += '  <textarea class="-textarea"></textarea>';
        markup += '</div>';
        return markup;
    }
    gridStylesMarkup(gridPadding, colorMargin, colorSize) {
        let markup = ''; // Initialize.
        markup += '<style class="' + this.ss + '-grid-styles">';
        markup += '.' + this.ss + ' > .-grid { padding: ' + gridPadding + 'px; }';
        markup += '.' + this.ss + ' > .-grid > .-color {';
        markup += '  margin:' + colorMargin + 'px; width:' + colorSize + 'px; height:' + colorSize + 'px;';
        markup += '}';
        markup += '</style>';
        return markup;
    }
    colorAnchorMarkup(color) {
        return '<a class="-color" style="background-color:' + color.hexString + ';" title="' + color.name + '" href="#' + color.key + '"></a>';
    }
    searchAnchorMarkup() {
        return '<a class="-color -search" href="#">' + this.searchIcon + '</a>';
    }
    colorOptionMarkup(color) {
        return '<span class="-color"><span class="-swatch" style="background-color:' + color.hexString + ';"></span> ' + color.name + '</span>';
    }
    infoMarkup(color) {
        let sc = this.showCodes;
        let markup = ''; // Initialize markup.
        markup += '<div class="-title">' + color.name + '</div>';
        if (sc === true || (sc instanceof Array && sc.indexOf('hex') !== -1)) {
            markup += '<a class="-hex" href="#">' + color.hexString + '</a>';
        }
        if (sc === true || (sc instanceof Array && sc.indexOf('rgb') !== -1)) {
            markup += '<a class="-rgb" href="#">' + color.rgbString + '</a>';
        }
        if (sc === true || (sc instanceof Array && sc.indexOf('hsl') !== -1)) {
            markup += '<a class="-hsl" href="#">' + color.hslString + '</a>';
        }
        if (sc === true || (sc instanceof Array && sc.indexOf('hsv') !== -1)) {
            markup += '<a class="-hsv" href="#">' + color.hsvString + '</a>';
        }
        if (sc === true || (sc instanceof Array && sc.length > 0)) {
            markup += '<div class="-copied">' + this.options.i18n.copied + '</div>';
        }
        markup += '<a class="-select" href="#">' + this.options.i18n.select + '</a>';
        return markup;
    }
    infoArrowStylesMarkup(arrowClass, styles) {
        let markup = ''; // Initialize.
        markup += '<style class="' + this.ss + '-info-styles">';
        markup += '.' + this.ss + ' > .-info.' + arrowClass.replace(/\s/g, '.') + '::after {';
        markup += '  ' + styles;
        markup += '}';
        markup += '</style>';
        return markup;
    }
    // CSS data utilities.
    infoCssData($color, color) {
        let css = {
            top: 'auto', right: 'auto', bottom: 'auto', left: 'auto',
            color: color.isDark ? this.lightTiny.toHexString() : this.darkTiny.toHexString(),
            backgroundImage: 'linear-gradient(to bottom, ' + color.hexString + ', ' + color.tiny.clone().darken(10).toHexString() + ')',
        };
        let selectCss = {
            borderColor: color.tiny.clone().darken(15).toHexString(),
            color: color.isDark ? this.lightTiny.toHexString() : this.darkTiny.toHexString(),
            backgroundImage: 'linear-gradient(to bottom, ' + color.hexString + ', ' + color.tiny.clone().darken(5).toHexString() + ')',
        };
        let spacing = .75 * this.emPixels;
        let arrowClass = '', arrowStyles = '';
        let rect = this.$info[0].getBoundingClientRect();
        let colorRect = $color[0].getBoundingClientRect();
        let largestSide = Math.max(rect.width, rect.height);
        if (colorRect.top < largestSide) {
            arrowClass = '-arrow-top';
            css.top = colorRect.top + colorRect.height + spacing;
            css.top = Math.max(0, Number(css.top)) + 'px';
        }
        else {
            arrowClass = '-arrow-bottom';
            css.top = colorRect.top - rect.height - spacing;
            css.top = Math.max(0, Number(css.top)) + 'px';
        }
        if (colorRect.left < largestSide) {
            arrowClass = '-arrow-left';
            css.left = colorRect.left + colorRect.width + spacing;
            css.top = colorRect.top + (colorRect.height / 2) - (rect.height / 2);
            if (css.top < 0) {
                css.top = 0; // Minimum.
                arrowClass += ' -arrow-left-top';
                arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - (colorRect.height / 2)) + 'px + .5em);';
            }
            else if (css.top > this.windowHeight - rect.height) {
                css.top = this.windowHeight - rect.height;
                arrowClass += ' -arrow-left-bottom';
                arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - css.top - (colorRect.height / 2)) + 'px + .5em);';
            }
            css.top = String(css.top) + 'px';
            css.left = Math.max(0, Number(css.left)) + 'px';
        }
        else if (colorRect.left > this.windowWidth - largestSide) {
            arrowClass = '-arrow-right';
            css.left = colorRect.left - rect.width - spacing;
            css.top = colorRect.top + (colorRect.height / 2) - (rect.height / 2);
            if (css.top < 0) {
                css.top = 0; // Minimum.
                arrowClass += ' -arrow-right-top';
                arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - (colorRect.height / 2)) + 'px + .5em);';
            }
            else if (css.top > this.windowHeight - rect.height) {
                css.top = this.windowHeight - rect.height;
                arrowClass += ' -arrow-right-bottom';
                arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - css.top - (colorRect.height / 2)) + 'px + .5em);';
            }
            css.top = String(css.top) + 'px';
            css.left = Math.max(0, Number(css.left)) + 'px';
        }
        else {
            css.left = colorRect.left + (colorRect.width / 2) - (rect.width / 2);
            css.left = Math.max(0, Number(css.left)) + 'px';
        }
        let data = {
            css: css,
            selectCss: selectCss,
            arrowClass: arrowClass,
            arrowStyles: arrowStyles,
        };
        return data;
    }
}
exports.Instance = Instance;
exports.default = Instance;
