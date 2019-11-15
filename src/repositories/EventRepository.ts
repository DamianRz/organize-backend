import Event from '../models/Event';
import QueryFunctions from '../queries/QueryFunctions';
import Queries from '../queries/Queries';

export default class EventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(e: Event) {
    const data = [e.name, e.location, e.start, e.end, e.description, e.guestsNumber, e.created];
    return this.queryFunctions.action(this.queries.getQuery('event', 'add'), data);
  }

  // getId
  public async getId(name: string, created: string) {
    const data = [name, created];
    return this.queryFunctions.get(this.queries.getQuery('event', 'getId'), data);
  }

  // save
  public async save(e: Event) {
    const data = [e.name, e.location, e.start, e.end, e.description, e.guestsNumber, e.id];
    return this.queryFunctions.action(this.queries.getQuery('event', 'save'), data);
  }

  // delete
  public async delete(id: number) {
    const data = [id];
    return this.queryFunctions.action(this.queries.getQuery('event', 'delete'), data);
  }

  // linkQuestionnaire
  public async linkQuestionnaire(idEvent: number, idQuestionnaire: number, idOption: number) {
    const data = [idEvent, idQuestionnaire, idOption];
    return this.queryFunctions.action(this.queries.getQuery('event', 'link'), data);
  }

  // removeLinkQuestionnaire
  public async removeLinkQuestionnaire(idEvent: number) {
    const data = [idEvent];
    return this.queryFunctions.action(this.queries.getQuery('event', 'removeLink'), data);
  }
}
