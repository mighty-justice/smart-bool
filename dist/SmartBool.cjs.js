'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mobx = require('mobx');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var ReactComponentSpecMethods = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    {
        factory(exports);
    }
})(commonjsGlobal, function (exports) {

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = ['getDefaultProps', 'getInitialState', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'componentDidCatch', 'render'];
});
});

unwrapExports(ReactComponentSpecMethods);

var isObject = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    {
        factory(exports);
    }
})(commonjsGlobal, function (exports) {

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isObject;
    var toString = Object.prototype.toString;


    // This check is "good enough" for purposes here.
    function isObject(candidate) {
        return toString.call(candidate) === '[object Object]';
    }
});
});

unwrapExports(isObject);

var uniqueConcatArrays = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    {
        factory(exports);
    }
})(commonjsGlobal, function (exports) {

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = uniqueConcatArrays;
    // Helper methods.
    var flattenArraysReducer = function flattenArraysReducer(array, nextArray) {
        return array.concat(nextArray);
    };
    var getRemoveDupesReducer = function getRemoveDupesReducer(keyHash) {
        return function (resultArray, item) {
            if (!keyHash[item]) {
                keyHash[item] = true;
                resultArray.push(item); // mutation ok here (sort of), since a new array is expected when reduction begins
            }

            return resultArray;
        };
    };

    /**
     * Concatenates arrays, removing duplicate entries.
     * 
     * NOTE: This only works reliably for arrays consisting entirely of items that
     * produce distinct `toString()` values whenever they are altered (e.g.,
     * strings, numbers, etc.). That's good enough for the use case here, since
     * this utility is only used to uniqueConcat arrays of strings, but it won't
     * always work elsewhere.
     */
    function uniqueConcatArrays() {
        for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
            arrays[_key] = arguments[_key];
        }

        if (arrays.length < 2) {
            return arrays.length === 1 ? arrays[0].reduce(getRemoveDupesReducer({}), []) : undefined;
        }

        var flattenedArray = arrays.reduce(flattenArraysReducer);
        return flattenedArray.reduce(getRemoveDupesReducer({}), []);
    }
});
});

unwrapExports(uniqueConcatArrays);

var build = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    {
        factory(exports, ReactComponentSpecMethods, isObject, uniqueConcatArrays);
    }
})(commonjsGlobal, function (exports, _ReactComponentSpecMethods, _isObject, _uniqueConcatArrays) {

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.autoBindMethods = undefined;
    exports.default = autoBindMethods;
    exports.autoBindMethodsForReact = autoBindMethodsForReact;

    var _ReactComponentSpecMethods2 = _interopRequireDefault(_ReactComponentSpecMethods);

    var _isObject2 = _interopRequireDefault(_isObject);

    var _uniqueConcatArrays2 = _interopRequireDefault(_uniqueConcatArrays);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    /**
     * Overloaded function for auto-binding the methods of a class to the class's relevant instance. If
     * the first argument is a function, as it will be when this is used as a "bare" or "unconfigured"
     * decorator -- as in `@autoBindMethods class SomeClass {}` -- it does the auto-bind decorating by
     * delegating to `autoBindMethodsDecorator`. If the first argument is *not* a function, as happens
     * when this is used as a "configured" decorator -- as in `@autoBindMethods(options) class SomeClass
     * {}` -- it returns a function that *itself* accepts a function (the class constructor) as its
     * first argument, and that does the auto-bind decorating by delegating to
     * `autoBindMethodsDecorator`.
     *
     * The delegate method `autoBindMethodsDecorator` is `call`ed in order to avoid changing the context
     * from whatever it would ordinarily be in the case of a non-overloaded decorator, while still
     * allowing us to pass on any received `options`.
     *
     * @param {Object|Function|undefined} [input] - optional options or the function/class to decorate
     * @param {String[]} [input.methodsToIgnore] - names of methods to skip auto-binding; applicable
     *  only if `input` is not a function
     * @param {boolean} [options.dontOptimize] - if truthy, turns off the decorator's default
     *  optimization behavior, which is to define the bound method directly on the class instance
     *  when first accessed, in order to prevent re-binding on every access and traversing the
     *  prototype chain; applicable only if `input` is not a function
     * @returns {Function|undefined}
     */
    function autoBindMethods(input) {
        if (typeof input !== 'function') {
            return function (target) {
                autoBindMethodsDecorator.call(this, target, input);
            };
        }

        autoBindMethodsDecorator.call(this, input);
    }

    exports.autoBindMethods = autoBindMethods;


    /**
     * Convenience decorator that operates the same as above, but that automatically skips all
     * methods in the React Component Spec, since they do not need auto-binding on React/Preact
     * components. Useful to those using this decorator with React, as there is no need to list
     * all of the React Component Spec methods as `methodsToIgnore`.
     *
     * @param {Object|Function|undefined} [input] - optional options or the function/class to decorate
     * @param {String[]} [input.methodsToIgnore] - names of methods to skip auto-binding; applicable
     *  only if `input` is not a function
     * @param {boolean} [options.dontOptimize] - if truthy, turns off the decorator's default
     *  optimization behavior, which is to define the bound method directly on the class instance
     *  when first accessed, in order to prevent re-binding on every access and traversing the
     *  prototype chain; applicable only if `input` is not a function
     * @returns {Function|undefined}
     */
    function autoBindMethodsForReact(input) {
        if (typeof input === 'undefined') {
            return autoBindMethods({ methodsToIgnore: _ReactComponentSpecMethods2.default });
        }

        if (typeof input !== 'function') {
            if (!(0, _isObject2.default)(input)) {
                throw new TypeError('autoBindMethodsForReact was passed an input of type ' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '. The input ' + 'argument must be either a function, a plain JS object, or undefined.');
            }

            return autoBindMethods(_extends({}, input, {
                methodsToIgnore: (0, _uniqueConcatArrays2.default)(input.methodsToIgnore || [], _ReactComponentSpecMethods2.default)
            }));
        }

        return autoBindMethods({ methodsToIgnore: _ReactComponentSpecMethods2.default })(input);
    }
    /**
     * A "legacy"-style "class" decorator function for auto-binding the methods of the "class."
     *
     * @param {Function} target - an ES2015 "class" or -- what is effectively the same thing -- a
     *  constructor function.
     * @param {Object} [options] - optional options
     * @param {string[]} [options.methodsToIgnore] - names of methods to skip auto-binding
     * @param {boolean} [options.dontOptimize] - if truthy, turns off the decorator's default
     *  optimization behavior, which is to define the bound method directly on the class instance
     *  in order to prevent lookups and re-binding on every access
     */
    function autoBindMethodsDecorator(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (typeof target !== 'function') {
            throw new TypeError('The autoBindMethods decorator must be passed a function as the first argument. ' + ('It received an argument of type ' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)) + '.'));
        }

        var prototype = target.prototype;
        var _options$methodsToIgn = options.methodsToIgnore,
            methodsToIgnore = _options$methodsToIgn === undefined ? [] : _options$methodsToIgn,
            _options$dontOptimize = options.dontOptimize,
            dontOptimize = _options$dontOptimize === undefined ? false : _options$dontOptimize;


        var ownProps = typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertyNames(prototype).concat(Object.getOwnPropertySymbols(prototype)) : Object.getOwnPropertyNames(prototype);

        if (methodsToIgnore.length > 0) {
            ownProps = ownProps.filter(function (prop) {
                return methodsToIgnore.indexOf(prop) === -1;
            });
        }

        ownProps.forEach(function (ownPropIdentifier) {
            if (ownPropIdentifier === 'constructor') {
                // This decorator should not muck around with constructors, for fear of introducing
                // unexpected side effects.
                return;
            }

            var propDescriptor = Object.getOwnPropertyDescriptor(prototype, ownPropIdentifier);
            var value = propDescriptor.value,
                configurable = propDescriptor.configurable,
                enumerable = propDescriptor.enumerable;


            if (typeof value !== 'function' || !configurable) {
                // We can only do our work with configurable functions, so bail early here.
                return;
            }

            Object.defineProperty(prototype, ownPropIdentifier, {
                // Keep the same enumerability/configurability settings.
                enumerable: enumerable,
                configurable: configurable,
                get: function get() {
                    if (this.hasOwnProperty(ownPropIdentifier)) {
                        // Don't bind the prototype's method to the prototype, or we can't re-bind it to instances.
                        return value;
                    }

                    var boundMethod = value.bind(this);

                    if (!dontOptimize) {
                        // `defineProperty` must be used here rather than a standard assignment because
                        // assignments will first check for getters/setters up the prototype chain and
                        // thus reject the assignment (since the property on the prototype has a getter
                        // but no setter (see: http://www.2ality.com/2012/08/property-definition-assignment.html))
                        Object.defineProperty(this, ownPropIdentifier, {
                            enumerable: enumerable,
                            configurable: configurable,
                            value: boundMethod,
                            writable: propDescriptor.writable !== false ? true : false
                        });
                    }

                    return boundMethod;
                },
                set: function set(newValue) {
                    if (propDescriptor.writable === false) {
                        // If the original property wasn't writable, don't change that.
                        return;
                    }

                    // Re-assigning a property on the prototype *after* the property has been bound by
                    // the decorator should simply overwrite that property entirely; it is weird (IMO)
                    // for it to magically be auto-bound to instances when assigned.
                    Object.defineProperty(prototype, ownPropIdentifier, {
                        value: newValue,
                        configurable: true,
                        enumerable: true,
                        writable: true
                    });
                }
            });
        });
    }
});
});

var autoBindMethods = unwrapExports(build);

var _class, _class2, _descriptor, _temp;
/*
  Simple class for controlling a boolean, eliminating a lot of
  repetitive single-line functions in our code-base.

  Future additions which may be useful:

  get isFalse () {
    return !this.isTrue;
  }
*/

/*
  Name: SmartBool
  Description: Simple class for controlling a boolean, eliminating repetitive single-line setter functions.
*/

/**
 * SmartBool
 *
 * @param {boolean} initial
 * @returns {SmartBool}
 */

var SmartBool = autoBindMethods(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function SmartBool() {
    var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, SmartBool);

    _initializerDefineProperty(this, "isTrue", _descriptor, this);

    this.isTrue = initial;
  }

  _createClass(SmartBool, [{
    key: "set",
    value: function set(value) {
      this.isTrue = value;
      return this.isTrue;
    }
  }, {
    key: "setTrue",
    value: function setTrue() {
      return this.set(true);
    }
  }, {
    key: "setFalse",
    value: function setFalse() {
      return this.set(false);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isTrue = !this.isTrue;
      return this.isTrue;
    } // Will set boolean to true until request completes.
    // Usage:
    // const request = client.retrieve(id);
    // await this.isLoading.until(request);

  }, {
    key: "until",
    value: function () {
      var _until = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set(true);
                _context.prev = 1;
                _context.next = 4;
                return request;

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                throw _context.t0;

              case 10:
                _context.prev = 10;
                this.set(false);
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7, 10, 13]]);
      }));

      function until(_x) {
        return _until.apply(this, arguments);
      }

      return until;
    }()
  }, {
    key: "_stringIfTrueElse",
    value: function _stringIfTrueElse(ifTrue, ifFalse) {
      return this.isTrue ? ifTrue : ifFalse;
    } // Usage:
    // <Button>{this.isSubmitting.saving()}</Button>
    // <Button>{this.isSubmitting.saving('Update')}</Button>

  }, {
    key: "saving",
    value: function saving() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Save';
      return this._stringIfTrueElse('Saving...', label);
    }
  }, {
    key: "isFalse",
    get: function get() {
      return !this.isTrue;
    }
  }]);

  return SmartBool;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isTrue", [mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class;

exports.SmartBool = SmartBool;
