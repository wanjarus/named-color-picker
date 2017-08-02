/// <reference types="jquery" />
import * as t from './modules/types';
import * as Picker from './modules/picker';
export declare class Instance {
    protected static counter: number;
    protected static picker: Picker.Instance;
    protected instance: number;
    protected options: t.Options;
    protected $element: JQuery;
    protected elementTagName: string;
    protected elementTagType: string;
    protected $swatch: JQuery;
    constructor(element: JQuery | HTMLElement, options?: t.OptionsArg);
    protected setupSwatch(): void;
    protected onSwatchClick(e: JQueryEventObject): void;
    protected onSelect(color: t.Color, picker: Picker.Instance): void;
    protected destroy(keepPicker?: boolean): void;
    protected swatchMarkup(): string;
}
declare const _default: t.JQueryNamedColorPicker;
export default _default;
export declare function setup(_$?: JQueryStatic, _ns?: string): t.JQueryNamedColorPicker;
