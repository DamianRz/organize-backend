import Question from './Question';
export default class QuestionnaireList {
    private _questions;
    constructor();
    get(index: number): Question;
    set(index: number, q: Question): void;
    add(q: Question): void;
    length(): number;
}
