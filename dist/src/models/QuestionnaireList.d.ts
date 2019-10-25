import Questionnaire from "./Questionnaire";
export default class QuestionnaireList {
    private _questionnaires;
    constructor();
    get(index: number): Questionnaire;
    set(index: number, q: Questionnaire): void;
    add(q: Questionnaire): void;
    length(): number;
}
