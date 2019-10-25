import TimeLimit from '../models/TimeLimit';
import QueryFunctions from '../Queries/QueryFunctions';
import Queries from '../Queries/Queries';

export default class JoinEventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(t: TimeLimit) {
    const data = [t.idEvent, t.idQuestion, t.maxTime];
    return this.queryFunctions.action(this.queries.getQuery('timeLimit', 'add'), data);
  }

  // setMaxTime
  public async setMaxTime(t: TimeLimit) {
    const data = [t.maxTime, t.idEvent, t.idQuestion];
    return this.queryFunctions.action(this.queries.getQuery('timeLimit', 'setMaxTime'), data);
  }

  // get
  public async get(t: TimeLimit) {
    const data = [t.idEvent, t.idQuestion];
    return this.queryFunctions.action(this.queries.getQuery('timeLimit', 'get'), data);
  }

  // delete
  public async delete(t: TimeLimit) {
    const data = [t.idEvent, t.idQuestion];
    return await this.queryFunctions.action(this.queries.getQuery('timeLimit', 'delete'), data);
  }
}
