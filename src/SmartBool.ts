import autoBindMethods from 'class-autobind-decorator';
import { observable } from 'mobx';

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

@autoBindMethods
class SmartBool {
  @observable public isTrue = false;

  constructor (initial = false) {
    this.isTrue = initial;
  }

  public get isFalse () {
    return !this.isTrue;
  }

  public set (value: boolean) {
    this.isTrue = value;
    return this.isTrue;
  }

  public setTrue () {
    return this.set(true);
  }

  public setFalse () {
    return this.set(false);
  }

  public toggle () {
    this.isTrue = !this.isTrue;
    return this.isTrue;
  }

  // Will set boolean to true until request completes.
  // Usage:
  // const request = client.retrieve(id);
  // await this.isLoading.until(request);
  public async until (request: Promise<any>) {
    this.set(true);
    try {
      return (await request);
    }
    catch (err) {
      throw err;
    }
    finally {
      this.set(false);
    }
  }

  private _stringIfTrueElse (ifTrue: string, ifFalse: string) {
    return this.isTrue ? ifTrue : ifFalse;
  }

  // Usage:
  // <Button>{this.isSubmitting.saving()}</Button>
  // <Button>{this.isSubmitting.saving('Update')}</Button>
  public saving (label: string = 'Save') {
    return this._stringIfTrueElse('Saving...', label);
  }
}

export default SmartBool;
