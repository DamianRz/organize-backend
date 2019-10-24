import UserSystem from '../models/UserSystem';
import ResultObject from '../models/ResultObject';
export default class UserRepository {
    private queryFunctions;
    private queries;
    get(email: string, password: string): Promise<ResultObject>;
    existsEmail(email: string): Promise<ResultObject>;
    add(user: UserSystem): Promise<ResultObject>;
    getIdByEmail(email: string): Promise<ResultObject>;
    save(user: UserSystem): Promise<ResultObject>;
    delete(id: number): Promise<ResultObject>;
}
