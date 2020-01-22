import UserSystem from '../models/UserSystem';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../sql/queries/QueryFunctions';
import Queries, { USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES } from '../sql/queries/Queries';

export default class UserRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // get
  public async get(email: string) {
    const data = [email];
    return this.queryFunctions.query(this.queries.getQuery(USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES.GET), data);
  }

  // existsEmail
  public async existsEmail(email: string) {
    const data = [email];
    const exists = await this.queryFunctions.query(this.queries.getQuery(USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES.EXIST_EMAIL), data);
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
    return this.queryFunctions.query(this.queries.getQuery(USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES.ADD), data);
  }

  // getIdByEmail
  public async getIdByEmail(email: string) {
    const data = [email];
    return this.queryFunctions.query(this.queries.getQuery(USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES.GET_ID_BY_EMAIL), data);
  }

  // save
  public async save(user: UserSystem) {
    const data = [user.username, user.password, user.email, user.id];
    return this.queryFunctions.query(this.queries.getQuery(USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES.SAVE), data);
  }

  // delete
  public async delete(id: number) {
    const data = [id];
    return this.queryFunctions.query(this.queries.getQuery(USER_SYSTEM_TABLE, USER_SYSTEM_QUERIES.DELETE), data);
  }
}
