import UserSystem from '../models/UserSystem';
import MysqlConnection from '../connection/MysqlConnection';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../Queries/QueryFunctions';
import Queries from '../Queries/Queries';

export default class UserRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // get
  public async get(email: string, password: string) {
    const data = [email, password];
    return this.queryFunctions.get(this.queries.getQuery('userSystem', 'get'), data);
  }

  // existsEmail
  public async existsEmail(email: string) {
    const data = [email];
    const exists = await this.queryFunctions.get(this.queries.getQuery('userSystem', 'existsEmail'), data);
    if (exists.statusCode === 200) {
      if (exists.value[0]) {
        return new ResultObject(200, true);
      } else {
        return new ResultObject(200, false);
      }
    } else {
      return new ResultObject(403, exists.value);
    }
  }

  // add
  public async add(user: UserSystem) {
    const data = [user.username, user.password, user.email];
    return this.queryFunctions.action(this.queries.getQuery('userSystem', 'add'), data);
  }

  // getIdByEmail
  public async getIdByEmail(email: string) {
    const data = [email];
    return this.queryFunctions.get(this.queries.getQuery('userSystem', 'getIdByEmail'), data);
  }

  // save
  public async save(user: UserSystem) {
    const data = [user.username, user.password, user.email, user.id];
    return this.queryFunctions.action(this.queries.getQuery('userSystem', 'save'), data);
  }

  // delete
  public async delete(id: number) {
    const data = [id];
    return this.queryFunctions.action(this.queries.getQuery('userSystem', 'delete'), data);
  }
}
