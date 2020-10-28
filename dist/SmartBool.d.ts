declare class SmartBool {
    isTrue: boolean;
    constructor(initial?: boolean);
    get isFalse(): boolean;
    set(value: boolean): boolean;
    setTrue(): boolean;
    setFalse(): boolean;
    toggle(): boolean;
    until(request: Promise<any>): Promise<any>;
    private _stringIfTrueElse;
    saving(label?: string): string;
}
export default SmartBool;
