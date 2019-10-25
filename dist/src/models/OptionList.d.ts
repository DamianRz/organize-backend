import Option from "./Option";
export default class OptionList {
    private _options;
    constructor();
    get(index: number): Option;
    set(index: number, option: Option): void;
    add(option: Option): void;
    length(): number;
}
