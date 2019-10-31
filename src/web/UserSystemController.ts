import { Request, Response } from 'express';
import { Socket } from 'socket.io';
import UserSystemService from '../services/UserSystemService';
import Utils from '../utils/Utils';
import ResultObject from '../models/ResultObject';
import ErrorsList from '../errors/ErrorsList';

export default class UserSystemController {
  private errorList = new ErrorsList();

  private service: UserSystemService = new UserSystemService();
  private utils = new Utils();

  // signIn
  public async signIn(data: any, socket: Socket) {
    const requiredObjects: any = {
      socketUrl: 'post:signIn', // !important for callback
      items: [
        {
          name: 'user',
          items: ['email', 'password'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const userData = data.user;
      const result = await this.service.signIn(userData.email, userData.password);
      socket.emit('post:signIn', result);
    }
  }

  // signUp
  public async signUp(data: any, socket: Socket) {
    const requiredObjects: any = {
      socketUrl: 'post:signUp', // !important for callback
      items: [
        {
          name: 'user',
          items: ['username', 'email', 'password'],
        },
      ],
    };
    if (this.utils.validateData(data, requiredObjects, socket)) {
      const result = await this.service.signUp(data.user);
      socket.emit('post:signUp', result);
    }
  }

  // save
  public async save(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'user',
        items: ['id', 'username', 'email', 'password'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const userData = body.user;
      const result = await this.service.save(userData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // delete
  public async delete(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'user',
        items: ['id'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const userData = body.user;
      const result = await this.service.delete(userData.id);
      response.status(result.statusCode).send(result.value);
    }
  }
}
