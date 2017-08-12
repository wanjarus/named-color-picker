import './types/extension';

export interface JQueryNamedColorPicker {
  (x?: Options | string, ...args: any[]): JQuery | any;
}

export interface Options {
  mode: string;

  titleizeElement: boolean;
  colorizeElement: boolean;

  showCodes: boolean | Array<string>;
  openSearch: boolean;

  i18n: {
    copied: string;
    select: string;
    searchColors: string;
    promptCopyFallback: string;
  };
}

export interface OptionsArg {
  mode?: string;

  titleizeElement?: boolean;
  colorizeElement?: boolean;

  showCodes?: boolean | Array<string>;
  openSearch?: boolean;

  i18n?: {
    copied?: string;
    select?: string;
    searchColors?: string;
    promptCopyFallback?: string;
  };
}

export interface OpenOptions {
  onBeforeOpen: Function | undefined;
  onOpened: Function | undefined;

  onBeforeClose: Function | undefined;
  onClosed: Function | undefined;

  onColorActive: Function | undefined;
  onActiveColorClosed: Function | undefined;
  onColorSelected: Function | undefined;

  showCodes: boolean | Array<string>;
  openSearch: boolean;
}

export interface OpenOptionsArg {
  onBeforeOpen?: Function | undefined;
  onOpened?: Function | undefined;

  onBeforeClose?: Function | undefined;
  onClosed?: Function | undefined;

  onColorActive?: Function | undefined;
  onActiveColorClosed?: Function | undefined;
  onColorSelected?: Function | undefined;

  showCodes?: boolean | Array<string>;
  openSearch?: boolean;
}

export interface Color {
  key: string;
  slug: string;
  name: string;

  hex: string;

  rgb: {
    r: number;
    g: number;
    b: number;
  };

  hsl: {
    h: number;
    s: number;
    l: number;
  };

  hsv: {
    h: number;
    s: number;
    v: number;
  };

  hexString: string;
  rgbString: string;
  hslString: string;
  hsvString: string;

  isDark: boolean;
  isLight: boolean;

  tiny: tinycolorInstance;
}

export interface Colors {
  [ key: string ]: Color;
}

export interface ColorOption {
  value: string;
  text: string;
}

export interface InfoCss {
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;

  color: string;
  backgroundImage: string;
}

export interface InfoSelectCss {
  color: string;
  borderColor: string;
  backgroundImage: string;
}

export interface InfoCssData {
  css: InfoCss;
  selectCss: InfoSelectCss;
  arrowClass: string;
  arrowStyles: string;
}
