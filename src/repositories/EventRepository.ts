import Event from '../models/Event';
import QueryFunctions from '../sql/queries/QueryFunctions';
import Queries, { EVENT_TABLE, EVENT_QUERIES } from '../sql/queries/Queries';

export default class EventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(e: Event) {
    const data = [e.name, e.location, e.start, e.end, e.description, e.guestsNumber, e.state, e.created];
    return this.queryFunctions.query(this.queries.getQuery(EVENT_TABLE, EVENT_QUERIES.ADD), data);
  }

  // getId
  public async getId(name: string, created: string) {
    const data = [name, created];
    return this.queryFunctions.query(this.queries.getQuery(EVENT_TABLE, EVENT_QUERIES.GET_ID), data);
  }

  // save
  public async save(e: Event) {
    const data = [e.name, e.location, e.start, e.end, e.description, e.guestsNumber, e.state, e.id];
    return this.queryFunctions.query(this.queries.getQuery(EVENT_TABLE, EVENT_QUERIES.SAVE), data);
  }

  // delete
  public async delete(id: number) {
    const data = [id];
    return this.queryFunctions.query(this.queries.getQuery(EVENT_TABLE, EVENT_QUERIES.DELETE), data);
  }

  // linkQuestionnaire
  public async linkQuestionnaire(idEvent: number, idQuestionnaire: number, idOption: number) {
    const data = [idEvent, idQuestionnaire, idOption];
    return this.queryFunctions.query(this.queries.getQuery(EVENT_TABLE, EVENT_QUERIES.LINK), data);
  }

  // removeLinkQuestionnaire
  public async removeLinkQuestionnaire(idEvent: number) {
    const data = [idEvent];
    return this.queryFunctions.query(this.queries.getQuery(EVENT_TABLE, EVENT_QUERIES.REMOVE_LINK), data);
  }
}
