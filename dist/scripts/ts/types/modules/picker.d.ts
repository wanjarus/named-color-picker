/// <reference types="jquery" />
import * as t from './types';
import * as namedColorVars from '@src-works/named-color-vars';
export declare class Instance {
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
    protected emPixels: number;
    protected searchIcon: string;
    protected colorVars: namedColorVars.Colors;
    protected colors: t.Colors;
    protected colorKeysByHue: string[];
    protected colorKeyByName: string[];
    protected colorOptions: t.ColorOption[];
    protected totalGridColors: number;
    protected options: t.Options;
    protected onSelect: Function | null | undefined;
    constructor(instance: number, options?: t.OptionsArg);
    protected setupColors(): void;
    protected setupEvents(): void;
    protected onWindowResize(e: JQueryEventObject): void;
    protected onColorClick(e: JQueryEventObject): boolean | void;
    protected onInfoCopyClick(e: JQueryEventObject): void;
    protected onInfoSelectClick(e: JQueryEventObject): void;
    protected onSearchSelect(e: JQueryEventObject | any): void;
    protected onSearchOverlayClick(e: JQueryEventObject): void;
    open(options?: t.OpenOptionsArg): void;
    toggle(options?: t.OpenOptionsArg): boolean;
    close(): void;
    resizeGrid(): void;
    setActiveColor(x: t.Color | string): void;
    getActiveColor(): t.Color | null | undefined;
    closeActiveColor(): void;
    openSearch(): void;
    toggleSearch(): boolean;
    closeSearch(): void;
    destroy(): void;
    protected removeGridStyles(): void;
    protected removeInfoStyles(): void;
    protected colorProps(key: string, hex: string): t.Color;
    protected sortColorKeys(colors: t.Colors, by: string): string[];
    protected optimalColorSize(x: number, y: number, n: number): number;
    protected maybeInitSearchSelect2(): void;
    protected maybeDestroySearchSelect2(): void;
    protected pickerMarkup(): string;
    protected gridStylesMarkup(gridPadding: number, colorMargin: number, colorSize: number): string;
    protected colorAnchorMarkup(color: t.Color): string;
    protected searchAnchorMarkup(): string;
    protected colorOptionMarkup(color: t.Color): string;
    protected infoMarkup(color: t.Color): string;
    protected infoArrowStylesMarkup(arrowClass: string, styles?: string): string;
    protected infoCssData($color: JQuery, color: t.Color): t.InfoCssData;
}
export default Instance;
