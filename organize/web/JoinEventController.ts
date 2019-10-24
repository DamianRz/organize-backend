import { Request, Response } from 'express';
import JoinEventService from '../services/JoinEventService';
import Utils from '../utils/Utils';

export default class JoinEventController {
  private service: JoinEventService = new JoinEventService();
  private utils = new Utils();

  // add
  public async add(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'joinEvent',
        items: ['idEvent', 'idUser', 'idType'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const jeData = body.joinData;
      const result = await this.service.add(jeData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // setUserType
  public async setUserType(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'joinEvent',
        items: ['idEvent', 'idUser', 'idType'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const jeData = body.joinData;
      const result = await this.service.setUserType(jeData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // delete
  public async delete(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'joinEvent',
        items: ['idEvent'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const jeData = body.joinData;
      const result = await this.service.delete(jeData.idEvent);
      response.status(result.statusCode).send(result.value);
    }
  }

  // getJoinEvents
  public async getJoinEvents(request: Request, response: Response) {
    const body = request.query;

    console.log(body);

    const requiredObjects: any = [
      {
        name: 'joinEvent',
        items: ['idUser', 'idType'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const jeData = body.joinEvent;
      const result = await this.service.getJoinEvents(jeData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // getJoinUsers
  public async getJoinUsers(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'joinEvent',
        items: ['idEvent', 'idType'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const jeData = body.joinData;
      const result = await this.service.getJoinUsers(jeData);
      response.status(result.statusCode).send(result.value);
    }
  }
}
