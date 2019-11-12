import { Request, Response } from 'express';
import EventService from '../services/EventService';
import OptionService from '../services/OptionService';
import JoinEventService from '../services/JoinEventService';
import Utils from '../utils/Utils';
import { Socket } from 'socket.io';
import ResultObject from '../models/ResultObject';

export default class UserController {
  private service: EventService = new EventService();
  private joinEventService: JoinEventService = new JoinEventService();
  private optionService: OptionService = new OptionService();
  private utils = new Utils();


  // 'get:joinEvents'
  public async getJoinEvents(data: any, socket: Socket) {
    const requiredObjects: any = {
      socketUrl: 'get:joinEvents', // !important for callback
      items: [
        {
          name: 'joinEvent',
          items: ['idUser', 'idType'],
        },
      ],
    };

    if (this.utils.validateData(data, requiredObjects, socket)) {
      const jeData = data.joinEvent;
      const result = await this.service.getJoinEvents(jeData);
      socket.emit('get:joinEvents', result);
    }
  }



  // add
  public async add(data: any, socket: Socket) {
    const socketUrl = 'post:event';
    const requiredObjects: any = {
      socketUrl: socketUrl, // !important for callback
      items: [
        {
          name: 'event',
          items: ['name', 'location', 'start', 'end', 'description', 'guestsNumber', 'created', 'state'],
        },
        {
          name: 'joinEvent',
          items: ['idUser', 'idType'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const eventData = data.event;
      const jeData = data.joinEvent;
      const newEvent = await this.service.add(eventData);
      if (newEvent.statusCode == 200) {
        const addJoinEvent = await this.joinEventService.add(jeData, newEvent.value[0].id);
        socket.emit(socketUrl, new ResultObject(200, { id: newEvent.value[0].id })); // return id of the new event
      } else {
        socket.emit(socketUrl, newEvent);
      }
    }
  }

  // linkQuestionnaire
  public async linkQuestionnaire(data: any, socket: Socket) {
    const socketUrl = 'post:eventQuestionnaireOption';
    const requiredObjects: any = {
      socketUrl: socketUrl, // !important for callback
      items: [
        {
          name: 'link',
          items: ['idEvent', 'idQuestionnaire'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const options = await this.optionService.getIdByIdQuestionnaire(data.link.idQuestionnaire);
      console.log('options.statusCode',options.statusCode)
      if (options.statusCode === 200) {
        
        const result = await this.service.linkQuestionnaire(data.link.idEvent, data.link.idQuestionnaire, options.value);
        socket.emit(socketUrl, result.value);
      } else {
        socket.emit(socketUrl, options.value);
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
}
