import { Request, Response } from 'express';
import UserSystemService from '../services/UserSystemService';
import Utils from '../utils/Utils';

export default class UserSystemController {
  private service: UserSystemService = new UserSystemService();
  private utils = new Utils();

  // signIn
  public async signIn(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'user',
        items: ['email', 'password'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const userData = body.user;
      const result = await this.service.signIn(userData.email, userData.password);
      response.status(result.statusCode).send(result.value);
    }
  }

  // signUp
  public async signUp(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'user',
        items: ['username', 'email', 'password'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const userData = body.user;
      const result = await this.service.signUp(userData);
      response.status(result.statusCode).send(result.value);
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
