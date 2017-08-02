import './types/extension';

export interface JQueryNamedColorPicker {
  (x?: Options | string, ...args: any[]): JQuery | any;
}

export interface Options {
  i18n: {
    copied: string;
    select: string;
    searchColors: string;
  };
  mode: string;
  openSearch: boolean;
  colorizeElement: boolean;
  titleizeElement: boolean;
}

export interface OptionsArg {
  i18n?: {
    copied: string;
    select: string;
    searchColors: string;
  };
  mode?: string;
  openSearch?: boolean;
  colorizeElement?: boolean;
  titleizeElement?: boolean;
}

export interface OpenOptions {
  openSearch: boolean;
  setActiveColor: Color | string;
  onSelect: Function | null | undefined;
}

export interface OpenOptionsArg {
  openSearch?: boolean;
  setActiveColor?: Color | string;
  onSelect?: Function | null | undefined;
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
}

export interface Colors {
  [ key: string ]: Color;
}

export interface ColorOption {
  color: Color;
  $option: JQuery;
  index: number;
  id: string;
  text: string;
}

export interface InfoCss extends JQueryCssProperties {
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
  backgroundColor: string;
  color: string;
}

export interface InfoCssData {
  css: InfoCss;
  arrowClass: string;
  arrowStyles: string;
}
