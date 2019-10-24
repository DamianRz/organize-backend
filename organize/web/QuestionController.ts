import { Request, Response } from 'express';
import QuestionService from '../services/QuestionService';
import Utils from '../utils/Utils';

export default class QuestionController {
  private service: QuestionService = new QuestionService();
  private utils = new Utils();

  // add
  public async add(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'question',
        items: ['idType', 'name', 'category'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const qData = body.question;
      const result = await this.service.add(qData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // save
  public async save(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'question',
        items: ['id', 'idType', 'name', 'category'],
      },
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      const qData = body.question;
      const result = await this.service.save(qData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // getByIdType
  public async getByIdType(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'question',
        items: ['idType'],
      },
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      const qData = body.question;
      // return question
      const result = await this.service.getByIdType(qData.idType);
      response.status(result.statusCode).send(result.value);
    }
  }

  // delete
  public async delete(request: Request, response: Response) {
    const body = request.body;

    const requiredObjects: any = [
      {
        name: 'question',
        items: ['id'],
      },
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      const qData = body.question;
      const deleteQuestion = await this.service.delete(qData.id);
      response.status(deleteQuestion.statusCode).send(deleteQuestion.value);
    }
  }
}
