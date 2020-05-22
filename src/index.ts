import { default as SmartBool } from './SmartBool';
import { Instance } from 'mobx-state-tree';

export interface ISmartBool extends Instance<typeof SmartBool> {}
export default SmartBool;
