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
          items: ['idEvent', 'idQuestionnaires'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      let listLinkQO: any = [];
      let fail = new ResultObject(200, ''); // if have error, cancel insert
      await Promise.all(
        data.link.idQuestionnaires.map(async (idQ: any) => {
          const options = await this.optionService.getIdByIdQuestionnaire(idQ);
          if (options.statusCode === 200) {
            listLinkQO.push({ idQ: idQ, value: options.value });
            console.log(options.value)
          } else {
            fail = options;
          }
        })
      );
      
      if (fail.statusCode == 200) { // no errors
        await Promise.all(
          listLinkQO.map(async (item: any) => {
            const result = await this.service.linkQuestionnaire(data.link.idEvent, item.idQ, item.value);
            if (result.statusCode != 200) { // in case of error
              fail = result;
            }
          })
        );
        socket.emit(socketUrl, new ResultObject(200, 'success link relation to event-qo'))
      } else {
        socket.emit(socketUrl, fail); // send error
      }
    }
  }
  // removeLinkQuestionnaire
  public async removeLinkQuestionnaire(data: any, socket: Socket) {
    const socketUrl = 'delete:eventQuestionnaireOption';
    const requiredObjects: any = {
      socketUrl: socketUrl, // !important for callback
      items: [
        {
          name: 'link',
          items: ['idEvent'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const result = await this.service.removeLinkQuestionnaire(data.link.idEvent);
      socket.emit(socketUrl, result.value);
    }
  }

  // save
  public async save(data: any, socket: Socket) {
    const socketUrl = 'put:event';
    const requiredObjects: any = {
      socketUrl: socketUrl, // !important for callback
      items: [
        {
          name: 'event',
          items: ['id', 'name', 'location', 'start', 'end', 'description', 'guestsNumber'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const result = await this.service.save(data.event);
      socket.emit(socketUrl, result);
    }
  }

  // delete
  public async delete(data: any, socket: Socket) {
    const socketUrl = 'delete:event';
    const requiredObjects: any = {
      socketUrl: socketUrl, // !important for callback
      items: [
        {
          name: 'event',
          items: ['id'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const deleteJoinEvent = await this.joinEventService.delete(data.event.id);
      if (deleteJoinEvent.statusCode === 200) {
        const deleteEvent = await this.service.delete(data.event.id);
        socket.emit(socketUrl, deleteEvent);
      } else {
        socket.emit(socketUrl, deleteJoinEvent);
      }
    }
  }
}
