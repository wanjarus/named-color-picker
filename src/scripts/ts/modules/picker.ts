import * as t from './types';
import { win } from 'window-var';
import * as namedColorVars from 'named-color-vars';

let $: JQueryStatic = win.jQuery || win.$ || require('jquery');
let tinycolor: tinycolor = win.tinycolor || require('tinycolor2');
if (!$.fn.selectize) require('selectize'); // jQuery extension.

let ns: string = 'namedColorPicker';
let ss: string = 'named-color-picker';

let instanceCounter: number = 0;
let instances: Instance[] = [];

export class Instance {
  // Protected props.

  protected ns: string;
  protected ss: string;

  protected instance: number;
  protected options: t.Options;

  protected $window: JQuery;
  protected $document: JQuery;

  protected $html: JQuery;
  protected $head: JQuery;
  protected $body: JQuery;

  protected $picker: JQuery;

  protected $info: JQuery;
  protected $grid: JQuery;

  protected $search: JQuery;
  protected $searchSelect: JQuery;
  protected $searchOverlay: JQuery;

  protected $textarea: JQuery;

  protected emPixels: number = 0;
  protected searchIcon: string = '';

  protected windowWidth: number;
  protected windowHeight: number;
  protected windowScrollTop: number;

  protected colorVars: namedColorVars.Colors;
  protected colorsByHex: t.Colors;
  protected colors: t.Colors;

  protected colorKeysByName: string[];
  protected colorKeysByHue: string[];

  protected colorOptions: t.ColorOption[];
  protected totalGridColors: number = 0;

  protected onBeforeOpen: Function | undefined;
  protected onOpened: Function | undefined;

  protected onBeforeClose: Function | undefined;
  protected onClosed: Function | undefined;

  protected onColorActive: Function | undefined;
  protected onActiveColorClosed: Function | undefined;
  protected onColorSelected: Function | undefined;

  protected showCodes: boolean | Array<string>;

  // Public props.

  public defaultTiny: tinycolorInstance;
  public lightTiny: tinycolorInstance;
  public darkTiny: tinycolorInstance;

  // Public constructor.

  public constructor(options?: t.OptionsArg) {
    this.instance = (instanceCounter = instanceCounter + 1);
    this.ns = ns + String(this.instance);
    this.ss = ss + '-' + this.instance;
    instances.splice(this.instance - 1, 0, this);

    this.options = <t.Options>$.extend(true, {}, {
      i18n: {
        copied: 'copied',
        select: 'select',
        searchColors: 'search',
        promptCopyFallback: 'press ctrl+c to copy:',
      },
    }, options || {});

    this.$window = $(win),
      this.$document = $(win.document);

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
    this.emPixels = parseInt(<string>getComputedStyle(this.$picker[ 0 ]).fontSize);
    this.searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.3 446.3"><g><path d="M318.8 280.5h-20.5l-7.6-7.7c25.5-28 40.8-66.2 40.8-107 0-92-74-165.8-165.8-165.8S0 74 0 165.8s74 165.7 165.8 165.7c40.7 0 79-15.3 107-40.8l7.7 7.6v20.4L408 446.3l38.3-38.3-127.6-127.5zm-153 0C102 280.5 51 229.5 51 165.7S102 51 165.8 51s114.7 51 114.7 114.8-51 114.7-114.8 114.7z"/></g></svg>';

    this.windowWidth = <number>this.$window.width(),
      this.windowHeight = <number>this.$window.height(),
      this.windowScrollTop = <number>this.$window.scrollTop();

    this.defaultTiny = tinycolor('#000000'),
      this.lightTiny = tinycolor('#ffffff'),
      this.darkTiny = tinycolor('#000000');

    this.setupColors(), this.setupSearchSelect(), this.setupEvents();
  }

  // Setup helpers.

  protected setupColors(): void {
    this.colorVars = namedColorVars.colors;
    this.colorsByHex = {};
    this.colors = {};

    $.each(this.colorVars, (key: string, hex: string) => {
      this.colors[ key ] = this.colorProps(key, hex);
      this.colorsByHex[ hex ] = this.colors[ key ];
    });
    this.colorKeysByName = this.sortColorKeys(this.colors, 'name');
    this.colorKeysByHue = this.sortColorKeys(this.colors, 'hue');

    this.colorKeysByHue.forEach((key: string) => {
      let color = this.colors[ key ];
      let $anchor = $(this.colorAnchorMarkup(color));

      $anchor.data('color', color);
      this.$grid.append($anchor);

      this.totalGridColors++;
    });
    this.$grid.prepend($(this.searchAnchorMarkup()));
    this.totalGridColors++; // One more color.

    this.colorOptions = [], // Initialize.
      this.colorKeysByName.forEach((key: string) => {
        let color = this.colors[ key ];
        let markup = this.colorOptionMarkup(color);
        this.colorOptions.push(<t.ColorOption>{
          value: color.key,
          text: color.name,
          markup: markup,
        });
      });
  }

  protected setupSearchSelect(): void {
    this.$searchSelect.selectize(<any>{
      options: this.colorOptions,
      dropdownParent: this.$search,
      placeholder: this.options.i18n.searchColors,

      render: {
        item: (data: any) => {
          return $('<div>' + data.markup + '</div>');
        },
        option: (data: any) => {
          return $('<div>' + data.markup + '</div>');
        },
      },
      diacritics: false,
      closeAfterSelect: true,
      maxOptions: Math.min(50, this.colorOptions.length),
    });
  }

  protected setupEvents(): void {
    this.$grid.on('click.' + this.ns, '> .-color', this.onColorClick.bind(this));

    this.$info.on('click.' + this.ns, '> .-hex, > .-rgb, > .-hsl, > .-hsv', this.onInfoCopyClick.bind(this));
    this.$info.on('click.' + this.ns, '> .-select', this.onInfoSelectClick.bind(this));

    this.$searchSelect[ 0 ].selectize.on('item_add', this.onSearchSelect.bind(this));
    this.$searchOverlay.on('click.' + this.ns, this.onSearchOverlayClick.bind(this));

    this.$window.on('resize.' + this.ns, this.onWindowResize.bind(this));
    this.$document.on('keyup.' + this.ns, this.onDocumentKeyup.bind(this));
  }

  // Event handlers.

  protected onColorClick(e: JQueryEventObject): void {
    e.preventDefault();
    e.stopImmediatePropagation();

    let $anchor = $(e.currentTarget);
    let color = $anchor.data('color');

    if ($anchor.hasClass('-search')) {
      this.toggleSearch();
    } else if ($anchor.hasClass('-active')) {
      this.closeActiveColor();
    } else if (color) {
      this.setActiveColor(color);
    }
  }

  protected onInfoCopyClick(e: JQueryEventObject): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.copyText($.trim($(e.target).text()));
  }

  protected onInfoSelectClick(e: JQueryEventObject): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.selectActiveColor();
  }

  protected onSearchSelect(key: string): void {
    this.setActiveColor(key);
  }

  protected onSearchOverlayClick(e: JQueryEventObject): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.closeSearch();
  }

  protected onWindowResize(e: JQueryEventObject): void {
    this.resizeGrid(); // Resize grid colors.
  }

  protected onDocumentKeyup(e: JQueryEventObject): void {
    if (e.keyCode !== 27) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    this.close();
  }

  // Public open/close utilities.

  public open(options?: t.OpenOptionsArg, hexKeyOrName?: t.Color | string): void {
    options = <t.OpenOptions>$.extend({}, {
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

    this.showCodes = <boolean | Array<string>>options.showCodes;

    if (typeof this.onBeforeOpen === 'function') {
      this.onBeforeOpen();
    }
    this.closeOthers();
    this.closeSearch();
    this.closeActiveColor();

    if (!this.$picker.is(':visible')) {
      this.windowScrollTop = <number>this.$window.scrollTop();
    } // Remember `scrollTop()` before showing picker.

    this.$picker.show(), this.resizeGrid();
    this.$html.addClass(ss + '-open');

    if (hexKeyOrName) {
      this.setActiveColor(hexKeyOrName);
    } else if (options.openSearch) {
      this.openSearch();
    }
    if (typeof this.onOpened === 'function') {
      this.onOpened();
    }
  }

  public toggle(options?: t.OpenOptionsArg): boolean {
    if (this.$picker.is(':visible')) {
      this.close();
      return false;
    } else {
      this.open(options);
      return true;
    }
  }

  public close(restoreScrollTop: boolean = true): void {
    if (typeof this.onBeforeClose === 'function') {
      this.onBeforeClose();
    }
    this.closeSearch();
    this.closeActiveColor();

    this.$picker.hide();
    this.removeGridStyles();
    this.$html.removeClass(ss + '-open');

    if (restoreScrollTop) {// Restore?
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

  public getColors(): t.Colors {
    return this.colors;
  }

  public getColorKeysByName(): string[] {
    return this.colorKeysByName;
  }

  public getColorKeysByHue(): string[] {
    return this.colorKeysByHue;
  }

  public getActiveColor(): t.Color | undefined {
    let $color = this.$grid.find('> .-color.-active');
    return $color.data('color') || undefined;
  }

  public setActiveColor(hexKeyOrName: t.Color | string): void {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    let color = this.getColor(hexKeyOrName);
    if (!color) return; // Not possible.

    let $color = this.$grid.find('> .-color[href="#' + color.key + '"]');
    if (!$color.length) return; // Not possible.

    this.closeSearch();
    this.closeActiveColor();
    $color.addClass('-active');

    this.$info.html(this.infoMarkup(color)).fadeIn(150);
    let infoCssData = this.infoCssData($color, color);

    this.$info.css(<any>infoCssData.css).attr('class', '-info ' + infoCssData.arrowClass);
    this.$info.find('> .-select').css(<any>infoCssData.selectCss);

    if (infoCssData.arrowClass && infoCssData.arrowStyles) {
      this.$head.append(this.infoArrowStylesMarkup(infoCssData.arrowClass, infoCssData.arrowStyles));
    }
    if (typeof this.onColorActive === 'function') {
      this.onColorActive(this.getActiveColor());
    }
  }

  public selectActiveColor(): void {
    if (typeof this.onColorSelected === 'function') {
      this.onColorSelected(this.getActiveColor());
    } this.close(); // Close picker.
  }

  public closeActiveColor(): void {
    let $color = this.$grid.find('> .-color.-active');
    if (!$color.length) return;

    this.$info.hide();
    this.$info.html('');
    this.removeInfoStyles();
    $color.removeClass('-active');

    if (typeof this.onActiveColorClosed === 'function') {
      this.onActiveColorClosed($color.data('color'));
    }
  }

  // Public search utilities.

  public openSearch(hexKeyOrName?: t.Color | string): void {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    this.closeActiveColor();

    this.$searchOverlay.show();
    this.$search.show();

    this.$searchSelect[ 0 ].selectize.clear();
    this.$searchSelect[ 0 ].selectize.open();

    if (hexKeyOrName) {
      let color = this.getColor(hexKeyOrName);
      if (color) (<any>this.$searchSelect[ 0 ].selectize).setTextboxValue(color.name);
    }
  }

  public toggleSearch(): boolean {
    if (this.$search.is(':visible')) {
      this.closeSearch();
      return false;
    } else {
      this.openSearch();
      return true;
    }
  }

  public closeSearch(): void {
    this.$searchSelect[ 0 ].selectize.close();
    this.$search.hide();
    this.$searchOverlay.hide();
  }

  // Misc. public utilities.

  public debounce(f: Function, delay: number): Function {
    let timeout: any; // Timeout handle.

    return function (this: any, ...args: Array<any>) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => f.apply(this, args), delay);
    };
  }

  public getColor(hexKeyOrName: t.Color | string): t.Color | undefined {
    if (typeof hexKeyOrName === 'object') {
      return hexKeyOrName; // Color.

    } else if (hexKeyOrName.indexOf('#') === 0) {
      let hex = hexKeyOrName; // Hex code.

      if (this.colorsByHex[ hex ]) {
        return this.colorsByHex[ hex ];
      }
    } else { // Key or name.
      let name = hexKeyOrName;
      let key = this.colorNameToKey(name);

      if (this.colors[ key ]) {
        return this.colors[ key ];
      }
    }
  }

  public destroy(): void {
    this.close(false);

    this.removeInfoStyles();
    this.removeGridStyles();

    this.destroySearchSelect();
    this.$window.off('resize.' + this.ns);
    this.$picker.remove();

    instances.splice(this.instance - 1, 1);
  }

  // Other misc. utilities.

  protected closeOthers(): void {
    instances.forEach((instance, i) => {
      if (i !== this.instance - 1) instance.close(false);
    });
  }

  protected resizeGrid(): void {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    this.windowWidth = <number>this.$window.width();
    this.windowHeight = <number>this.$window.height();

    let gridPadding = 3, colorMargin = 3;

    if (this.windowWidth < 768) {
      gridPadding = 1, colorMargin = 1;
    }
    let gridInnerWidth = <number>this.$grid.innerWidth();
    let gridInnerHeight = <number>this.$grid.innerHeight();

    let gridWidth = gridInnerWidth - (gridPadding * 2);
    let gridHeight = gridInnerHeight - (gridPadding * 2);

    let colorSize = this.optimalColorSize(gridWidth, gridHeight, this.totalGridColors);
    colorSize = colorSize - (colorMargin * 2); // Excluding margin.

    this.removeGridStyles(); // Remove previous styles, before adding.
    this.$head.append(this.gridStylesMarkup(gridPadding, colorMargin, colorSize));
  }

  protected copyText(text: string): void {
    let $copied = this.$info.find('> .-copied');
    this.$textarea.val(text).select();

    try { // Catch exceptions.
      if (!win.document.queryCommandSupported('copy')) {
        this.promptCopy(text);
      } else if (!win.document.queryCommandEnabled('copy')) {
        this.promptCopy(text);
      } else if (!win.document.execCommand('copy', false, null)) {
        this.promptCopy(text);
      } else { // Success in this case.
        $copied.css('visibility', 'visible');
        setTimeout(() => $copied.css('visibility', 'hidden'), 500);
      }
    } catch (exception) {
      this.promptCopy(text);
    }
    this.$textarea.val('').blur();
  }

  protected promptCopy(text: string): void {
    win.prompt(this.options.i18n.promptCopyFallback, text);
  }

  protected colorKeyToSlug(key: string): string {
    return key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
  }

  protected colorKeyToName(key: string): string {
    return key.replace(/[A-Z]/g, (m) => ' ' + m).replace(/^./, (m) => m.toUpperCase());
  }

  protected colorNameToKey(name: string): string {
    return name.replace(/\s+([a-z])/gi, (m, $1) => $1.toUpperCase()).replace(/^./, (m) => m.toLowerCase());
  }

  protected colorProps(key: string, hex: string): t.Color {
    let tinyColor = tinycolor(hex);

    return <t.Color>{
      key: key, // camelCase.
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

  protected sortColorKeys(colors: t.Colors, by: string): string[] {
    if (by === 'name') {
      return Object.keys(colors).sort((keyA, keyB) => {
        let nameA = colors[ keyA ].name.toLowerCase();
        let nameB = colors[ keyB ].name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else if (by === 'hue') {
      return Object.keys(colors).sort((keyA, keyB) => {
        return colors[ keyA ].hsv.h - colors[ keyB ].hsv.h;
      });
    }
    return Object.keys(colors);
  }

  protected optimalColorSize(x: number, y: number, n: number): number {
    // See <https://jas.xyz/2oWF0uu>

    let px = Math.ceil(Math.sqrt(n * x / y));
    let py = Math.ceil(Math.sqrt(n * y / x));

    let pxyx = px * y / x;
    let pyxy = py * x / y;

    let sx, sy; // Initialize.

    if (Math.floor(pxyx) * px < n)
      sx = y / Math.ceil(pxyx);
    else sx = x / px;

    if (Math.floor(pyxy) * py < n)
      sy = x / Math.ceil(pyxy);
    else sy = y / py;

    return Math.max(sx, sy);
  }

  protected destroySearchSelect(): void {
    this.$searchSelect[ 0 ].selectize.destroy();
  }

  protected removeGridStyles(): void {
    this.$head.find('.' + this.ss + '-grid-styles').remove();
  }

  protected removeInfoStyles(): void {
    this.$head.find('.' + this.ss + '-info-styles').remove();
  }

  // Markup utilities.

  protected pickerMarkup(): string {
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

  protected gridStylesMarkup(gridPadding: number, colorMargin: number, colorSize: number): string {
    let markup = ''; // Initialize.

    markup += '<style class="' + this.ss + '-grid-styles">';
    markup += '.' + this.ss + ' > .-grid { padding: ' + gridPadding + 'px; }';
    markup += '.' + this.ss + ' > .-grid > .-color {';
    markup += '  margin:' + colorMargin + 'px; width:' + colorSize + 'px; height:' + colorSize + 'px;';
    markup += '}';
    markup += '</style>';

    return markup;
  }

  protected colorAnchorMarkup(color: t.Color): string {
    return '<a class="-color" style="background-color:' + color.hexString + ';" title="' + color.name + '" href="#' + color.key + '"></a>';
  }

  protected searchAnchorMarkup(): string {
    return '<a class="-color -search" href="#">' + this.searchIcon + '</a>';
  }

  protected colorOptionMarkup(color: t.Color): string {
    return '<span class="-color"><span class="-swatch" style="background-color:' + color.hexString + ';"></span> ' + color.name + '</span>';
  }

  protected infoMarkup(color: t.Color): string {
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

  protected infoArrowStylesMarkup(arrowClass: string, styles?: string): string {
    let markup = ''; // Initialize.

    markup += '<style class="' + this.ss + '-info-styles">';
    markup += '.' + this.ss + ' > .-info.' + arrowClass.replace(/\s/g, '.') + '::after {';
    markup += '  ' + styles;
    markup += '}';
    markup += '</style>';

    return markup;
  }

  // CSS data utilities.

  protected infoCssData($color: JQuery, color: t.Color): t.InfoCssData {
    let css: t.InfoCss = {
      top: 'auto', right: 'auto', bottom: 'auto', left: 'auto',
      color: color.isDark ? this.lightTiny.toHexString() : this.darkTiny.toHexString(),
      backgroundImage: 'linear-gradient(to bottom, ' + color.hexString + ', ' + color.tiny.clone().darken(10).toHexString() + ')',
    };
    let selectCss: t.InfoSelectCss = {
      borderColor: color.tiny.clone().darken(15).toHexString(),
      color: color.isDark ? this.lightTiny.toHexString() : this.darkTiny.toHexString(),
      backgroundImage: 'linear-gradient(to bottom, ' + color.hexString + ', ' + color.tiny.clone().darken(5).toHexString() + ')',
    };
    let spacing = .75 * this.emPixels;
    let arrowClass = '', arrowStyles = '';
    let rect = this.$info[ 0 ].getBoundingClientRect();
    let colorRect = $color[ 0 ].getBoundingClientRect();
    let largestSide = Math.max(rect.width, rect.height);

    if (colorRect.top < largestSide) {
      arrowClass = '-arrow-top';
      css.top = colorRect.top + colorRect.height + spacing;
      css.top = Math.max(0, Number(css.top)) + 'px';
    } else {
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
      } else if (css.top > this.windowHeight - rect.height) {
        css.top = this.windowHeight - rect.height;
        arrowClass += ' -arrow-left-bottom';
        arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - css.top - (colorRect.height / 2)) + 'px + .5em);';
      }
      css.top = String(css.top) + 'px';
      css.left = Math.max(0, Number(css.left)) + 'px';

    } else if (colorRect.left > this.windowWidth - largestSide) {
      arrowClass = '-arrow-right';
      css.left = colorRect.left - rect.width - spacing;
      css.top = colorRect.top + (colorRect.height / 2) - (rect.height / 2);

      if (css.top < 0) {
        css.top = 0; // Minimum.
        arrowClass += ' -arrow-right-top';
        arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - (colorRect.height / 2)) + 'px + .5em);';
      } else if (css.top > this.windowHeight - rect.height) {
        css.top = this.windowHeight - rect.height;
        arrowClass += ' -arrow-right-bottom';
        arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - css.top - (colorRect.height / 2)) + 'px + .5em);';
      }
      css.top = String(css.top) + 'px';
      css.left = Math.max(0, Number(css.left)) + 'px';

    } else {
      css.left = colorRect.left + (colorRect.width / 2) - (rect.width / 2);
      css.left = Math.max(0, Number(css.left)) + 'px';
    }
    let data: t.InfoCssData = {
      css: css,
      selectCss: selectCss,
      arrowClass: arrowClass,
      arrowStyles: arrowStyles,
    };
    return data;
  }
}

export default Instance;
