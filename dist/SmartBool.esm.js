import autoBindMethods from 'class-autobind-decorator';
import { observable } from 'mobx';

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
  Object.keys(descriptor).forEach(function (key) {
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
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var _class, _class2, _descriptor, _temp;
/*
  Name: SmartBool
  Description: Simple class for controlling a boolean, eliminating repetitive single-line setter functions.
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
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isTrue", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class;

export default SmartBool;
