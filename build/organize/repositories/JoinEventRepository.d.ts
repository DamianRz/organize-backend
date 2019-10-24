import JoinEvent from '../models/JoinEvent';
import ResultObject from '../models/ResultObject';
export default class JoinEventRepository {
    private queryFunctions;
    private queries;
    add(je: JoinEvent): Promise<ResultObject>;
    setUserType(je: JoinEvent): Promise<ResultObject>;
    delete(idEvent: number): Promise<ResultObject>;
    getJoinUsers(joinEvent: JoinEvent): Promise<ResultObject>;
    getJoinEvents(joinEvent: JoinEvent): Promise<ResultObject>;
}
