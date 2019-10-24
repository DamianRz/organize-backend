import { Request, Response } from 'express';
import TimeLimitService from '../services/TimeLimitService';
import Utils from '../utils/Utils';

export default class OptionController {
  private service: TimeLimitService = new TimeLimitService();
  private utils = new Utils();

  // add
  public async add(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'timeLimit',
        items: ['idEvent', 'idQuestion', 'maxTime'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const tData = body.timeLimit;
      const result = await this.service.add(tData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // setMaxTime
  public async setMaxTime(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'timeLimit',
        items: ['idEvent', 'idQuestion', 'maxTime'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const tData = body.timeLimit;
      const result = await this.service.setMaxTime(tData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // delete
  public async delete(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'timeLimit',
        items: ['idEvent', 'idQuestion', 'maxTime'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const tData = body.timeLimit;
      const result = await this.service.delete(tData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // get
  public async getByIdUser(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'timeLimit',
        items: ['idEvent', 'idQuestion', 'maxTime'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const tData = body.timeLimit;
      const result = await this.service.get(tData);
      response.status(result.statusCode).send(result.value);
    }
  }
}
