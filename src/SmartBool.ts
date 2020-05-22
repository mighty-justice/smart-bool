import { flow, types } from 'mobx-state-tree';

/*
  Name: SmartBool
  Description: Simple class for controlling a boolean, eliminating repetitive single-line setter functions.
*/

const SmartBool = types
  .model({
    isTrue: false,
  })
  .views(self => ({
    get isFalse () {
      return !self.isTrue;
    },

     _stringIfTrueElse (ifTrue: string, ifFalse: string) {
      return self.isTrue ? ifTrue : ifFalse;
    },

    // Usage:
    // <Button>{this.isSubmitting.saving()}</Button>
    // <Button>{this.isSubmitting.saving('Update')}</Button>
    saving (label: string = 'Save') {
      return this._stringIfTrueElse('Saving...', label);
    },
  }))
  .actions(self => {
    const set = (value: boolean) => {
      self.isTrue = value;
      return self.isTrue;
    };

    const setTrue = () => set(true);

    const setFalse = () => set(false);

    const toggle = () => {
      self.isTrue = !self.isTrue;
      return self.isTrue;
    };

    // Will set boolean to true until request completes.
    // Usage:
    // const request = client.retrieve(id);
    // await isLoading.until(request);
    const until = flow(function* (request: Promise<any>) {
      set(true);
      const response = yield request;
      set(false);
      return response;
    });

    return {
      set,
      setFalse,
      setTrue,
      toggle,
      until,
    };
  });

export default SmartBool;
