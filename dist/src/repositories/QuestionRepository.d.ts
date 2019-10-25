import Question from '../models/Question';
import ResultObject from '../models/ResultObject';
export default class QuestionRepository {
    private queryFunctions;
    private queries;
    add(q: Question): Promise<ResultObject>;
    save(q: Question): Promise<ResultObject>;
    getByIdType(idType: number): Promise<ResultObject>;
    getId(q: Question): Promise<ResultObject>;
    delete(idQuestion: number): Promise<ResultObject>;
}
