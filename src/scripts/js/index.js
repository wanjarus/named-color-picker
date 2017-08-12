"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Picker = require("./modules/picker");
const window_var_1 = require("window-var");
let $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');
let picker;
let ns = 'namedColorPicker';
let ss = 'named-color-picker';
let instanceCounter = 0;
let instances = [];
class Instance {
    // Public constructor.
    constructor(element, options) {
        this.animationEnd = 'webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend';
        this.instance = (instanceCounter = instanceCounter + 1);
        this.ns = ns + String(this.instance);
        this.ss = ss + '-' + this.instance;
        instances.splice(this.instance - 1, 0, this);
        let $element = $(element);
        let existingInstance = $element.data(ns);
        if (existingInstance)
            existingInstance.destroy();
        this.options = $.extend(true, {}, {
            mode: 'auto',
            titleizeElement: true,
            colorizeElement: true,
            showCodes: true,
            openSearch: false,
            i18n: {},
        }, options || {});
        if (!picker) {
            picker = new Picker.Instance({ i18n: this.options.i18n });
        } // Instances all share a single picker instance.
        this.picker = picker; // References picker.
        this.$element = $element;
        this.$element.data(ns, this);
        this.$hiddenElement = $('<input type="hidden" />');
        this.$element.after(this.$hiddenElement);
        this.$hiddenElement.attr('name', this.$element.attr('name') || '');
        this.$hiddenElement.val(this.$element.attr('value') || '');
        this.$element.removeAttr('name'); // Remove name.
        this.elementTagName = this.$element.prop('tagName');
        this.elementTagName = this.elementTagName.toLowerCase();
        this.elementTagType = this.$element.attr('type') || '';
        this.elementTagType = this.elementTagType.toLowerCase();
        this.elementIsTextualInput = this.$element.is('input[type="text"], textarea');
        this.elementIsColorInput = !this.elementIsTextualInput && this.$element.is('input[type="color"]');
        this.elementIsInput = this.elementIsTextualInput || this.elementIsColorInput;
        this.elementOriginalTitleAttr = this.$element.attr('title') || '';
        this.elementOriginalCssColor = this.$element.css('color') || '';
        this.elementOriginalCssBackground = this.$element.css('background') || '';
        this.elementOriginalCssBorderColor = this.$element.css('border-color') || '';
        if (this.options.mode === 'auto') {
            if (this.elementIsColorInput) {
                this.options.mode = 'swatch-only';
            }
            else
                this.options.mode = 'swatch-after';
        }
        this.setupElement(), this.setupSwatch();
    }
    // Setup helpers.
    setupElement() {
        if (['swatch-only', 'stand-alone'].indexOf(this.options.mode) !== -1) {
            this.$element.hide(); // Not visible.
        }
        this.$element.on('keyup.' + this.ns + ' cut.' + this.ns + ' paste.' + this.ns + ' blur.' + this.ns + ' change.' + this.ns, this.picker.debounce(this.onElementAlter, 250).bind(this));
    }
    setupSwatch() {
        this.$swatch = $(this.swatchMarkup());
        if (this.options.mode === 'swatch-before') {
            this.$element.before(this.$swatch);
        }
        else if (this.options.mode === 'swatch-after') {
            this.$element.after(this.$swatch);
        }
        else if (['swatch-only', 'stand-alone'].indexOf(this.options.mode) !== -1) {
            this.$element.after(this.$swatch);
        }
        this.setSelectedColor(this.getSelectedColor(), true, false);
        this.$swatch.on('click.' + this.ns, this.onSwatchClick.bind(this));
        this.$swatch.show(); // Show color picker now.
    }
    // Open events.
    onBeforeOpen() {
        this.$element.trigger(ns + '.beforeOpen');
    }
    onOpened() {
        this.$element.trigger(ns + '.opened');
    }
    // Close events.
    onBeforeClose() {
        this.$element.trigger(ns + '.beforeClose');
    }
    onClosed() {
        this.$swatch.addClass('-shrink');
        this.$swatch.one(this.animationEnd, () => this.$swatch.removeClass('-shrink'));
        this.$element.trigger(ns + '.closed');
    }
    // Color-related events.
    onColorActive(color) {
        this.$element.trigger(ns + '.colorActive', [color]);
    }
    onActiveColorClosed(color) {
        this.$element.trigger(ns + '.activeColorClosed', [color]);
    }
    onColorSelected(color) {
        this.setSelectedColor(color);
    }
    // Element/swatch events.
    onElementAlter(e, via) {
        if (via === this.ns)
            return;
        if (this.elementIsInput) {
            this.setSelectedColor($.trim((this.$element.val() || '')), false);
        }
        else
            this.setSelectedColor('', false);
    }
    onSwatchClick(e) {
        e.preventDefault();
        this.$swatch.addClass('-grow').one(this.animationEnd, () => {
            this.$swatch.removeClass('-grow'), this.open(this.getSelectedColor());
        });
    }
    // Public open/close utils.
    open(hexKeyOrName) {
        let options = {
            onBeforeOpen: this.onBeforeOpen.bind(this),
            onOpened: this.onOpened.bind(this),
            onBeforeClose: this.onBeforeClose.bind(this),
            onClosed: this.onClosed.bind(this),
            onColorActive: this.onColorActive.bind(this),
            onActiveColorClosed: this.onActiveColorClosed.bind(this),
            onColorSelected: this.onColorSelected.bind(this),
            showCodes: this.options.showCodes,
            openSearch: this.options.openSearch,
        };
        this.picker.open(options, hexKeyOrName);
    }
    toggle() {
        this.picker.toggle();
    }
    close() {
        this.picker.close();
    }
    // Public color utilities.
    getColors() {
        return this.picker.getColors();
    }
    getColorKeysByName() {
        return this.picker.getColorKeysByName();
    }
    getColorKeysByHue() {
        return this.picker.getColorKeysByHue();
    }
    getColor(hexKeyOrName) {
        return this.picker.getColor(hexKeyOrName);
    }
    getActiveColor() {
        return this.picker.getActiveColor();
    }
    setActiveColor(hexKeyOrName) {
        this.picker.setActiveColor(hexKeyOrName);
    }
    getSelectedColor() {
        return (this.$hiddenElement.val() || '');
    }
    setSelectedColor(hexKeyOrName, updateElement = true, triggerEvents = true) {
        let color, tiny; // Initialize only.
        let defaultTiny = this.picker.defaultTiny;
        let lightTiny = this.picker.lightTiny;
        let darkTiny = this.picker.darkTiny;
        if (hexKeyOrName && (color = this.picker.getColor(hexKeyOrName))) {
            if (this.options.titleizeElement) {
                this.$element.attr('title', color.name + ' (' + color.hexString + ')');
            }
            if (this.options.colorizeElement) {
                this.$element.css({
                    'background': color.hexString,
                    'borderColor': color.tiny.clone().darken(10).toHexString(),
                    'color': color.isDark ? lightTiny.toHexString() : darkTiny.toHexString(),
                });
            }
            this.$swatch.css({
                'color': color.hexString,
                'background': this.swatchBgTiny(color.tiny).toHexString(),
            });
            this.$hiddenElement.val(color.hexString);
            if (this.elementIsInput && updateElement) {
                if (this.elementIsTextualInput) {
                    this.$element.val(color.name);
                }
                else {
                    this.$element.val(color.hexString);
                }
                if (triggerEvents)
                    this.$element.trigger('change', this.ns);
            }
            if (triggerEvents)
                this.$hiddenElement.trigger('change', this.ns);
            if (triggerEvents)
                this.$element.trigger(ns + '.colorSelected', [color.hexString, color]);
        }
        else {
            if (hexKeyOrName && typeof hexKeyOrName === 'string')
                if (!(tiny = tinycolor(hexKeyOrName)).isValid())
                    tiny = null;
            if (this.options.titleizeElement) {
                this.$element.attr('title', tiny ? tiny.toHexString() : this.elementOriginalTitleAttr);
            }
            if (this.options.colorizeElement) {
                this.$element.css({
                    'background': tiny ? tiny.toHexString() : this.elementOriginalCssBackground,
                    'borderColor': tiny ? tiny.clone().darken(10).toHexString() : this.elementOriginalCssBorderColor,
                    'color': tiny ? (tiny.isDark() ? lightTiny.toHexString() : darkTiny.toHexString()) : this.elementOriginalCssColor,
                });
            }
            this.$swatch.css({
                'color': (tiny || defaultTiny).toHexString(),
                'background': this.swatchBgTiny(tiny || defaultTiny).toHexString(),
            });
            this.$hiddenElement.val(tiny ? tiny.toHexString() : '');
            if (this.elementIsInput && updateElement) {
                this.$element.val(tiny ? tiny.toHexString() : '');
                if (triggerEvents)
                    this.$element.trigger('change', this.ns);
            }
            if (triggerEvents)
                this.$hiddenElement.trigger('change', this.ns);
            if (triggerEvents && tiny)
                this.$element.trigger(ns + '.colorSelected', [tiny.toHexString(), undefined]);
        }
    }
    // Misc. public utilities.
    destroy(keepPicker = false) {
        this.close();
        this.$swatch.remove();
        this.$element.removeData(ns);
        if (this.options.mode === 'swatch-only') {
            this.$element.show();
        }
        instances.splice(this.instance - 1, 1);
        if (!instances.length && !keepPicker) {
            this.picker.destroy();
            delete this.picker;
            picker = undefined;
        }
    }
    // Misc. utilities.
    swatchBgTiny(tiny) {
        let hexString = tiny.toHexString();
        if (hexString === this.picker.lightTiny.toHexString()) {
            return this.picker.darkTiny;
        }
        else if (hexString === this.picker.darkTiny.toHexString()) {
            return this.picker.lightTiny;
        }
        return tiny.clone()[tiny.getLuminance() <= .5 ? 'lighten' : 'darken'](10);
    }
    swatchMarkup() {
        let markup = ''; // Initialize.
        markup += '<a class="named-color-picker-swatch -' + this.options.mode + '" style="display:none;" tabindex="-1" href="#">';
        markup += ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill-rule="nonzero" d="M0 0v64h64V0H0zm22.4 41.6H9.6V28.8h12.8v12.8zm0-19.2H9.6V9.6h12.8v12.8zm19.2 0H28.8V9.6h12.8v12.8z"/></g></svg>';
        markup += '</a>';
        return markup;
    }
}
exports.Instance = Instance;
exports.default = $.fn[ns] = setup();
function setup() {
    $('head').append('<style>' + require('../../../dist/styles/css/index.web.css') + '</style>');
    return function (x, ...args) {
        let $this = this; // jQuery collection passed to extension.
        if (!$this.length)
            return $this; // Not possible.
        if (typeof x === 'string' && x.length) {
            let command = x;
            let returnValues = [];
            $this.each((index, element) => {
                let $element = $(element);
                let instance = $element.data(ns);
                if (!instance)
                    return;
                let method = instance[command];
                let returnValue = method.apply(instance, args);
                returnValues.push(returnValue);
            });
            if (returnValues.length) {
                return this.length === 1 ? returnValues[0] : returnValues;
            }
        }
        else if (typeof x === 'object' || x === undefined) {
            let options = x;
            return $this.each((index, element) => {
                new Instance(element, options);
            });
        }
    };
}
exports.setup = setup;
