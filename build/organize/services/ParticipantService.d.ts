import ResultObject from '../models/ResultObject';
export default class ParticipantService {
    private repository;
    add(pData: any): Promise<ResultObject>;
    delete(pData: any): Promise<ResultObject>;
}
