import { __decorate } from 'tslib';
import autoBindMethods from 'class-autobind-decorator';
import { observable } from 'mobx';

/*
  Name: SmartBool
  Description: Simple class for controlling a boolean, eliminating repetitive single-line setter functions.
*/

let SmartBool = class SmartBool {
  constructor(initial = false) {
    this.isTrue = false;
    this.isTrue = initial;
  }

  get isFalse() {
    return !this.isTrue;
  }

  set(value) {
    this.isTrue = value;
    return this.isTrue;
  }

  setTrue() {
    return this.set(true);
  }

  setFalse() {
    return this.set(false);
  }

  toggle() {
    this.isTrue = !this.isTrue;
    return this.isTrue;
  } // Will set boolean to true until request completes.
  // Usage:
  // const request = client.retrieve(id);
  // await this.isLoading.until(request);


  async until(request) {
    this.set(true);

    try {
      return await request;
    } catch (err) {
      throw err;
    } finally {
      this.set(false);
    }
  }

  _stringIfTrueElse(ifTrue, ifFalse) {
    return this.isTrue ? ifTrue : ifFalse;
  } // Usage:
  // <Button>{this.isSubmitting.saving()}</Button>
  // <Button>{this.isSubmitting.saving('Update')}</Button>


  saving(label = 'Save') {
    return this._stringIfTrueElse('Saving...', label);
  }

};

__decorate([observable], SmartBool.prototype, "isTrue", void 0);

SmartBool = /*#__PURE__*/__decorate([autoBindMethods], SmartBool);
var SmartBool$1 = SmartBool;

export default SmartBool$1;
//# sourceMappingURL=smart-bool.esm.js.map
