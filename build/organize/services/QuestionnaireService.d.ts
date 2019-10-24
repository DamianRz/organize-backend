import ResultObject from '../models/ResultObject';
export default class QuestionnaireService {
    private repository;
    add(qData: any): Promise<ResultObject>;
    save(qData: any): Promise<ResultObject>;
    delete(idQuestionnaire: number): Promise<ResultObject>;
    deleteRelation(idQuestionnaire: number): Promise<ResultObject>;
    getByIdUser(idUser: number): Promise<ResultObject>;
}
