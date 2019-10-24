import Questionnaire from "./Questionnaire";
export default class UserList {
    private _questionnaires;
    constructor();
    get(index: number): Questionnaire;
    set(index: number, q: Questionnaire): void;
    add(q: Questionnaire): void;
    length(): number;
}
