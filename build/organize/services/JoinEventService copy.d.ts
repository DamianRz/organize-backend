import ResultObject from '../models/ResultObject';
export default class JoinEventService {
    private repository;
    add(pData: any): Promise<ResultObject>;
    delete(idEvent: number): Promise<ResultObject>;
    getJoinEvents(jeData: any): Promise<ResultObject>;
    getJoinUsers(jeData: any): Promise<ResultObject>;
}
