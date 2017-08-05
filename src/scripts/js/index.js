"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Picker = require("./modules/picker");
const window_var_1 = require("@src-works/window-var");
let ns = 'namedColorPicker';
let $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');
class Instance {
    constructor(element, options) {
        Instance.counter = Instance.counter || 0;
        Instance.counter++; // Increment counter.
        this.instance = Instance.counter;
        let $element = $(element);
        let existingInstance = $element.data(ns);
        if (existingInstance)
            existingInstance.destroy();
        this.options = $.extend({}, {
            i18n: {
                copied: 'copied',
                select: 'Select',
                searchColors: 'Search Colors',
            },
            mode: 'auto',
            openSearch: false,
            titleizeElement: true,
            colorizeElement: true,
        }, options || {});
        if (!Instance.picker) {
            let pickerOptions = { i18n: this.options.i18n };
            Instance.picker = new Picker.Instance(this.instance, pickerOptions);
        }
        this.$element = $element;
        this.$element.data(ns, this);
        this.elementTagName = this.$element.prop('tagName');
        this.elementTagName = this.elementTagName.toLowerCase();
        this.elementTagType = this.$element.attr('type') || '';
        this.elementTagType = this.elementTagType.toLowerCase();
        if (this.options.mode === 'auto') {
            if (this.elementTagName === 'input' && this.elementTagType === 'color') {
                this.options.mode = 'swatch-only';
            }
            else
                this.options.mode = 'swatch-after';
        }
        this.elementOriginalTitleAttr = this.$element.attr('title');
        this.elementOriginalCssColor = this.$element.css('color');
        this.elementOriginalCssBackground = this.$element.css('background');
        this.setupSwatch(); // Setup swatch/events.
    }
    setupSwatch() {
        this.$swatch = $(this.swatchMarkup());
        if (this.options.mode === 'swatch-before') {
            this.$element.before(this.$swatch);
        }
        else if (this.options.mode === 'swatch-after') {
            this.$element.after(this.$swatch);
        }
        else if (this.options.mode === 'swatch-only') {
            this.$element.after(this.$swatch);
        }
        if (this.options.mode === 'swatch-only') {
            this.$element.hide(); // Hide the element source.
        }
        this.$element.on('keyup.' + ns + ' cut.' + ns + ' paste.' + ns + ' change.' + ns + ' blur.' + ns, this.onElementAlter.bind(this));
        this.$swatch.show().on('click.' + ns, this.onSwatchClick.bind(this));
    }
    onElementAlter(e) {
        if (e.namespace === ns)
            return; // Stop here in this special case.
        if (this.options.titleizeElement) {
            this.$element.attr('title', this.elementOriginalTitleAttr || '');
        }
        if (this.options.colorizeElement) {
            this.$element.css('color', this.elementOriginalCssColor || '');
            this.$element.css('background', this.elementOriginalCssBackground || '');
        }
        this.$swatch.css('color', this.$element.val() || '#000');
    }
    onSwatchClick(e) {
        Instance.picker.open({
            openSearch: this.options.openSearch,
            setActiveColor: this.$element.val() || '',
            onSelect: this.onSelect.bind(this),
        });
    }
    onSelect(color, picker) {
        picker.close(); // Close color picker.
        this.$element.val(color.hexString).trigger('change');
        this.$swatch.css('color', color.hexString);
        if (this.options.titleizeElement) {
            this.$element.attr('title', color.name + ' (' + color.hexString + ')');
        }
        if (this.options.colorizeElement) {
            this.$element.css({
                background: color.hexString,
                color: color.isDark ? '#fff' : '#000',
            });
        }
    }
    destroy(keepPicker = false) {
        this.$swatch.remove();
        if (this.options.mode === 'swatch-only')
            this.$element.show();
        this.$element.removeData(ns);
        Instance.counter--;
        this.instance = -1;
        if (!Instance.counter && !keepPicker) {
            Instance.picker.destroy();
            delete Instance.picker;
        }
    }
    swatchMarkup() {
        let markup = ''; // Initialize.
        markup += '<span class="named-color-picker-swatch -' + this.options.mode + '" style="display:none;">';
        markup += ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path d="M57.6 0H6.4C3 0 0 3 0 6.4v51.2C0 61 3 64 6.4 64h51.2c3.5 0 6.4-3 6.4-6.4V6.4C64 3 61 0 57.6 0zM22.4 41.6H9.6V28.8h12.8v12.8zm0-19.2H9.6V9.6h12.8v12.8zm19.2 0H28.8V9.6h12.8v12.8z"/></g></svg>';
        markup += '</span>';
        return markup;
    }
}
exports.Instance = Instance;
exports.default = $.fn.namedColorPicker = setup(); // Auto-setup (default export).
function setup(_$ = $, _ns = ns) {
    $ = _$, ns = _ns; // Allow these to be overridden when called upon directly.
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
