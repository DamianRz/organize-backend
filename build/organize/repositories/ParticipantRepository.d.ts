import JoinEvent from '../models/JoinEvent';
import ResultObject from '../models/ResultObject';
export default class JoinEventRepository {
    add(je: JoinEvent): Promise<ResultObject>;
    delete(je: JoinEvent): Promise<ResultObject>;
}
