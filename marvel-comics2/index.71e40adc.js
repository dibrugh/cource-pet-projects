function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire771b"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire771b"] = parcelRequire;
}
// Чтобы не было ошибки при работе с асинхронными функциями в Parcel/Webpack
// import 'regenerator-runtime/runtime'
// Создаём этот файл, чтобы не получать ошибки на этапе сборки проекта, т.к сборщик по умолчанию ищет index.js
// Каждый компонент представляет class, поэтому название директории и файлов также с заглавной буквы.
// Константы для работы с API
const $0d08573aed154efc$export$a9861bd62f48e142 = "a5837db97d72016c81a7a776f4240db9";
const $0d08573aed154efc$export$923ea8233b386e99 = "https://gateway.marvel.com/v1/public/";
const $0d08573aed154efc$export$5603b5dc13219391 = "comics";
const $0d08573aed154efc$export$3da97970fe06e0d2 = "characters";
const $0d08573aed154efc$export$b7cb009e1faa81c5 = "standard_xlarge";
const $0d08573aed154efc$export$8c8bbd90becac28b = "image_not_available";


// Импортируем axios из модулей
"use strict";
function $9793d8a71e8d5ff2$export$2e2bcd8739ae039(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}


"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString: $6c358707ac100c0e$var$toString } = Object.prototype;
const { getPrototypeOf: $6c358707ac100c0e$var$getPrototypeOf } = Object;
const $6c358707ac100c0e$var$kindOf = ((cache)=>(thing)=>{
        const str = $6c358707ac100c0e$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const $6c358707ac100c0e$var$kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>$6c358707ac100c0e$var$kindOf(thing) === type;
};
const $6c358707ac100c0e$var$typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray: $6c358707ac100c0e$var$isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const $6c358707ac100c0e$var$isUndefined = $6c358707ac100c0e$var$typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $6c358707ac100c0e$var$isBuffer(val) {
    return val !== null && !$6c358707ac100c0e$var$isUndefined(val) && val.constructor !== null && !$6c358707ac100c0e$var$isUndefined(val.constructor) && $6c358707ac100c0e$var$isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const $6c358707ac100c0e$var$isArrayBuffer = $6c358707ac100c0e$var$kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $6c358707ac100c0e$var$isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $6c358707ac100c0e$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const $6c358707ac100c0e$var$isString = $6c358707ac100c0e$var$typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const $6c358707ac100c0e$var$isFunction = $6c358707ac100c0e$var$typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const $6c358707ac100c0e$var$isNumber = $6c358707ac100c0e$var$typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const $6c358707ac100c0e$var$isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const $6c358707ac100c0e$var$isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const $6c358707ac100c0e$var$isPlainObject = (val)=>{
    if ($6c358707ac100c0e$var$kindOf(val) !== "object") return false;
    const prototype = $6c358707ac100c0e$var$getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const $6c358707ac100c0e$var$isDate = $6c358707ac100c0e$var$kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $6c358707ac100c0e$var$isFile = $6c358707ac100c0e$var$kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const $6c358707ac100c0e$var$isBlob = $6c358707ac100c0e$var$kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $6c358707ac100c0e$var$isFileList = $6c358707ac100c0e$var$kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const $6c358707ac100c0e$var$isStream = (val)=>$6c358707ac100c0e$var$isObject(val) && $6c358707ac100c0e$var$isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const $6c358707ac100c0e$var$isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || $6c358707ac100c0e$var$isFunction(thing.append) && ((kind = $6c358707ac100c0e$var$kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && $6c358707ac100c0e$var$isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const $6c358707ac100c0e$var$isURLSearchParams = $6c358707ac100c0e$var$kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const $6c358707ac100c0e$var$trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function $6c358707ac100c0e$var$forEach(obj, fn, { allOwnKeys: allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($6c358707ac100c0e$var$isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function $6c358707ac100c0e$var$findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const $6c358707ac100c0e$var$_global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : $parcel$global;
})();
const $6c358707ac100c0e$var$isContextDefined = (context)=>!$6c358707ac100c0e$var$isUndefined(context) && context !== $6c358707ac100c0e$var$_global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function $6c358707ac100c0e$var$merge() {
    const { caseless: caseless } = $6c358707ac100c0e$var$isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && $6c358707ac100c0e$var$findKey(result, key) || key;
        if ($6c358707ac100c0e$var$isPlainObject(result[targetKey]) && $6c358707ac100c0e$var$isPlainObject(val)) result[targetKey] = $6c358707ac100c0e$var$merge(result[targetKey], val);
        else if ($6c358707ac100c0e$var$isPlainObject(val)) result[targetKey] = $6c358707ac100c0e$var$merge({}, val);
        else if ($6c358707ac100c0e$var$isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && $6c358707ac100c0e$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const $6c358707ac100c0e$var$extend = (a, b, thisArg, { allOwnKeys: allOwnKeys } = {})=>{
    $6c358707ac100c0e$var$forEach(b, (val, key)=>{
        if (thisArg && $6c358707ac100c0e$var$isFunction(val)) a[key] = (0, $9793d8a71e8d5ff2$export$2e2bcd8739ae039)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys: allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const $6c358707ac100c0e$var$stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const $6c358707ac100c0e$var$inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const $6c358707ac100c0e$var$toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && $6c358707ac100c0e$var$getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const $6c358707ac100c0e$var$endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const $6c358707ac100c0e$var$toArray = (thing)=>{
    if (!thing) return null;
    if ($6c358707ac100c0e$var$isArray(thing)) return thing;
    let i = thing.length;
    if (!$6c358707ac100c0e$var$isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const $6c358707ac100c0e$var$isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && $6c358707ac100c0e$var$getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const $6c358707ac100c0e$var$forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const $6c358707ac100c0e$var$matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const $6c358707ac100c0e$var$isHTMLForm = $6c358707ac100c0e$var$kindOfTest("HTMLFormElement");
const $6c358707ac100c0e$var$toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const $6c358707ac100c0e$var$hasOwnProperty = (({ hasOwnProperty: hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const $6c358707ac100c0e$var$isRegExp = $6c358707ac100c0e$var$kindOfTest("RegExp");
const $6c358707ac100c0e$var$reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    $6c358707ac100c0e$var$forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const $6c358707ac100c0e$var$freezeMethods = (obj)=>{
    $6c358707ac100c0e$var$reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if ($6c358707ac100c0e$var$isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!$6c358707ac100c0e$var$isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const $6c358707ac100c0e$var$toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    $6c358707ac100c0e$var$isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const $6c358707ac100c0e$var$noop = ()=>{};
const $6c358707ac100c0e$var$toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const $6c358707ac100c0e$var$ALPHA = "abcdefghijklmnopqrstuvwxyz";
const $6c358707ac100c0e$var$DIGIT = "0123456789";
const $6c358707ac100c0e$var$ALPHABET = {
    DIGIT: $6c358707ac100c0e$var$DIGIT,
    ALPHA: $6c358707ac100c0e$var$ALPHA,
    ALPHA_DIGIT: $6c358707ac100c0e$var$ALPHA + $6c358707ac100c0e$var$ALPHA.toUpperCase() + $6c358707ac100c0e$var$DIGIT
};
const $6c358707ac100c0e$var$generateString = (size = 16, alphabet = $6c358707ac100c0e$var$ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length: length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function $6c358707ac100c0e$var$isSpecCompliantForm(thing) {
    return !!(thing && $6c358707ac100c0e$var$isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const $6c358707ac100c0e$var$toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if ($6c358707ac100c0e$var$isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = $6c358707ac100c0e$var$isArray(source) ? [] : {};
                $6c358707ac100c0e$var$forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !$6c358707ac100c0e$var$isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const $6c358707ac100c0e$var$isAsyncFn = $6c358707ac100c0e$var$kindOfTest("AsyncFunction");
const $6c358707ac100c0e$var$isThenable = (thing)=>thing && ($6c358707ac100c0e$var$isObject(thing) || $6c358707ac100c0e$var$isFunction(thing)) && $6c358707ac100c0e$var$isFunction(thing.then) && $6c358707ac100c0e$var$isFunction(thing.catch);
var $6c358707ac100c0e$export$2e2bcd8739ae039 = {
    isArray: $6c358707ac100c0e$var$isArray,
    isArrayBuffer: $6c358707ac100c0e$var$isArrayBuffer,
    isBuffer: $6c358707ac100c0e$var$isBuffer,
    isFormData: $6c358707ac100c0e$var$isFormData,
    isArrayBufferView: $6c358707ac100c0e$var$isArrayBufferView,
    isString: $6c358707ac100c0e$var$isString,
    isNumber: $6c358707ac100c0e$var$isNumber,
    isBoolean: $6c358707ac100c0e$var$isBoolean,
    isObject: $6c358707ac100c0e$var$isObject,
    isPlainObject: $6c358707ac100c0e$var$isPlainObject,
    isUndefined: $6c358707ac100c0e$var$isUndefined,
    isDate: $6c358707ac100c0e$var$isDate,
    isFile: $6c358707ac100c0e$var$isFile,
    isBlob: $6c358707ac100c0e$var$isBlob,
    isRegExp: $6c358707ac100c0e$var$isRegExp,
    isFunction: $6c358707ac100c0e$var$isFunction,
    isStream: $6c358707ac100c0e$var$isStream,
    isURLSearchParams: $6c358707ac100c0e$var$isURLSearchParams,
    isTypedArray: $6c358707ac100c0e$var$isTypedArray,
    isFileList: $6c358707ac100c0e$var$isFileList,
    forEach: $6c358707ac100c0e$var$forEach,
    merge: $6c358707ac100c0e$var$merge,
    extend: $6c358707ac100c0e$var$extend,
    trim: $6c358707ac100c0e$var$trim,
    stripBOM: $6c358707ac100c0e$var$stripBOM,
    inherits: $6c358707ac100c0e$var$inherits,
    toFlatObject: $6c358707ac100c0e$var$toFlatObject,
    kindOf: $6c358707ac100c0e$var$kindOf,
    kindOfTest: $6c358707ac100c0e$var$kindOfTest,
    endsWith: $6c358707ac100c0e$var$endsWith,
    toArray: $6c358707ac100c0e$var$toArray,
    forEachEntry: $6c358707ac100c0e$var$forEachEntry,
    matchAll: $6c358707ac100c0e$var$matchAll,
    isHTMLForm: $6c358707ac100c0e$var$isHTMLForm,
    hasOwnProperty: $6c358707ac100c0e$var$hasOwnProperty,
    hasOwnProp: $6c358707ac100c0e$var$hasOwnProperty,
    reduceDescriptors: $6c358707ac100c0e$var$reduceDescriptors,
    freezeMethods: $6c358707ac100c0e$var$freezeMethods,
    toObjectSet: $6c358707ac100c0e$var$toObjectSet,
    toCamelCase: $6c358707ac100c0e$var$toCamelCase,
    noop: $6c358707ac100c0e$var$noop,
    toFiniteNumber: $6c358707ac100c0e$var$toFiniteNumber,
    findKey: $6c358707ac100c0e$var$findKey,
    global: $6c358707ac100c0e$var$_global,
    isContextDefined: $6c358707ac100c0e$var$isContextDefined,
    ALPHABET: $6c358707ac100c0e$var$ALPHABET,
    generateString: $6c358707ac100c0e$var$generateString,
    isSpecCompliantForm: $6c358707ac100c0e$var$isSpecCompliantForm,
    toJSONObject: $6c358707ac100c0e$var$toJSONObject,
    isAsyncFn: $6c358707ac100c0e$var$isAsyncFn,
    isThenable: $6c358707ac100c0e$var$isThenable
};







"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function $39018d9e9893716d$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).inherits($39018d9e9893716d$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const $39018d9e9893716d$var$prototype = $39018d9e9893716d$var$AxiosError.prototype;
const $39018d9e9893716d$var$descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    $39018d9e9893716d$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($39018d9e9893716d$var$AxiosError, $39018d9e9893716d$var$descriptors);
Object.defineProperty($39018d9e9893716d$var$prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
$39018d9e9893716d$var$AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create($39018d9e9893716d$var$prototype);
    (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    $39018d9e9893716d$var$AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
var $39018d9e9893716d$export$2e2bcd8739ae039 = $39018d9e9893716d$var$AxiosError;


// eslint-disable-next-line strict
var $d4a60d549108ae8b$export$2e2bcd8739ae039 = null;


/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ var $7aaf889172aa0226$export$a143d493d941bafc;
var $7aaf889172aa0226$export$e4cf37d7f6fb9e0a;
var $7aaf889172aa0226$export$f99ded8fe4b79145;
var $7aaf889172aa0226$export$599f31c3813fae4d;
"use strict";
var $023dfcfbcb75732a$export$a48f0734ac7c2329;
var $023dfcfbcb75732a$export$d622b2ad8d90c771;
var $023dfcfbcb75732a$export$6100ba28696e12de;
"use strict";
$023dfcfbcb75732a$export$a48f0734ac7c2329 = $023dfcfbcb75732a$var$byteLength;
$023dfcfbcb75732a$export$d622b2ad8d90c771 = $023dfcfbcb75732a$var$toByteArray;
$023dfcfbcb75732a$export$6100ba28696e12de = $023dfcfbcb75732a$var$fromByteArray;
var $023dfcfbcb75732a$var$lookup = [];
var $023dfcfbcb75732a$var$revLookup = [];
var $023dfcfbcb75732a$var$Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var $023dfcfbcb75732a$var$code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var $023dfcfbcb75732a$var$i = 0, $023dfcfbcb75732a$var$len = $023dfcfbcb75732a$var$code.length; $023dfcfbcb75732a$var$i < $023dfcfbcb75732a$var$len; ++$023dfcfbcb75732a$var$i){
    $023dfcfbcb75732a$var$lookup[$023dfcfbcb75732a$var$i] = $023dfcfbcb75732a$var$code[$023dfcfbcb75732a$var$i];
    $023dfcfbcb75732a$var$revLookup[$023dfcfbcb75732a$var$code.charCodeAt($023dfcfbcb75732a$var$i)] = $023dfcfbcb75732a$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$023dfcfbcb75732a$var$revLookup["-".charCodeAt(0)] = 62;
$023dfcfbcb75732a$var$revLookup["_".charCodeAt(0)] = 63;
function $023dfcfbcb75732a$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $023dfcfbcb75732a$var$byteLength(b64) {
    var lens = $023dfcfbcb75732a$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $023dfcfbcb75732a$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $023dfcfbcb75732a$var$toByteArray(b64) {
    var tmp;
    var lens = $023dfcfbcb75732a$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $023dfcfbcb75732a$var$Arr($023dfcfbcb75732a$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i)] << 18 | $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i)] << 2 | $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i)] << 10 | $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $023dfcfbcb75732a$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function $023dfcfbcb75732a$var$tripletToBase64(num) {
    return $023dfcfbcb75732a$var$lookup[num >> 18 & 0x3F] + $023dfcfbcb75732a$var$lookup[num >> 12 & 0x3F] + $023dfcfbcb75732a$var$lookup[num >> 6 & 0x3F] + $023dfcfbcb75732a$var$lookup[num & 0x3F];
}
function $023dfcfbcb75732a$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push($023dfcfbcb75732a$var$tripletToBase64(tmp));
    }
    return output.join("");
}
function $023dfcfbcb75732a$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($023dfcfbcb75732a$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($023dfcfbcb75732a$var$lookup[tmp >> 2] + $023dfcfbcb75732a$var$lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($023dfcfbcb75732a$var$lookup[tmp >> 10] + $023dfcfbcb75732a$var$lookup[tmp >> 4 & 0x3F] + $023dfcfbcb75732a$var$lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}


/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $b38ea80d59ab0cdb$export$aafa59e2e03f2942;
var $b38ea80d59ab0cdb$export$68d8715fc104d294;
$b38ea80d59ab0cdb$export$aafa59e2e03f2942 = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
$b38ea80d59ab0cdb$export$68d8715fc104d294 = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};


const $7aaf889172aa0226$var$customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
$7aaf889172aa0226$export$a143d493d941bafc = $7aaf889172aa0226$var$Buffer;
$7aaf889172aa0226$export$e4cf37d7f6fb9e0a = $7aaf889172aa0226$var$SlowBuffer;
$7aaf889172aa0226$export$f99ded8fe4b79145 = 50;
const $7aaf889172aa0226$var$K_MAX_LENGTH = 0x7fffffff;
$7aaf889172aa0226$export$599f31c3813fae4d = $7aaf889172aa0226$var$K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ $7aaf889172aa0226$var$Buffer.TYPED_ARRAY_SUPPORT = $7aaf889172aa0226$var$typedArraySupport();
if (!$7aaf889172aa0226$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function $7aaf889172aa0226$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty($7aaf889172aa0226$var$Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!$7aaf889172aa0226$var$Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty($7aaf889172aa0226$var$Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!$7aaf889172aa0226$var$Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function $7aaf889172aa0226$var$createBuffer(length) {
    if (length > $7aaf889172aa0226$var$K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $7aaf889172aa0226$var$Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function $7aaf889172aa0226$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return $7aaf889172aa0226$var$allocUnsafe(arg);
    }
    return $7aaf889172aa0226$var$from(arg, encodingOrOffset, length);
}
$7aaf889172aa0226$var$Buffer.poolSize = 8192 // not used by this implementation
;
function $7aaf889172aa0226$var$from(value, encodingOrOffset, length) {
    if (typeof value === "string") return $7aaf889172aa0226$var$fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return $7aaf889172aa0226$var$fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if ($7aaf889172aa0226$var$isInstance(value, ArrayBuffer) || value && $7aaf889172aa0226$var$isInstance(value.buffer, ArrayBuffer)) return $7aaf889172aa0226$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && ($7aaf889172aa0226$var$isInstance(value, SharedArrayBuffer) || value && $7aaf889172aa0226$var$isInstance(value.buffer, SharedArrayBuffer))) return $7aaf889172aa0226$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return $7aaf889172aa0226$var$Buffer.from(valueOf, encodingOrOffset, length);
    const b = $7aaf889172aa0226$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return $7aaf889172aa0226$var$Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ $7aaf889172aa0226$var$Buffer.from = function(value, encodingOrOffset, length) {
    return $7aaf889172aa0226$var$from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf($7aaf889172aa0226$var$Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf($7aaf889172aa0226$var$Buffer, Uint8Array);
function $7aaf889172aa0226$var$assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function $7aaf889172aa0226$var$alloc(size, fill, encoding) {
    $7aaf889172aa0226$var$assertSize(size);
    if (size <= 0) return $7aaf889172aa0226$var$createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? $7aaf889172aa0226$var$createBuffer(size).fill(fill, encoding) : $7aaf889172aa0226$var$createBuffer(size).fill(fill);
    return $7aaf889172aa0226$var$createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ $7aaf889172aa0226$var$Buffer.alloc = function(size, fill, encoding) {
    return $7aaf889172aa0226$var$alloc(size, fill, encoding);
};
function $7aaf889172aa0226$var$allocUnsafe(size) {
    $7aaf889172aa0226$var$assertSize(size);
    return $7aaf889172aa0226$var$createBuffer(size < 0 ? 0 : $7aaf889172aa0226$var$checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ $7aaf889172aa0226$var$Buffer.allocUnsafe = function(size) {
    return $7aaf889172aa0226$var$allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ $7aaf889172aa0226$var$Buffer.allocUnsafeSlow = function(size) {
    return $7aaf889172aa0226$var$allocUnsafe(size);
};
function $7aaf889172aa0226$var$fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!$7aaf889172aa0226$var$Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = $7aaf889172aa0226$var$byteLength(string, encoding) | 0;
    let buf = $7aaf889172aa0226$var$createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function $7aaf889172aa0226$var$fromArrayLike(array) {
    const length = array.length < 0 ? 0 : $7aaf889172aa0226$var$checked(array.length) | 0;
    const buf = $7aaf889172aa0226$var$createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function $7aaf889172aa0226$var$fromArrayView(arrayView) {
    if ($7aaf889172aa0226$var$isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return $7aaf889172aa0226$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $7aaf889172aa0226$var$fromArrayLike(arrayView);
}
function $7aaf889172aa0226$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $7aaf889172aa0226$var$Buffer.prototype);
    return buf;
}
function $7aaf889172aa0226$var$fromObject(obj) {
    if ($7aaf889172aa0226$var$Buffer.isBuffer(obj)) {
        const len = $7aaf889172aa0226$var$checked(obj.length) | 0;
        const buf = $7aaf889172aa0226$var$createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || $7aaf889172aa0226$var$numberIsNaN(obj.length)) return $7aaf889172aa0226$var$createBuffer(0);
        return $7aaf889172aa0226$var$fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return $7aaf889172aa0226$var$fromArrayLike(obj.data);
}
function $7aaf889172aa0226$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $7aaf889172aa0226$var$K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $7aaf889172aa0226$var$K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function $7aaf889172aa0226$var$SlowBuffer(length) {
    if (+length != length) length = 0;
    return $7aaf889172aa0226$var$Buffer.alloc(+length);
}
$7aaf889172aa0226$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $7aaf889172aa0226$var$Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
$7aaf889172aa0226$var$Buffer.compare = function compare(a, b) {
    if ($7aaf889172aa0226$var$isInstance(a, Uint8Array)) a = $7aaf889172aa0226$var$Buffer.from(a, a.offset, a.byteLength);
    if ($7aaf889172aa0226$var$isInstance(b, Uint8Array)) b = $7aaf889172aa0226$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$7aaf889172aa0226$var$Buffer.isBuffer(a) || !$7aaf889172aa0226$var$Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
$7aaf889172aa0226$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
$7aaf889172aa0226$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return $7aaf889172aa0226$var$Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = $7aaf889172aa0226$var$Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if ($7aaf889172aa0226$var$isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!$7aaf889172aa0226$var$Buffer.isBuffer(buf)) buf = $7aaf889172aa0226$var$Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!$7aaf889172aa0226$var$Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function $7aaf889172aa0226$var$byteLength(string, encoding) {
    if ($7aaf889172aa0226$var$Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || $7aaf889172aa0226$var$isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return $7aaf889172aa0226$var$utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return $7aaf889172aa0226$var$base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : $7aaf889172aa0226$var$utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
$7aaf889172aa0226$var$Buffer.byteLength = $7aaf889172aa0226$var$byteLength;
function $7aaf889172aa0226$var$slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return $7aaf889172aa0226$var$hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return $7aaf889172aa0226$var$utf8Slice(this, start, end);
        case "ascii":
            return $7aaf889172aa0226$var$asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return $7aaf889172aa0226$var$latin1Slice(this, start, end);
        case "base64":
            return $7aaf889172aa0226$var$base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return $7aaf889172aa0226$var$utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
$7aaf889172aa0226$var$Buffer.prototype._isBuffer = true;
function $7aaf889172aa0226$var$swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
$7aaf889172aa0226$var$Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)$7aaf889172aa0226$var$swap(this, i, i + 1);
    return this;
};
$7aaf889172aa0226$var$Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        $7aaf889172aa0226$var$swap(this, i, i + 3);
        $7aaf889172aa0226$var$swap(this, i + 1, i + 2);
    }
    return this;
};
$7aaf889172aa0226$var$Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        $7aaf889172aa0226$var$swap(this, i, i + 7);
        $7aaf889172aa0226$var$swap(this, i + 1, i + 6);
        $7aaf889172aa0226$var$swap(this, i + 2, i + 5);
        $7aaf889172aa0226$var$swap(this, i + 3, i + 4);
    }
    return this;
};
$7aaf889172aa0226$var$Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return $7aaf889172aa0226$var$utf8Slice(this, 0, length);
    return $7aaf889172aa0226$var$slowToString.apply(this, arguments);
};
$7aaf889172aa0226$var$Buffer.prototype.toLocaleString = $7aaf889172aa0226$var$Buffer.prototype.toString;
$7aaf889172aa0226$var$Buffer.prototype.equals = function equals(b) {
    if (!$7aaf889172aa0226$var$Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return $7aaf889172aa0226$var$Buffer.compare(this, b) === 0;
};
$7aaf889172aa0226$var$Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = $7aaf889172aa0226$export$f99ded8fe4b79145;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if ($7aaf889172aa0226$var$customInspectSymbol) $7aaf889172aa0226$var$Buffer.prototype[$7aaf889172aa0226$var$customInspectSymbol] = $7aaf889172aa0226$var$Buffer.prototype.inspect;
$7aaf889172aa0226$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($7aaf889172aa0226$var$isInstance(target, Uint8Array)) target = $7aaf889172aa0226$var$Buffer.from(target, target.offset, target.byteLength);
    if (!$7aaf889172aa0226$var$Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function $7aaf889172aa0226$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if ($7aaf889172aa0226$var$numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = $7aaf889172aa0226$var$Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($7aaf889172aa0226$var$Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return $7aaf889172aa0226$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return $7aaf889172aa0226$var$arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function $7aaf889172aa0226$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
$7aaf889172aa0226$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
$7aaf889172aa0226$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $7aaf889172aa0226$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
$7aaf889172aa0226$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $7aaf889172aa0226$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function $7aaf889172aa0226$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if ($7aaf889172aa0226$var$numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function $7aaf889172aa0226$var$utf8Write(buf, string, offset, length) {
    return $7aaf889172aa0226$var$blitBuffer($7aaf889172aa0226$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function $7aaf889172aa0226$var$asciiWrite(buf, string, offset, length) {
    return $7aaf889172aa0226$var$blitBuffer($7aaf889172aa0226$var$asciiToBytes(string), buf, offset, length);
}
function $7aaf889172aa0226$var$base64Write(buf, string, offset, length) {
    return $7aaf889172aa0226$var$blitBuffer($7aaf889172aa0226$var$base64ToBytes(string), buf, offset, length);
}
function $7aaf889172aa0226$var$ucs2Write(buf, string, offset, length) {
    return $7aaf889172aa0226$var$blitBuffer($7aaf889172aa0226$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
$7aaf889172aa0226$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return $7aaf889172aa0226$var$hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return $7aaf889172aa0226$var$utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return $7aaf889172aa0226$var$asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return $7aaf889172aa0226$var$base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return $7aaf889172aa0226$var$ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
$7aaf889172aa0226$var$Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function $7aaf889172aa0226$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return $023dfcfbcb75732a$export$6100ba28696e12de(buf);
    else return $023dfcfbcb75732a$export$6100ba28696e12de(buf.slice(start, end));
}
function $7aaf889172aa0226$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return $7aaf889172aa0226$var$decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const $7aaf889172aa0226$var$MAX_ARGUMENTS_LENGTH = 0x1000;
function $7aaf889172aa0226$var$decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= $7aaf889172aa0226$var$MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += $7aaf889172aa0226$var$MAX_ARGUMENTS_LENGTH));
    return res;
}
function $7aaf889172aa0226$var$asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function $7aaf889172aa0226$var$latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function $7aaf889172aa0226$var$hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += $7aaf889172aa0226$var$hexSliceLookupTable[buf[i]];
    return out;
}
function $7aaf889172aa0226$var$utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
$7aaf889172aa0226$var$Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $7aaf889172aa0226$var$Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function $7aaf889172aa0226$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
$7aaf889172aa0226$var$Buffer.prototype.readUintLE = $7aaf889172aa0226$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
$7aaf889172aa0226$var$Buffer.prototype.readUintBE = $7aaf889172aa0226$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
$7aaf889172aa0226$var$Buffer.prototype.readUint8 = $7aaf889172aa0226$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 1, this.length);
    return this[offset];
};
$7aaf889172aa0226$var$Buffer.prototype.readUint16LE = $7aaf889172aa0226$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
$7aaf889172aa0226$var$Buffer.prototype.readUint16BE = $7aaf889172aa0226$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
$7aaf889172aa0226$var$Buffer.prototype.readUint32LE = $7aaf889172aa0226$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
$7aaf889172aa0226$var$Buffer.prototype.readUint32BE = $7aaf889172aa0226$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
$7aaf889172aa0226$var$Buffer.prototype.readBigUInt64LE = $7aaf889172aa0226$var$defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    $7aaf889172aa0226$var$validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $7aaf889172aa0226$var$boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
$7aaf889172aa0226$var$Buffer.prototype.readBigUInt64BE = $7aaf889172aa0226$var$defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    $7aaf889172aa0226$var$validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $7aaf889172aa0226$var$boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
$7aaf889172aa0226$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$7aaf889172aa0226$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$7aaf889172aa0226$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
$7aaf889172aa0226$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$7aaf889172aa0226$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$7aaf889172aa0226$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
$7aaf889172aa0226$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
$7aaf889172aa0226$var$Buffer.prototype.readBigInt64LE = $7aaf889172aa0226$var$defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    $7aaf889172aa0226$var$validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $7aaf889172aa0226$var$boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
$7aaf889172aa0226$var$Buffer.prototype.readBigInt64BE = $7aaf889172aa0226$var$defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    $7aaf889172aa0226$var$validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $7aaf889172aa0226$var$boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
$7aaf889172aa0226$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 4, this.length);
    return $b38ea80d59ab0cdb$export$aafa59e2e03f2942(this, offset, true, 23, 4);
};
$7aaf889172aa0226$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 4, this.length);
    return $b38ea80d59ab0cdb$export$aafa59e2e03f2942(this, offset, false, 23, 4);
};
$7aaf889172aa0226$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 8, this.length);
    return $b38ea80d59ab0cdb$export$aafa59e2e03f2942(this, offset, true, 52, 8);
};
$7aaf889172aa0226$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkOffset(offset, 8, this.length);
    return $b38ea80d59ab0cdb$export$aafa59e2e03f2942(this, offset, false, 52, 8);
};
function $7aaf889172aa0226$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$7aaf889172aa0226$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
$7aaf889172aa0226$var$Buffer.prototype.writeUintLE = $7aaf889172aa0226$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $7aaf889172aa0226$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$7aaf889172aa0226$var$Buffer.prototype.writeUintBE = $7aaf889172aa0226$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $7aaf889172aa0226$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$7aaf889172aa0226$var$Buffer.prototype.writeUint8 = $7aaf889172aa0226$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
$7aaf889172aa0226$var$Buffer.prototype.writeUint16LE = $7aaf889172aa0226$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$7aaf889172aa0226$var$Buffer.prototype.writeUint16BE = $7aaf889172aa0226$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$7aaf889172aa0226$var$Buffer.prototype.writeUint32LE = $7aaf889172aa0226$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
$7aaf889172aa0226$var$Buffer.prototype.writeUint32BE = $7aaf889172aa0226$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function $7aaf889172aa0226$var$wrtBigUInt64LE(buf, value, offset, min, max) {
    $7aaf889172aa0226$var$checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function $7aaf889172aa0226$var$wrtBigUInt64BE(buf, value, offset, min, max) {
    $7aaf889172aa0226$var$checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
$7aaf889172aa0226$var$Buffer.prototype.writeBigUInt64LE = $7aaf889172aa0226$var$defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return $7aaf889172aa0226$var$wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
$7aaf889172aa0226$var$Buffer.prototype.writeBigUInt64BE = $7aaf889172aa0226$var$defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return $7aaf889172aa0226$var$wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
$7aaf889172aa0226$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        $7aaf889172aa0226$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$7aaf889172aa0226$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        $7aaf889172aa0226$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$7aaf889172aa0226$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
$7aaf889172aa0226$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$7aaf889172aa0226$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$7aaf889172aa0226$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
$7aaf889172aa0226$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
$7aaf889172aa0226$var$Buffer.prototype.writeBigInt64LE = $7aaf889172aa0226$var$defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return $7aaf889172aa0226$var$wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
$7aaf889172aa0226$var$Buffer.prototype.writeBigInt64BE = $7aaf889172aa0226$var$defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return $7aaf889172aa0226$var$wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function $7aaf889172aa0226$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function $7aaf889172aa0226$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    $b38ea80d59ab0cdb$export$68d8715fc104d294(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
$7aaf889172aa0226$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $7aaf889172aa0226$var$writeFloat(this, value, offset, true, noAssert);
};
$7aaf889172aa0226$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $7aaf889172aa0226$var$writeFloat(this, value, offset, false, noAssert);
};
function $7aaf889172aa0226$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $7aaf889172aa0226$var$checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    $b38ea80d59ab0cdb$export$68d8715fc104d294(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
$7aaf889172aa0226$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $7aaf889172aa0226$var$writeDouble(this, value, offset, true, noAssert);
};
$7aaf889172aa0226$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $7aaf889172aa0226$var$writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
$7aaf889172aa0226$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$7aaf889172aa0226$var$Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
$7aaf889172aa0226$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !$7aaf889172aa0226$var$Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = $7aaf889172aa0226$var$Buffer.isBuffer(val) ? val : $7aaf889172aa0226$var$Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const $7aaf889172aa0226$var$errors = {};
function $7aaf889172aa0226$var$E(sym, getMessage, Base) {
    $7aaf889172aa0226$var$errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
$7aaf889172aa0226$var$E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
$7aaf889172aa0226$var$E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
$7aaf889172aa0226$var$E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = $7aaf889172aa0226$var$addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = $7aaf889172aa0226$var$addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function $7aaf889172aa0226$var$addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function $7aaf889172aa0226$var$checkBounds(buf, offset, byteLength) {
    $7aaf889172aa0226$var$validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) $7aaf889172aa0226$var$boundsError(offset, buf.length - (byteLength + 1));
}
function $7aaf889172aa0226$var$checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new $7aaf889172aa0226$var$errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    $7aaf889172aa0226$var$checkBounds(buf, offset, byteLength);
}
function $7aaf889172aa0226$var$validateNumber(value, name) {
    if (typeof value !== "number") throw new $7aaf889172aa0226$var$errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function $7aaf889172aa0226$var$boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        $7aaf889172aa0226$var$validateNumber(value, type);
        throw new $7aaf889172aa0226$var$errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new $7aaf889172aa0226$var$errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new $7aaf889172aa0226$var$errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const $7aaf889172aa0226$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function $7aaf889172aa0226$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($7aaf889172aa0226$var$INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function $7aaf889172aa0226$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function $7aaf889172aa0226$var$asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function $7aaf889172aa0226$var$utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function $7aaf889172aa0226$var$base64ToBytes(str) {
    return $023dfcfbcb75732a$export$d622b2ad8d90c771($7aaf889172aa0226$var$base64clean(str));
}
function $7aaf889172aa0226$var$blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function $7aaf889172aa0226$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function $7aaf889172aa0226$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const $7aaf889172aa0226$var$hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function $7aaf889172aa0226$var$defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? $7aaf889172aa0226$var$BufferBigIntNotDefined : fn;
}
function $7aaf889172aa0226$var$BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}


var $df9a38a07be5d4e8$require$Buffer = $7aaf889172aa0226$export$a143d493d941bafc;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function $df9a38a07be5d4e8$var$isVisitable(thing) {
    return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isPlainObject(thing) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function $df9a38a07be5d4e8$var$removeBrackets(key) {
    return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function $df9a38a07be5d4e8$var$renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = $df9a38a07be5d4e8$var$removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function $df9a38a07be5d4e8$var$isFlatArray(arr) {
    return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(arr) && !arr.some($df9a38a07be5d4e8$var$isVisitable);
}
const $df9a38a07be5d4e8$var$predicates = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toFlatObject((0, $6c358707ac100c0e$export$2e2bcd8739ae039), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function $df9a38a07be5d4e8$var$toFormData(obj, formData, options) {
    if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, $d4a60d549108ae8b$export$2e2bcd8739ae039) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isSpecCompliantForm(formData);
    if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isDate(value)) return value.toISOString();
        if (!useBlob && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isBlob(value)) throw new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("Blob is not supported. Use a Buffer instead.");
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArrayBuffer(value) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : $df9a38a07be5d4e8$require$Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(value) && $df9a38a07be5d4e8$var$isFlatArray(value) || ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFileList(value) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).endsWith(key, "[]")) && (arr = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = $df9a38a07be5d4e8$var$removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? $df9a38a07be5d4e8$var$renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if ($df9a38a07be5d4e8$var$isVisitable(value)) return true;
        formData.append($df9a38a07be5d4e8$var$renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign($df9a38a07be5d4e8$var$predicates, {
        defaultVisitor: defaultVisitor,
        convertValue: convertValue,
        isVisitable: $df9a38a07be5d4e8$var$isVisitable
    });
    function build(value, path) {
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(value, function each(el, key) {
            const result = !((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(el) || el === null) && visitor.call(formData, el, (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
var $df9a38a07be5d4e8$export$2e2bcd8739ae039 = $df9a38a07be5d4e8$var$toFormData;


"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function $cfa3e15841aae5b8$var$encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function $cfa3e15841aae5b8$var$AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, $df9a38a07be5d4e8$export$2e2bcd8739ae039)(params, this, options);
}
const $cfa3e15841aae5b8$var$prototype = $cfa3e15841aae5b8$var$AxiosURLSearchParams.prototype;
$cfa3e15841aae5b8$var$prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
$cfa3e15841aae5b8$var$prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, $cfa3e15841aae5b8$var$encode);
    } : $cfa3e15841aae5b8$var$encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
var $cfa3e15841aae5b8$export$2e2bcd8739ae039 = $cfa3e15841aae5b8$var$AxiosURLSearchParams;


"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function $1ee14c8c458684a0$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $1ee14c8c458684a0$export$2e2bcd8739ae039(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || $1ee14c8c458684a0$var$encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isURLSearchParams(params) ? params.toString() : new (0, $cfa3e15841aae5b8$export$2e2bcd8739ae039)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}



"use strict";
class $e0cc20f5b823c3f0$var$InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
var $e0cc20f5b823c3f0$export$2e2bcd8739ae039 = $e0cc20f5b823c3f0$var$InterceptorManager;





"use strict";
var $ecf06bfe9ff67c7f$export$2e2bcd8739ae039 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};






"use strict";
var $21f94769e18c573b$export$2e2bcd8739ae039 = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, $cfa3e15841aae5b8$export$2e2bcd8739ae039);


"use strict";
var $9fd86673bdb5ec06$export$2e2bcd8739ae039 = typeof FormData !== "undefined" ? FormData : null;


"use strict";
var $d2c096e20c6ee8a6$export$2e2bcd8739ae039 = typeof Blob !== "undefined" ? Blob : null;


/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const $9a3320105857c8bd$var$isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const $9a3320105857c8bd$var$isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var $9a3320105857c8bd$export$2e2bcd8739ae039 = {
    isBrowser: true,
    classes: {
        URLSearchParams: $21f94769e18c573b$export$2e2bcd8739ae039,
        FormData: $9fd86673bdb5ec06$export$2e2bcd8739ae039,
        Blob: $d2c096e20c6ee8a6$export$2e2bcd8739ae039
    },
    isStandardBrowserEnv: $9a3320105857c8bd$var$isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv: $9a3320105857c8bd$var$isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};


"use strict";
function $afd3cc622a70c947$export$2e2bcd8739ae039(data, options) {
    return (0, $df9a38a07be5d4e8$export$2e2bcd8739ae039)(data, new (0, $9a3320105857c8bd$export$2e2bcd8739ae039).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, $9a3320105857c8bd$export$2e2bcd8739ae039).isNode && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}




"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function $85cee280f0a85293$var$parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function $85cee280f0a85293$var$arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function $85cee280f0a85293$var$formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(target[name])) target[name] = $85cee280f0a85293$var$arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFormData(formData) && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFunction(formData.entries)) {
        const obj = {};
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEachEntry(formData, (name, value)=>{
            buildPath($85cee280f0a85293$var$parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
var $85cee280f0a85293$export$2e2bcd8739ae039 = $85cee280f0a85293$var$formDataToJSON;


"use strict";
const $b4d55bc52e11a350$var$DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function $b4d55bc52e11a350$var$stringifySafely(rawValue, parser, encoder) {
    if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const $b4d55bc52e11a350$var$defaults = {
    transitional: (0, $ecf06bfe9ff67c7f$export$2e2bcd8739ae039),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isObject(data);
            if (isObjectPayload && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, $85cee280f0a85293$export$2e2bcd8739ae039)(data)) : data;
            }
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArrayBuffer(data) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isBuffer(data) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isStream(data) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFile(data) || (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isBlob(data)) return data;
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArrayBufferView(data)) return data.buffer;
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, $afd3cc622a70c947$export$2e2bcd8739ae039)(data, this.formSerializer).toString();
                if ((isFileList = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, $df9a38a07be5d4e8$export$2e2bcd8739ae039)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return $b4d55bc52e11a350$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || $b4d55bc52e11a350$var$defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, $39018d9e9893716d$export$2e2bcd8739ae039).from(e, (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, $9a3320105857c8bd$export$2e2bcd8739ae039).classes.FormData,
        Blob: (0, $9a3320105857c8bd$export$2e2bcd8739ae039).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    $b4d55bc52e11a350$var$defaults.headers[method] = {};
});
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    $b4d55bc52e11a350$var$defaults.headers[method] = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).merge($b4d55bc52e11a350$var$DEFAULT_CONTENT_TYPE);
});
var $b4d55bc52e11a350$export$2e2bcd8739ae039 = $b4d55bc52e11a350$var$defaults;




"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const $84b34a0b5539e40b$var$ignoreDuplicateOf = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ $84b34a0b5539e40b$export$2e2bcd8739ae039 = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && $84b34a0b5539e40b$var$ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};


"use strict";
const $6c55e0db0b3245e3$var$$internals = Symbol("internals");
function $6c55e0db0b3245e3$var$normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function $6c55e0db0b3245e3$var$normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(value) ? value.map($6c55e0db0b3245e3$var$normalizeValue) : String(value);
}
function $6c55e0db0b3245e3$var$parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const $6c55e0db0b3245e3$var$isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function $6c55e0db0b3245e3$var$matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(value)) return;
    if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isRegExp(filter)) return filter.test(value);
}
function $6c55e0db0b3245e3$var$formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function $6c55e0db0b3245e3$var$buildAccessors(obj, header) {
    const accessorName = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class $6c55e0db0b3245e3$var$AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = $6c55e0db0b3245e3$var$normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = $6c55e0db0b3245e3$var$normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(header) && (header = header.trim()) && !$6c55e0db0b3245e3$var$isValidHeaderName(header)) setHeaders((0, $84b34a0b5539e40b$export$2e2bcd8739ae039)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = $6c55e0db0b3245e3$var$normalizeHeader(header);
        if (header) {
            const key = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return $6c55e0db0b3245e3$var$parseTokens(value);
                if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFunction(parser)) return parser.call(this, value, key);
                if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = $6c55e0db0b3245e3$var$normalizeHeader(header);
        if (header) {
            const key = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || $6c55e0db0b3245e3$var$matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = $6c55e0db0b3245e3$var$normalizeHeader(_header);
            if (_header) {
                const key = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).findKey(self, _header);
                if (key && (!matcher || $6c55e0db0b3245e3$var$matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || $6c55e0db0b3245e3$var$matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            const key = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).findKey(headers, header);
            if (key) {
                self[key] = $6c55e0db0b3245e3$var$normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? $6c55e0db0b3245e3$var$formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = $6c55e0db0b3245e3$var$normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$6c55e0db0b3245e3$var$$internals] = this[$6c55e0db0b3245e3$var$$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = $6c55e0db0b3245e3$var$normalizeHeader(_header);
            if (!accessors[lHeader]) {
                $6c55e0db0b3245e3$var$buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
$6c55e0db0b3245e3$var$AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).freezeMethods($6c55e0db0b3245e3$var$AxiosHeaders.prototype);
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).freezeMethods($6c55e0db0b3245e3$var$AxiosHeaders);
var $6c55e0db0b3245e3$export$2e2bcd8739ae039 = $6c55e0db0b3245e3$var$AxiosHeaders;


"use strict";
function $7343c2f4b703b2ba$export$2e2bcd8739ae039(fns, response) {
    const config = this || (0, $b4d55bc52e11a350$export$2e2bcd8739ae039);
    const context = response || config;
    const headers = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).from(context.headers);
    let data = context.data;
    (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}


"use strict";
function $e63b86be51b94285$export$2e2bcd8739ae039(value) {
    return !!(value && value.__CANCEL__);
}





"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function $43dc33230b98b12a$var$CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, $39018d9e9893716d$export$2e2bcd8739ae039).call(this, message == null ? "canceled" : message, (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).inherits($43dc33230b98b12a$var$CanceledError, (0, $39018d9e9893716d$export$2e2bcd8739ae039), {
    __CANCEL__: true
});
var $43dc33230b98b12a$export$2e2bcd8739ae039 = $43dc33230b98b12a$var$CanceledError;







"use strict";
function $25fae190cd2ded42$export$2e2bcd8739ae039(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("Request failed with status code " + response.status, [
        (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_REQUEST,
        (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}




"use strict";
var $86c078ac0564e94e$export$2e2bcd8739ae039 = (0, $9a3320105857c8bd$export$2e2bcd8739ae039).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(path)) cookie.push("path=" + path);
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();



"use strict";
function $03766157726c79e4$export$2e2bcd8739ae039(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


"use strict";
function $040e916410a945da$export$2e2bcd8739ae039(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}


"use strict";
function $21e9db8e91102907$export$2e2bcd8739ae039(baseURL, requestedURL) {
    if (baseURL && !(0, $03766157726c79e4$export$2e2bcd8739ae039)(requestedURL)) return (0, $040e916410a945da$export$2e2bcd8739ae039)(baseURL, requestedURL);
    return requestedURL;
}




"use strict";
var $62702a31e29ab496$export$2e2bcd8739ae039 = (0, $9a3320105857c8bd$export$2e2bcd8739ae039).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();





"use strict";
function $db68a9ee7f5708f2$export$2e2bcd8739ae039(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}




"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function $4586f5ceb7de10e0$var$speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
var $4586f5ceb7de10e0$export$2e2bcd8739ae039 = $4586f5ceb7de10e0$var$speedometer;


"use strict";
function $75deb55110043b1d$var$progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, $4586f5ceb7de10e0$export$2e2bcd8739ae039)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded: loaded,
            total: total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const $75deb55110043b1d$var$isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var $75deb55110043b1d$export$2e2bcd8739ae039 = $75deb55110043b1d$var$isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFormData(requestData)) {
            if ((0, $9a3320105857c8bd$export$2e2bcd8739ae039).isStandardBrowserEnv || (0, $9a3320105857c8bd$export$2e2bcd8739ae039).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, $21e9db8e91102907$export$2e2bcd8739ae039)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, $1ee14c8c458684a0$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            (0, $25fae190cd2ded42$export$2e2bcd8739ae039)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("Request aborted", (0, $39018d9e9893716d$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("Network Error", (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, $ecf06bfe9ff67c7f$export$2e2bcd8739ae039);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, $39018d9e9893716d$export$2e2bcd8739ae039)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, $39018d9e9893716d$export$2e2bcd8739ae039).ETIMEDOUT : (0, $39018d9e9893716d$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, $9a3320105857c8bd$export$2e2bcd8739ae039).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, $62702a31e29ab496$export$2e2bcd8739ae039)(fullPath)) && config.xsrfCookieName && (0, $86c078ac0564e94e$export$2e2bcd8739ae039).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", $75deb55110043b1d$var$progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", $75deb55110043b1d$var$progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, $43dc33230b98b12a$export$2e2bcd8739ae039)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, $db68a9ee7f5708f2$export$2e2bcd8739ae039)(fullPath);
        if (protocol && (0, $9a3320105857c8bd$export$2e2bcd8739ae039).protocols.indexOf(protocol) === -1) {
            reject(new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("Unsupported protocol " + protocol + ":", (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};



const $70f1d4bc773f007e$var$knownAdapters = {
    http: (0, $d4a60d549108ae8b$export$2e2bcd8739ae039),
    xhr: (0, $75deb55110043b1d$export$2e2bcd8739ae039)
};
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach($70f1d4bc773f007e$var$knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value: value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value: value
        });
    }
});
var $70f1d4bc773f007e$export$2e2bcd8739ae039 = {
    getAdapter: (adapters)=>{
        adapters = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length: length } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isString(nameOrAdapter) ? $70f1d4bc773f007e$var$knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, $39018d9e9893716d$export$2e2bcd8739ae039)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, $6c358707ac100c0e$export$2e2bcd8739ae039).hasOwnProp($70f1d4bc773f007e$var$knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: $70f1d4bc773f007e$var$knownAdapters
};


"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function $73212b91920630b3$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, $43dc33230b98b12a$export$2e2bcd8739ae039)(null, config);
}
function $73212b91920630b3$export$2e2bcd8739ae039(config) {
    $73212b91920630b3$var$throwIfCancellationRequested(config);
    config.headers = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).from(config.headers);
    // Transform request data
    config.data = (0, $7343c2f4b703b2ba$export$2e2bcd8739ae039).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, $70f1d4bc773f007e$export$2e2bcd8739ae039).getAdapter(config.adapter || (0, $b4d55bc52e11a350$export$2e2bcd8739ae039).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        $73212b91920630b3$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, $7343c2f4b703b2ba$export$2e2bcd8739ae039).call(config, config.transformResponse, response);
        response.headers = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, $e63b86be51b94285$export$2e2bcd8739ae039)(reason)) {
            $73212b91920630b3$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, $7343c2f4b703b2ba$export$2e2bcd8739ae039).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}




"use strict";
const $018b5e1fb5ffc975$var$headersToObject = (thing)=>thing instanceof (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039) ? thing.toJSON() : thing;
function $018b5e1fb5ffc975$export$2e2bcd8739ae039(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isPlainObject(target) && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).merge.call({
            caseless: caseless
        }, target, source);
        else if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).merge({}, source);
        else if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties($018b5e1fb5ffc975$var$headersToObject(a), $018b5e1fb5ffc975$var$headersToObject(b), true)
    };
    (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}



const $ea551752e35e8692$export$a4ad2735b021c132 = "1.4.0";



"use strict";
const $06d775c5bf264279$var$validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    $06d775c5bf264279$var$validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const $06d775c5bf264279$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ $06d775c5bf264279$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, $ea551752e35e8692$export$a4ad2735b021c132) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, $39018d9e9893716d$export$2e2bcd8739ae039)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_DEPRECATED);
        if (version && !$06d775c5bf264279$var$deprecatedWarnings[opt]) {
            $06d775c5bf264279$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function $06d775c5bf264279$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("options must be an object", (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("option " + opt + " must be " + result, (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, $39018d9e9893716d$export$2e2bcd8739ae039)("Unknown option " + opt, (0, $39018d9e9893716d$export$2e2bcd8739ae039).ERR_BAD_OPTION);
    }
}
var $06d775c5bf264279$export$2e2bcd8739ae039 = {
    assertOptions: $06d775c5bf264279$var$assertOptions,
    validators: $06d775c5bf264279$var$validators
};



"use strict";
const $65f086b5f8306d11$var$validators = (0, $06d775c5bf264279$export$2e2bcd8739ae039).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class $65f086b5f8306d11$var$Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, $e0cc20f5b823c3f0$export$2e2bcd8739ae039)(),
            response: new (0, $e0cc20f5b823c3f0$export$2e2bcd8739ae039)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, $018b5e1fb5ffc975$export$2e2bcd8739ae039)(this.defaults, config);
        const { transitional: transitional, paramsSerializer: paramsSerializer, headers: headers } = config;
        if (transitional !== undefined) (0, $06d775c5bf264279$export$2e2bcd8739ae039).assertOptions(transitional, {
            silentJSONParsing: $65f086b5f8306d11$var$validators.transitional($65f086b5f8306d11$var$validators.boolean),
            forcedJSONParsing: $65f086b5f8306d11$var$validators.transitional($65f086b5f8306d11$var$validators.boolean),
            clarifyTimeoutError: $65f086b5f8306d11$var$validators.transitional($65f086b5f8306d11$var$validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, $06d775c5bf264279$export$2e2bcd8739ae039).assertOptions(paramsSerializer, {
                encode: $65f086b5f8306d11$var$validators.function,
                serialize: $65f086b5f8306d11$var$validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).merge(headers.common, headers[config.method]);
        contextHeaders && (0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, $73212b91920630b3$export$2e2bcd8739ae039).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, $73212b91920630b3$export$2e2bcd8739ae039).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, $018b5e1fb5ffc975$export$2e2bcd8739ae039)(this.defaults, config);
        const fullPath = (0, $21e9db8e91102907$export$2e2bcd8739ae039)(config.baseURL, config.url);
        return (0, $1ee14c8c458684a0$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $65f086b5f8306d11$var$Axios.prototype[method] = function(url, config) {
        return this.request((0, $018b5e1fb5ffc975$export$2e2bcd8739ae039)(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
(0, $6c358707ac100c0e$export$2e2bcd8739ae039).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, $018b5e1fb5ffc975$export$2e2bcd8739ae039)(config || {}, {
                method: method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $65f086b5f8306d11$var$Axios.prototype[method] = generateHTTPMethod();
    $65f086b5f8306d11$var$Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var $65f086b5f8306d11$export$2e2bcd8739ae039 = $65f086b5f8306d11$var$Axios;







"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class $8a96f4dfaaed1253$var$CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, $43dc33230b98b12a$export$2e2bcd8739ae039)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new $8a96f4dfaaed1253$var$CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token: token,
            cancel: cancel
        };
    }
}
var $8a96f4dfaaed1253$export$2e2bcd8739ae039 = $8a96f4dfaaed1253$var$CancelToken;






"use strict";
function $6252a06555621505$export$2e2bcd8739ae039(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}



"use strict";
function $8354989b4dcd6e4e$export$2e2bcd8739ae039(payload) {
    return (0, $6c358707ac100c0e$export$2e2bcd8739ae039).isObject(payload) && payload.isAxiosError === true;
}



const $a0cb09b1f0f101bc$var$HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries($a0cb09b1f0f101bc$var$HttpStatusCode).forEach(([key, value])=>{
    $a0cb09b1f0f101bc$var$HttpStatusCode[value] = key;
});
var $a0cb09b1f0f101bc$export$2e2bcd8739ae039 = $a0cb09b1f0f101bc$var$HttpStatusCode;


"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function $18783bca1921ec86$var$createInstance(defaultConfig) {
    const context = new (0, $65f086b5f8306d11$export$2e2bcd8739ae039)(defaultConfig);
    const instance = (0, $9793d8a71e8d5ff2$export$2e2bcd8739ae039)((0, $65f086b5f8306d11$export$2e2bcd8739ae039).prototype.request, context);
    // Copy axios.prototype to instance
    (0, $6c358707ac100c0e$export$2e2bcd8739ae039).extend(instance, (0, $65f086b5f8306d11$export$2e2bcd8739ae039).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, $6c358707ac100c0e$export$2e2bcd8739ae039).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $18783bca1921ec86$var$createInstance((0, $018b5e1fb5ffc975$export$2e2bcd8739ae039)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const $18783bca1921ec86$var$axios = $18783bca1921ec86$var$createInstance((0, $b4d55bc52e11a350$export$2e2bcd8739ae039));
// Expose Axios class to allow class inheritance
$18783bca1921ec86$var$axios.Axios = (0, $65f086b5f8306d11$export$2e2bcd8739ae039);
// Expose Cancel & CancelToken
$18783bca1921ec86$var$axios.CanceledError = (0, $43dc33230b98b12a$export$2e2bcd8739ae039);
$18783bca1921ec86$var$axios.CancelToken = (0, $8a96f4dfaaed1253$export$2e2bcd8739ae039);
$18783bca1921ec86$var$axios.isCancel = (0, $e63b86be51b94285$export$2e2bcd8739ae039);
$18783bca1921ec86$var$axios.VERSION = (0, $ea551752e35e8692$export$a4ad2735b021c132);
$18783bca1921ec86$var$axios.toFormData = (0, $df9a38a07be5d4e8$export$2e2bcd8739ae039);
// Expose AxiosError class
$18783bca1921ec86$var$axios.AxiosError = (0, $39018d9e9893716d$export$2e2bcd8739ae039);
// alias for CanceledError for backward compatibility
$18783bca1921ec86$var$axios.Cancel = $18783bca1921ec86$var$axios.CanceledError;
// Expose all/spread
$18783bca1921ec86$var$axios.all = function all(promises) {
    return Promise.all(promises);
};
$18783bca1921ec86$var$axios.spread = (0, $6252a06555621505$export$2e2bcd8739ae039);
// Expose isAxiosError
$18783bca1921ec86$var$axios.isAxiosError = (0, $8354989b4dcd6e4e$export$2e2bcd8739ae039);
// Expose mergeConfig
$18783bca1921ec86$var$axios.mergeConfig = (0, $018b5e1fb5ffc975$export$2e2bcd8739ae039);
$18783bca1921ec86$var$axios.AxiosHeaders = (0, $6c55e0db0b3245e3$export$2e2bcd8739ae039);
$18783bca1921ec86$var$axios.formToJSON = (thing)=>(0, $85cee280f0a85293$export$2e2bcd8739ae039)((0, $6c358707ac100c0e$export$2e2bcd8739ae039).isHTMLForm(thing) ? new FormData(thing) : thing);
$18783bca1921ec86$var$axios.HttpStatusCode = (0, $a0cb09b1f0f101bc$export$2e2bcd8739ae039);
$18783bca1921ec86$var$axios.default = $18783bca1921ec86$var$axios;
var // this module should only have a default export
$18783bca1921ec86$export$2e2bcd8739ae039 = $18783bca1921ec86$var$axios;


// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios: $d18973b05b104eb4$export$1c00760e9e5a4e95, AxiosError: $d18973b05b104eb4$export$c1fbed17c2f6a328, CanceledError: $d18973b05b104eb4$export$1ab0c6b20d94fa14, isCancel: $d18973b05b104eb4$export$3b22524397b493c6, CancelToken: $d18973b05b104eb4$export$fd08e3cb425f0d61, VERSION: $d18973b05b104eb4$export$a4ad2735b021c132, all: $d18973b05b104eb4$export$84bf76cd7afc7469, Cancel: $d18973b05b104eb4$export$848c9b7ead0df967, isAxiosError: $d18973b05b104eb4$export$fbafdbe06a5b5a9a, spread: $d18973b05b104eb4$export$3ae0fd4797ed47c8, toFormData: $d18973b05b104eb4$export$10ae0d317ea97f8b, AxiosHeaders: $d18973b05b104eb4$export$4e7d6ff0f3e6520, HttpStatusCode: $d18973b05b104eb4$export$a972f69c851492b3, formToJSON: $d18973b05b104eb4$export$86d7c59254d6a2c9, mergeConfig: $d18973b05b104eb4$export$7ec1ebcfa9d8bd6a } = (0, $18783bca1921ec86$export$2e2bcd8739ae039);



// Делаем универсальный класс, который отправляет запрос к серверу и возвращает promise, с которым можно работать
// (т.е promise содержит .then(result => console.log(result.data.data.results)))
class $15525e02d48765b0$var$GetDataApi {
    async getData(url) {
        // Т.к в асинхронной функции не можем обработать ошибки через .then, оборачиваем в trycatch
        try {
            // Чтобы функция дождалась выполнения axios указываю await, т.е сначала дожидаемся выполнения запроса, а потом помещаем в константу
            const response = await (0, $18783bca1921ec86$export$2e2bcd8739ae039).get(url, {
                // Параметры ниже указываются не для axios, а для API, к которому мы обращаемся
                params: {
                    apikey: (0, $0d08573aed154efc$export$a9861bd62f48e142),
                    // Указываем лимит получаемых записей
                    limit: 100
                }
            });
            return response.data.data.results;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}
const $15525e02d48765b0$export$f5d62e80007de0eb = new $15525e02d48765b0$var$GetDataApi();


const $445b526e22857e2f$export$fc03ef5b849f01e5 = document.getElementById("root");
const $445b526e22857e2f$export$cb057e4476d45f6a = document.getElementById("modal");



var $bd8e690f171de42f$exports = {};

$parcel$export($bd8e690f171de42f$exports, "error__alert", () => $bd8e690f171de42f$export$e8d773fa5313fc84, (v) => $bd8e690f171de42f$export$e8d773fa5313fc84 = v);
$parcel$export($bd8e690f171de42f$exports, "error__containter", () => $bd8e690f171de42f$export$8bb0a03bc0700d89, (v) => $bd8e690f171de42f$export$8bb0a03bc0700d89 = v);
var $bd8e690f171de42f$export$e8d773fa5313fc84;
var $bd8e690f171de42f$export$8bb0a03bc0700d89;
$bd8e690f171de42f$export$e8d773fa5313fc84 = `mK0Mga_error__alert`;
$bd8e690f171de42f$export$8bb0a03bc0700d89 = `mK0Mga_error__containter`;


class $dde59c2172b7ac0e$var$Error {
    render() {
        const htmlWrapper = `
            <div class = "${(0, (/*@__PURE__*/$parcel$interopDefault($bd8e690f171de42f$exports))).error__containter}">
                <span>
                    <p class = "${(0, (/*@__PURE__*/$parcel$interopDefault($bd8e690f171de42f$exports))).error__alert}">Произошла ошибка</p>
                    <p class = "${(0, (/*@__PURE__*/$parcel$interopDefault($bd8e690f171de42f$exports))).error__alert}">Попробуйте зайти позже</p>
                </span>
            </div>
        `;
        (0, $445b526e22857e2f$export$fc03ef5b849f01e5).innerHTML = htmlWrapper;
    }
}
var $dde59c2172b7ac0e$export$2e2bcd8739ae039 = new $dde59c2172b7ac0e$var$Error();






var $e354c0eb23af13fe$exports = {};

$parcel$export($e354c0eb23af13fe$exports, "notification__close", () => $e354c0eb23af13fe$export$8744b6738560bbd7, (v) => $e354c0eb23af13fe$export$8744b6738560bbd7 = v);
$parcel$export($e354c0eb23af13fe$exports, "notification__container", () => $e354c0eb23af13fe$export$c4bb6e166a099eba, (v) => $e354c0eb23af13fe$export$c4bb6e166a099eba = v);
var $e354c0eb23af13fe$export$8744b6738560bbd7;
var $e354c0eb23af13fe$export$c4bb6e166a099eba;
$e354c0eb23af13fe$export$8744b6738560bbd7 = `OxHy_G_notification__close`;
$e354c0eb23af13fe$export$c4bb6e166a099eba = `OxHy_G_notification__container`;


var $87ec2586a73f2f0b$exports = {};

$87ec2586a73f2f0b$exports = new URL((parcelRequire("aKzDW")).resolve("21H7e"), import.meta.url).toString();


class $c9cb2f23543c917a$var$Notification {
    render() {
        const htmlWrapper = `
            <div class = "${(0, (/*@__PURE__*/$parcel$interopDefault($e354c0eb23af13fe$exports))).notification__container}">
                <span class = "${(0, (/*@__PURE__*/$parcel$interopDefault($e354c0eb23af13fe$exports))).notification__text}">Нет контента</span>
                <button 
                class = "btn bg-contain ${(0, (/*@__PURE__*/$parcel$interopDefault($e354c0eb23af13fe$exports))).notification__close}"
                onclick = "modal.innerHTML = ''"
                style = "background-image: url(${(0, (/*@__PURE__*/$parcel$interopDefault($87ec2586a73f2f0b$exports)))})"
                ></button>
            <div>
        `;
        (0, $445b526e22857e2f$export$cb057e4476d45f6a).innerHTML = htmlWrapper;
    }
}
var $c9cb2f23543c917a$export$2e2bcd8739ae039 = new $c9cb2f23543c917a$var$Notification();


var $2557788b0a1953bd$exports = {};

$parcel$export($2557788b0a1953bd$exports, "characters__close", () => $2557788b0a1953bd$export$69597df27347383, (v) => $2557788b0a1953bd$export$69597df27347383 = v);
$parcel$export($2557788b0a1953bd$exports, "characters__container", () => $2557788b0a1953bd$export$aad9456559ff38ce, (v) => $2557788b0a1953bd$export$aad9456559ff38ce = v);
$parcel$export($2557788b0a1953bd$exports, "characters__img", () => $2557788b0a1953bd$export$c5ab64e139847c13, (v) => $2557788b0a1953bd$export$c5ab64e139847c13 = v);
$parcel$export($2557788b0a1953bd$exports, "characters__item", () => $2557788b0a1953bd$export$4cc66abbbcb1afa9, (v) => $2557788b0a1953bd$export$4cc66abbbcb1afa9 = v);
$parcel$export($2557788b0a1953bd$exports, "characters__name", () => $2557788b0a1953bd$export$8bbbd28332476dbb, (v) => $2557788b0a1953bd$export$8bbbd28332476dbb = v);
$parcel$export($2557788b0a1953bd$exports, "wrapper", () => $2557788b0a1953bd$export$cc74dcc53cfce4eb, (v) => $2557788b0a1953bd$export$cc74dcc53cfce4eb = v);
var $2557788b0a1953bd$export$69597df27347383;
var $2557788b0a1953bd$export$aad9456559ff38ce;
var $2557788b0a1953bd$export$c5ab64e139847c13;
var $2557788b0a1953bd$export$4cc66abbbcb1afa9;
var $2557788b0a1953bd$export$8bbbd28332476dbb;
var $2557788b0a1953bd$export$cc74dcc53cfce4eb;
$2557788b0a1953bd$export$69597df27347383 = `royhkG_characters__close`;
$2557788b0a1953bd$export$aad9456559ff38ce = `royhkG_characters__container`;
$2557788b0a1953bd$export$c5ab64e139847c13 = `royhkG_characters__img`;
$2557788b0a1953bd$export$4cc66abbbcb1afa9 = `royhkG_characters__item`;
$2557788b0a1953bd$export$8bbbd28332476dbb = `royhkG_characters__name`;
$2557788b0a1953bd$export$cc74dcc53cfce4eb = `royhkG_wrapper`;


var $f753d8d502695256$exports = {};

$f753d8d502695256$exports = new URL((parcelRequire("aKzDW")).resolve("aZe2a"), import.meta.url).toString();


class $80b90d95c53e2e16$var$Characters {
    // Отображение списка персонажей, если данные получены
    renderContent(data) {
        let hmtlContent = "";
        // Нужны name, thumbnail.extension и thumbnail.path
        data.forEach(({ name: name, thumbnail: { extension: extension, path: path } })=>{
            if (!path.includes((0, $0d08573aed154efc$export$8c8bbd90becac28b))) {
                // Путь строим точно так же, как в Comics.js
                const imgSrc = path + "/" + (0, $0d08573aed154efc$export$b7cb009e1faa81c5) + "." + extension;
                // Формируем чистые элементы, поэтому <li>
                hmtlContent += `
                <li class = "${(0, (/*@__PURE__*/$parcel$interopDefault($2557788b0a1953bd$exports))).characters__item}">
                <img class="img-cover ${(0, (/*@__PURE__*/$parcel$interopDefault($2557788b0a1953bd$exports))).characters__img}" src="${imgSrc}">
                    <span class = "${(0, (/*@__PURE__*/$parcel$interopDefault($2557788b0a1953bd$exports))).characters__name}">${name}</span>
                </li>
            `;
            }
        });
        // Собираем единый список и добавляем кнопку закрытия (навешиваем onlick и находим по id и чистим содержимое)
        const htmlWrapper = `
            <div class = "${(0, (/*@__PURE__*/$parcel$interopDefault($2557788b0a1953bd$exports))).wrapper}">
                <ul class = "${(0, (/*@__PURE__*/$parcel$interopDefault($2557788b0a1953bd$exports))).characters__container}">
                    ${hmtlContent}
                </ul>
                <button 
                class = "btn bg-contain ${(0, (/*@__PURE__*/$parcel$interopDefault($2557788b0a1953bd$exports))).characters__close}"
                onclick = "modal.innerHTML = ''"
                style = "background-image: url(${(0, (/*@__PURE__*/$parcel$interopDefault($f753d8d502695256$exports)))})"
                ></button>
            </div>
        `;
        (0, $445b526e22857e2f$export$cb057e4476d45f6a).innerHTML = htmlWrapper;
    }
    // Render должен принимать URI (url, по которому бы будем делать запрос на получение карточек персонажей)
    // Т.к имеем дело с запросами, оборачиваем всё в async await
    async render(uri) {
        const data = await (0, $15525e02d48765b0$export$f5d62e80007de0eb).getData(uri);
        data.length ? this.renderContent(data) : (0, $c9cb2f23543c917a$export$2e2bcd8739ae039).render();
    }
}
var $80b90d95c53e2e16$export$2e2bcd8739ae039 = new $80b90d95c53e2e16$var$Characters();


var $8b9ed5d5d04aab03$exports = {};

$parcel$export($8b9ed5d5d04aab03$exports, "comics__containter", () => $8b9ed5d5d04aab03$export$ec569b80f5f65bc0, (v) => $8b9ed5d5d04aab03$export$ec569b80f5f65bc0 = v);
$parcel$export($8b9ed5d5d04aab03$exports, "comics__img", () => $8b9ed5d5d04aab03$export$2e6e253dd4202b1f, (v) => $8b9ed5d5d04aab03$export$2e6e253dd4202b1f = v);
$parcel$export($8b9ed5d5d04aab03$exports, "comics__item", () => $8b9ed5d5d04aab03$export$b67d978dec9d6e8b, (v) => $8b9ed5d5d04aab03$export$b67d978dec9d6e8b = v);
$parcel$export($8b9ed5d5d04aab03$exports, "comics__name", () => $8b9ed5d5d04aab03$export$3ffd692dcc517a2f, (v) => $8b9ed5d5d04aab03$export$3ffd692dcc517a2f = v);
var $8b9ed5d5d04aab03$export$ec569b80f5f65bc0;
var $8b9ed5d5d04aab03$export$2e6e253dd4202b1f;
var $8b9ed5d5d04aab03$export$b67d978dec9d6e8b;
var $8b9ed5d5d04aab03$export$3ffd692dcc517a2f;
$8b9ed5d5d04aab03$export$ec569b80f5f65bc0 = `_QhYYW_comics__containter`;
$8b9ed5d5d04aab03$export$2e6e253dd4202b1f = `_QhYYW_comics__img`;
$8b9ed5d5d04aab03$export$b67d978dec9d6e8b = `_QhYYW_comics__item`;
$8b9ed5d5d04aab03$export$3ffd692dcc517a2f = `_QhYYW_comics__name`;


// Т.к используются postcss модули, импорт будет возвращать объект с ключами в виде классов и значений = класс+хэш
console.log((0, (/*@__PURE__*/$parcel$interopDefault($8b9ed5d5d04aab03$exports))));
class $c6c4d2cbc237f056$var$Comics {
    // Создаю новый метод, куда переношу всё, что до этого было в методе render
    renderComics(data) {
        let hmtlContent = "";
        // Поля, которые нам нужны id; название комикса = title; изображение = thumbnail => extension, path;
        // Чтобы каждый раз не проходиться по element.id, element.title, element.thumbnail, можно сделать деструктуризацию
        // Для thumbnail у нас деструктуризация внутри деструктуризации
        data.forEach(({ id: id, title: title, thumbnail: { path: path, extension: extension } })=>{
            if (!path.includes((0, $0d08573aed154efc$export$8c8bbd90becac28b))) {
                // Мы хотим формировать url, на который нужно отправить запрос, чтобы получить героев комиксов для отрисовки в модалке
                // Должно получиться в сумме v1/public/comics/{comicId}/characters
                const uri = (0, $0d08573aed154efc$export$923ea8233b386e99) + (0, $0d08573aed154efc$export$5603b5dc13219391) + "/" + id + "/" + (0, $0d08573aed154efc$export$3da97970fe06e0d2);
                // Т.к к нам отдельно приходят путь и расширение, нужно корректно сформировать ссылку
                const imgSrc = path + "/" + (0, $0d08573aed154efc$export$b7cb009e1faa81c5) + "." + extension;
                // Комиксы, в url которых есть image_not_available, не имеют обложки
                // Теперь формируем содержание карточек
                // Чтобы можно было передать uri в другой метод добавляем кастомный аттрибут ("data-") для элемента
                hmtlContent += `
                <li class="comics__item ${(0, (/*@__PURE__*/$parcel$interopDefault($8b9ed5d5d04aab03$exports))).comics__item}" data-uri="${uri}">
                    <span class="${(0, (/*@__PURE__*/$parcel$interopDefault($8b9ed5d5d04aab03$exports))).comics__name}">${title}</span>
                    <img class="img-contain ${(0, (/*@__PURE__*/$parcel$interopDefault($8b9ed5d5d04aab03$exports))).comics__img}" src="${imgSrc}">
                </li>
            `;
            }
        });
        // Т.к ранее мы формировали только сами карточки, теперь их нужно организовать в общий список
        const htmlWrapper = `
            <ul class="${(0, (/*@__PURE__*/$parcel$interopDefault($8b9ed5d5d04aab03$exports))).comics__containter}">
                ${hmtlContent}
            </ul>
        `;
        // Остаётся добавить всё в ROOT элемент на странице
        (0, $445b526e22857e2f$export$fc03ef5b849f01e5).innerHTML = htmlWrapper;
    }
    // Тут мы должны запрашивать данные для отрисовки самих комиксов
    async render() {
        const data = await (0, $15525e02d48765b0$export$f5d62e80007de0eb).getData((0, $0d08573aed154efc$export$923ea8233b386e99) + (0, $0d08573aed154efc$export$5603b5dc13219391));
        // Валидируем, если data получили - рендерим, если нет - обрабатываем ошибку
        data ? this.renderComics(data) : (0, $dde59c2172b7ac0e$export$2e2bcd8739ae039).render();
    }
    // Соответственно, чтобы это работало, нужно вызвать метод в index.js
    eventListener() {
        // Т.к мы начали использовать модули, нужно отдельно добавить элементу класс .comics__item, дабы код ниже прододжал работать
        document.querySelectorAll(".comics__item").forEach((element)=>{
            // Получаем uri, который мы передавали в элемент в предыдущем методе render()
            const uri = element.getAttribute("data-uri");
            element.addEventListener("click", ()=>{
                // По клику вызываем render у класса Characters
                (0, $80b90d95c53e2e16$export$2e2bcd8739ae039).render(uri);
            });
        });
    }
}
var $c6c4d2cbc237f056$export$2e2bcd8739ae039 = new $c6c4d2cbc237f056$var$Comics();




class $a2ce7ab7061fe303$var$App {
    // Переношу функцию из index.js в метод render
    async render() {
        // Дожидаемся выполнения запроса 
        await (0, $c6c4d2cbc237f056$export$2e2bcd8739ae039).render();
    }
}
var // По умолчанию экспортируем экземпляр класса
$a2ce7ab7061fe303$export$2e2bcd8739ae039 = new $a2ce7ab7061fe303$var$App();





// Если не обработать промис (.then(result => ...)/не обернуть в асинхронную функцию, то в data придёт Promise {<pending>}
(async ()=>{
    // Содержимое перенёс в app.js, и заменил на App.render();
    await (0, $a2ce7ab7061fe303$export$2e2bcd8739ae039).render();
    // Чтобы использовать eventListener, нужно подключить сюда метод класса Comics
    (0, $c6c4d2cbc237f056$export$2e2bcd8739ae039).eventListener();
})();


//# sourceMappingURL=index.71e40adc.js.map
