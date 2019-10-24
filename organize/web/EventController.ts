import { Request, Response } from 'express';
import EventService from '../services/EventService';
import OptionService from '../services/OptionService';
import JoinEventService from '../services/JoinEventService';
import Utils from '../utils/Utils';

export default class UserController {
  private service: EventService = new EventService();
  private joinEventService: JoinEventService = new JoinEventService();
  private optionService: OptionService = new OptionService();
  private utils = new Utils();

  // add
  public async add(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'event',
        items: ['name', 'location', 'start', 'end', 'description', 'guestsNumber', 'created', 'state'],
      },
      {
        name: 'joinEvent',
        items: ['idUser', 'idType'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const eventData = body.event;
      const jeData = body.joinEvent;
      const newEvent = await this.service.add(eventData);
      if (newEvent.statusCode === 200) {
        jeData.idEvent = newEvent.value.id;
        const addJoinEvent = await this.joinEventService.add(jeData);
        if (addJoinEvent.statusCode === 200) {
          response.status(addJoinEvent.statusCode)
            .send(addJoinEvent.value);
        } else {
          response.status(addJoinEvent.statusCode).send(addJoinEvent.value);
        }
      } else {
        response.status(newEvent.statusCode).send(newEvent.value);
      }
    }
  }

  // save
  public async save(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'event',
        items: ['id', 'name', 'location', 'start', 'end', 'description', 'guestsNumber'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const eventData = body.event;
      const result = await this.service.save(eventData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // delete
  public async delete(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'event',
        items: ['id'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const eventId = body.event.id;
      const deleteJoinEvent = await this.joinEventService.delete(eventId);
      if (deleteJoinEvent.statusCode === 200) {
        const deleteEvent = await this.service.delete(body.id);
        response.status(deleteEvent.statusCode).send(deleteEvent.value);
      } else {
        response.status(deleteJoinEvent.statusCode).send(deleteJoinEvent.value); // error
      }
    }
  }

  // linkQuestionnaire
  public async linkQuestionnaire(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'link',
        items: ['idEvent', 'idQuestionnaire'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const lData = body.link;

      const options = await this.optionService.getIdByIdQuestionnaire(lData.idQuestionnaire);
      if (options.statusCode === 200) {
        const result = await this.service.linkQuestionnaire(lData.idEvent, lData.idQuestionnaire, options.value);
        response.status(result.statusCode).send(result.value);
      } else {
        response.status(options.statusCode).send(options.value); // error
      }
    }
  }
}
