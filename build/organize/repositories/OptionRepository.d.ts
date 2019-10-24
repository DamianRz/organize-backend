import Option from '../models/Option';
import ResultObject from '../models/ResultObject';
export default class JoinEventRepository {
    private queryFunctions;
    private queries;
    add(o: Option): Promise<ResultObject>;
    linkQuestionnaire(idOption: number, idQuestionnaire: number): Promise<ResultObject>;
    save(o: Option): Promise<ResultObject>;
    getByIdUser(idUser: number): Promise<ResultObject>;
    getIdByIdQuestionnaire(idQuestionnaire: number): Promise<ResultObject>;
    getId(o: Option): Promise<ResultObject>;
    delete(idOption: number): Promise<ResultObject>;
    deleteRelation(idOption: number): Promise<ResultObject>;
}
