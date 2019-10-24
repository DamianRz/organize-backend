import Questionnaire from '../models/Questionnaire';
import Option from '../models/Option';
import ResultObject from '../models/ResultObject';
export default class JoinEventRepository {
    add(q: Questionnaire): Promise<ResultObject>;
    addOption(o: Option): Promise<ResultObject>;
    getByIdUser(idQuestionnaire: number): Promise<ResultObject>;
    delete(idQuestionnaire: number): Promise<ResultObject>;
    deleteRelation(idQuestionnaire: number): Promise<ResultObject>;
}
