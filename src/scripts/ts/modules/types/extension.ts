import * as t from '../types';

declare global {
  interface JQuery {
    namedColorPicker: t.JQueryNamedColorPicker;
  }
}
