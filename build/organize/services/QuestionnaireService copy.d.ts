import ResultObject from '../models/ResultObject';
export default class QuestionnaireService {
    private repository;
    add(qData: any): Promise<ResultObject>;
    addOption(oData: any): Promise<ResultObject>;
    delete(idQuestionnaire: number): Promise<ResultObject>;
    deleteRelation(idQuestionnaire: number): Promise<ResultObject>;
    getByIdUser(qData: any): Promise<ResultObject>;
}
