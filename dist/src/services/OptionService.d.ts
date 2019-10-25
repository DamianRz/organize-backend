import ResultObject from '../models/ResultObject';
export default class OptionService {
    private repository;
    add(oData: any): Promise<ResultObject>;
    linkQuestionnaire(idOption: number, idQuestionnaire: number): Promise<ResultObject>;
    save(oData: any): Promise<ResultObject>;
    delete(idOption: number): Promise<ResultObject>;
    deleteRelation(idOption: number): Promise<ResultObject>;
    getByIdUser(oData: any): Promise<ResultObject>;
    getIdByIdQuestionnaire(idQuestionnaire: number): Promise<ResultObject>;
}
