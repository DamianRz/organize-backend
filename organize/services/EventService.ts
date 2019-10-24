import Event from '../models/Event';
import EventRepository from '../repositories/EventRepository';
import ParticipantService from './JoinEventService';
import ResultObject from '../models/ResultObject';
import Uses from '../models/Uses';

export default class EventService {
  private repository = new EventRepository();
  private participantService = new ParticipantService();
  //  private participantRepo = new ParticipantRepository();

  // add
  public async add(eventData: any) {
    try {
      const event: Event = new Event();
      event.name = eventData.name;
      event.location = eventData.location;
      event.start = eventData.start;
      event.end = eventData.end;
      event.description = eventData.description;
      event.guestsNumber = eventData.guestsNumber;
      event.created = eventData.created;
      event.state = eventData.state;
      // Create new event
      const addNewEvent: ResultObject = await this.repository.add(event);
      if (addNewEvent.statusCode == 200) {
        // Get id by new event
        return await this.repository.getId(event.name, event.created);
      } else {
        return addNewEvent; // error
      }
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // save
  public async save(eventData: any) {
    try {
      const event: Event = new Event();
      event.id = eventData.id;
      event.name = eventData.name;
      event.location = eventData.location;
      event.start = eventData.start;
      event.end = eventData.end;
      event.description = eventData.description;
      event.guestsNumber = eventData.guestNumber;
      event.state = eventData.state;

      return await this.repository.save(event);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete
  public async delete(id: number) {
    try {
      return await this.repository.delete(id);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  public async linkQuestionnaire(idEvent: number, idQuestionnaire: number, options: any) {
    try {
      options.map(async (option: any) => {
        await this.repository.linkQuestionnaire(idEvent, idQuestionnaire, option.idOption);
      });

      return new ResultObject(201, 'event linked with questionnaire');
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }
}
