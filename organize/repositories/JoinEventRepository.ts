import Event from '../models/Event';
import EventList from '../models/EventList';
import User from '../models/UserSystem';
import UserList from '../models/UserList';
import JoinEvent from '../models/JoinEvent';
import QueryFunctions from '../Queries/QueryFunctions';
import Queries from '../Queries/Queries';
import ResultObject from '../models/ResultObject';

export default class JoinEventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(je: JoinEvent) {
    const data = [je.idUser, je.idEvent, je.idType];
    return this.queryFunctions.action(this.queries.getQuery('joinEvent', 'add'), data);
  }

  // setUserType
  public async setUserType(je: JoinEvent) {
    const data = [je.idType, je.idEvent, je.idUser];
    return this.queryFunctions.action(this.queries.getQuery('joinEvent', 'setUserType'), data);
  }

  // delete
  public async delete(idEvent: number) {
    const data = [idEvent];
    return this.queryFunctions.action(this.queries.getQuery('joinEvent', 'delete'), data);
  }

  // getJoinUsers
  public async getJoinUsers(joinEvent: JoinEvent) {
    const data = [joinEvent.idEvent, joinEvent.idType];
    const rows = await this.queryFunctions.get(this.queries.getQuery('joinEvent', 'getJoinUsers'), data);
    if (rows.statusCode === 200) {
      const userList: UserList = new UserList();
      rows.value.forEach((item: any) => {
        const user: User = new User();
        Object.assign(user, item);
        userList.add(user);
      });
      return new ResultObject(200, userList);
    } else {
      return new ResultObject(rows.statusCode, rows.value); // error
    }
  }

  // getJoinEvents
  public async getJoinEvents(joinEvent: JoinEvent) {
    const data = [joinEvent.idUser, joinEvent.idType];
    const rows = await this.queryFunctions.get(this.queries.getQuery('joinEvent', 'getJoinEvents'), data);
    if (rows.statusCode === 200) {
      const eventList: EventList = new EventList();
      rows.value.forEach((item: any) => {
        const event: Event = new Event();
        Object.assign(event, item);
        eventList.add(event);
      });
      return new ResultObject(200, eventList);
    } else {
      return new ResultObject(rows.statusCode, rows); // error
    }
  }
}
