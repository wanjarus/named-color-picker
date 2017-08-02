import * as t from './types';
import * as namedColorVars from '@src-works/named-color-vars';
import { win } from '@src-works/window-var';

let ns: string = 'namedColorPicker';
let $: JQueryStatic = win.jQuery || win.$ || require('jquery');
let tinycolor: tinycolor = win.tinycolor || require('tinycolor2');
if (!$.fn.select2) require('select2'); // jQuery extension.

export class Instance {
  protected instance: number;

  protected $window: JQuery;
  protected $document: JQuery;

  protected windowWidth: number;
  protected windowHeight: number;

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

  protected colorVars: namedColorVars.Colors;
  protected colors: t.Colors;

  protected colorKeysByHue: string[];
  protected colorKeyByName: string[];

  protected colorOptions: t.ColorOption[];
  protected totalGridColors: number = 0;

  protected options: t.Options;
  protected onSelect: Function | null | undefined;

  // Constructor.

  public constructor(instance: number, options?: t.OptionsArg) {
    this.instance = instance; // Instance number.

    this.options = <t.Options>$.extend({}, {
      i18n: {
        copied: 'copied',
        select: 'Select',
        searchColors: 'Search Colors',
      }
    }, options || {});

    this.$window = $(win);
    this.$document = $(win.document);

    this.windowWidth = this.$window.width();
    this.windowHeight = this.$window.height();

    this.$head = $('head');
    this.$body = $('body');

    this.$picker = $(this.pickerMarkup());
    this.$picker.data(ns, this);
    this.$body.append(this.$picker);

    this.$info = this.$picker.find('> .-info');
    this.$grid = this.$picker.find('> .-grid');

    this.$search = this.$picker.find('> .-search');
    this.$searchSelect = this.$search.find('> select');
    this.$searchOverlay = this.$picker.find('> .-search-overlay');

    this.$textarea = this.$picker.find('> .-textarea');

    this.emPixels = parseInt(<string>getComputedStyle(this.$picker[ 0 ]).fontSize);
    this.searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.3 446.3"><g><path d="M318.8 280.5h-20.5l-7.6-7.7c25.5-28 40.8-66.2 40.8-107 0-92-74-165.8-165.8-165.8S0 74 0 165.8s74 165.7 165.8 165.7c40.7 0 79-15.3 107-40.8l7.7 7.6v20.4L408 446.3l38.3-38.3-127.6-127.5zm-153 0C102 280.5 51 229.5 51 165.7S102 51 165.8 51s114.7 51 114.7 114.8-51 114.7-114.8 114.7z"/></g></svg>';

    this.setupColors();
    this.setupEvents();
  }

  // Setup helpers.

  protected setupColors() {
    this.colorVars = namedColorVars.colors;
    this.colors = {}; // Initialize.

    $.each(this.colorVars, (key: string, hex: string) => {
      this.colors[ key ] = this.colorProps(key, hex);
    });
    this.colorKeysByHue = this.sortColorKeys(this.colors, 'hue');
    this.colorKeyByName = this.sortColorKeys(this.colors, 'name');

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
      this.colorKeyByName.forEach((key: string) => {
        let color = this.colors[ key ];
        let $option = $(this.colorOptionMarkup(color));

        this.colorOptions.push(<t.ColorOption>{
          color: color,
          $option: $option,
          index: this.colorOptions.length,

          id: color.slug, // Required by select2.
          text: color.name, // Same here.
        });
      });
  }

  protected setupEvents() {
    this.$window.on('resize.' + ns, this.onWindowResize.bind(this));

    this.$grid.on('click.' + ns, '> .-color', this.onColorClick.bind(this));

    this.$info.on('click.' + ns, '> .-hex, > .-rgb, > .-hsl, > .-hsv', this.onInfoCopyClick.bind(this));
    this.$info.on('click.' + ns, '> .-select', this.onInfoSelectClick.bind(this));

    this.$searchOverlay.on('click.' + ns, this.onSearchOverlayClick.bind(this));
    this.$searchSelect.on('select2:select.' + ns, this.onSearchSelect.bind(this));
  }

  // Event handlers.

  protected onWindowResize(e: JQueryEventObject) {
    this.resizeGrid(); // Resize grid colors.
  }

  protected onColorClick(e: JQueryEventObject) {
    let $color = $(e.currentTarget);

    if ($color.hasClass('-search')) {
      return this.toggleSearch();
    } else if ($color.hasClass('-active')) {
      return this.closeActiveColor();
    }
    this.closeSearch();
    this.closeActiveColor();

    let color = $color.data('color');
    $color.addClass('-active');

    this.$info.html(this.infoMarkup(color)).show();

    let infoCssData = this.infoCssData($color, color);
    this.$info.css(infoCssData.css).attr('class', '-info ' + infoCssData.arrowClass);

    if (infoCssData.arrowClass && infoCssData.arrowStyles) {
      this.$head.append(this.infoArrowStylesMarkup(infoCssData.arrowClass, infoCssData.arrowStyles));
    }
  }

  protected onInfoCopyClick(e: JQueryEventObject) {
    let $this = $(e.target);
    let text = $.trim($this.text());
    let $copied = this.$info.find('> .-copied');

    this.$textarea.val(text).select();
    document.execCommand('copy');
    this.$textarea.val('').blur();

    $copied.css('visibility', 'visible');
    setTimeout(() => $copied.css('visibility', 'hidden'), 500);
  }

  protected onInfoSelectClick(e: JQueryEventObject) {
    if (typeof this.onSelect === 'function') {
      this.onSelect(this.getActiveColor(), this);
    } else {
      this.close(); // Close picker.
    }
  }

  protected onSearchSelect(e: JQueryEventObject | any) {
    this.setActiveColor(e.params.data.color.key);
  }

  protected onSearchOverlayClick(e: JQueryEventObject) {
    this.closeSearch();
  }

  // Public API.

  public open(options?: t.OpenOptionsArg) {
    this.closeSearch();
    this.closeActiveColor();
    this.$picker.show();

    options = <t.OpenOptions>$.extend({}, {
      openSearch: false,
      setActiveColor: '',
      onSelect: undefined,
    }, options || {});

    this.resizeGrid();
    this.onSelect = options.onSelect;
    if (options.openSearch) this.openSearch();
    if (options.setActiveColor) this.setActiveColor(options.setActiveColor);
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

  public close() {
    this.closeSearch();
    this.closeActiveColor();
    this.$picker.hide();

    this.removeGridStyles();
    this.onSelect = undefined;
  }

  public resizeGrid() {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    let gridPadding = 1, colorMargin = 1;

    this.windowWidth = this.$window.width();
    this.windowHeight = this.$window.height();

    let gridInnerWidth = this.$grid.innerWidth();
    let gridInnerHeight = this.$grid.innerHeight();

    let gridWidth = gridInnerWidth - (gridPadding * 2);
    let gridHeight = gridInnerHeight - (gridPadding * 2);

    let colorSize = this.optimalColorSize(gridWidth, gridHeight, this.totalGridColors);
    colorSize = colorSize - (colorMargin * 2); // Excluding margin.

    this.removeGridStyles(); // Remove previous styles, before adding.
    this.$head.append(this.gridStylesMarkup(gridPadding, colorMargin, colorSize));
  }

  public setActiveColor(x: t.Color | string) {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    let key = typeof x === 'object' && x.key ? x.key : String(x);
    this.$grid.find('> .-color[href="#' + key + '"]').click();
  }

  public getActiveColor(): t.Color | null | undefined {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    let $color = this.$grid.find('> .-color.-active');
    return $color.data('color') || undefined;
  }

  public closeActiveColor() {
    this.$info.hide().html(''), this.removeInfoStyles();
    this.$grid.find('> .-color.-active').removeClass('-active');
  }

  public openSearch() {
    if (!this.$picker.is(':visible'))
      return; // Not possible.

    this.closeActiveColor();

    this.$searchOverlay.show();
    this.$search.show();

    this.maybeInitSearchSelect2();
    this.$searchSelect.val('').trigger('change');
    this.$searchSelect.select2('open');
  }

  public toggleSearch() {
    if (this.$search.is(':visible')) {
      this.closeSearch();
      return false;
    } else {
      this.openSearch();
      return true;
    }
  }

  public closeSearch() {
    this.$search.hide();
    this.$searchOverlay.hide();
  }

  public destroy() {
    this.close();
    this.removeInfoStyles();
    this.removeGridStyles();
    this.maybeDestroySearchSelect2();
    this.$window.off('resize' + ns);
    this.$picker.remove();
  }

  // Utilities.

  protected removeGridStyles() {
    this.$head.find('.named-color-picker-grid-styles-' + this.instance).remove();
  }

  protected removeInfoStyles() {
    this.$head.find('.named-color-picker-info-styles-' + this.instance).remove();
  }

  protected colorProps(key: string, hex: string): t.Color {
    let tinyColor = tinycolor(hex);

    return <t.Color>{
      key: key, // camelCase property key.
      slug: key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()),
      name: key.replace(/[A-Z]/g, (m) => ' ' + m).replace(/^./, (m) => m.toUpperCase()),

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

  protected maybeInitSearchSelect2() {
    if (this.$searchSelect.data('initialized'))
      return; // Did this already.

    this.$searchSelect.select2({
      allowClear: true,
      data: this.colorOptions,
      dropdownParent: this.$search,
      placeholder: this.options.i18n.searchColors,

      templateResult: (data: any) => {
        if (data && typeof data.index === 'number')
          return this.colorOptions[ data.index ].$option;
        return data && data.text ? data.text : '';
      },
    }).data('initialized', true);
  }

  protected maybeDestroySearchSelect2() {
    if (this.$searchSelect.data('initialized'))
      return; // Nothing to destroy.

    this.$searchSelect.select2('destroy');
    this.$searchSelect.removeData('initialized');
  }

  // Markup utils.

  protected pickerMarkup(): string {
    let markup = ''; // Initialize.

    markup += '<div class="named-color-picker named-color-picker-' + this.instance + '">';
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

    markup += '<style class="named-color-picker-grid-styles-' + this.instance + '">';
    markup += '.named-color-picker-' + this.instance + ' > .-grid { padding: ' + gridPadding + 'px; }';
    markup += '.named-color-picker-' + this.instance + ' > .-grid > .-color {';
    markup += '  margin:' + colorMargin + 'px; width:' + colorSize + 'px; height:' + colorSize + 'px;';
    markup += '}';
    markup += '</style>';

    return markup;
  }

  protected colorAnchorMarkup(color: t.Color): string {
    return '<a class="-color" style="background-color:' + color.hexString + ';" href="#' + color.key + '"></a>';
  }

  protected searchAnchorMarkup(): string {
    return '<a class="-color -search" href="#">' + this.searchIcon + '</a>';
  }

  protected colorOptionMarkup(color: t.Color): string {
    return '<span class="-color"><span class="-swatch" style="background-color:' + color.hexString + ';"></span> ' + color.name + '</span>';
  }

  protected infoMarkup(color: t.Color): string {
    let markup = ''; // Initialize.

    markup += '<div class="-title">' + color.name + '</div>';
    markup += '<a class="-hex" href="#">' + color.hexString + '</a>';
    markup += '<a class="-rgb" href="#">' + color.rgbString + '</a>';
    markup += '<a class="-hsl" href="#">' + color.hslString + '</a>';
    markup += '<a class="-hsv" href="#">' + color.hsvString + '</a>';
    markup += '<div class="-copied">' + this.options.i18n.copied + '</div>';

    if (this.onSelect !== null) {
      markup += '<button type="button" class="-select">' + this.options.i18n.select + '</button>';
    }
    return markup;
  }

  protected infoArrowStylesMarkup(arrowClass: string, styles?: string): string {
    let markup = ''; // Initialize.

    markup += '<style class="named-color-picker-info-styles-' + this.instance + '">';
    markup += '.named-color-picker' + this.instance + ' > .-info.' + arrowClass.replace(/\s/g, '.') + '::after {';
    markup += '  ' + styles;
    markup += '}';
    markup += '</style>';

    return markup;
  }

  // CSS data utils.

  protected infoCssData($color: JQuery, color: t.Color): t.InfoCssData {
    let css: t.InfoCss = {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
      backgroundColor: color.hexString,
      color: color.isDark ? '#fff' : '#000',
    }; // Initialize.

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
      css: css, // Props.
      arrowClass: arrowClass,
      arrowStyles: arrowStyles,
    };
    return data;
  }
}

export default Instance;
