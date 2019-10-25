import ResultObject from '../models/ResultObject';
export default class QuestionService {
    private repository;
    add(qData: any): Promise<ResultObject>;
    save(qData: any): Promise<ResultObject>;
    delete(idQuestion: number): Promise<ResultObject>;
    getByIdType(idType: number): Promise<ResultObject>;
}
