import Questionnaire from '../models/Questionnaire';
import ResultObject from '../models/ResultObject';
export default class QuestionnaireRepository {
    private queryFunctions;
    private queries;
    add(q: Questionnaire): Promise<ResultObject>;
    save(q: Questionnaire): Promise<ResultObject>;
    getByIdUser(idQuestionnaire: number): Promise<ResultObject>;
    getId(q: Questionnaire): Promise<ResultObject>;
    delete(idQuestionnaire: number): Promise<ResultObject>;
    deleteRelation(idQuestionnaire: number): Promise<ResultObject>;
}
