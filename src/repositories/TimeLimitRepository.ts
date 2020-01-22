import TimeLimit from '../models/TimeLimit';
import QueryFunctions from '../sql/queries/QueryFunctions';
import Queries, { TIME_LIMIT_TABLE, TIME_LIMIT_QUERIES } from '../sql/queries/Queries';

export default class JoinEventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(t: TimeLimit) {
    const data = [t.idEvent, t.idQuestion, t.maxTime];
    return this.queryFunctions.query(this.queries.getQuery(TIME_LIMIT_TABLE, TIME_LIMIT_QUERIES.ADD), data);
  }

  // setMaxTime
  public async setMaxTime(t: TimeLimit) {
    const data = [t.maxTime, t.idEvent, t.idQuestion];
    return this.queryFunctions.query(this.queries.getQuery(TIME_LIMIT_TABLE, TIME_LIMIT_QUERIES.SET_MAX_TIME), data);
  }

  // get
  public async get(t: TimeLimit) {
    const data = [t.idEvent, t.idQuestion];
    return this.queryFunctions.query(this.queries.getQuery(TIME_LIMIT_TABLE, TIME_LIMIT_QUERIES.GET), data);
  }

  // delete
  public async delete(t: TimeLimit) {
    const data = [t.idEvent, t.idQuestion];
    return await this.queryFunctions.query(this.queries.getQuery(TIME_LIMIT_TABLE, TIME_LIMIT_QUERIES.DELETE), data);
  }
}
