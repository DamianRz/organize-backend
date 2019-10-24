import { Request, Response } from 'express';
import OptionService from '../services/OptionService';
import Utils from '../utils/Utils';

export default class OptionController {
  private service: OptionService = new OptionService();
  private utils = new Utils();

  // add
  public async add(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'option',
        items: ['idQuestion', 'idUser', 'name', 'cost'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const oData = body.option;
      const result = await this.service.add(oData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // linkQuestionnaire
  public async linkQuestionnaire(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'link',
        items: ['idOption', 'idQuestionnaire'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const lData = body.link;
      const result = await this.service.linkQuestionnaire(lData.idOption, lData.idQuestionnaire);
      response.status(result.statusCode).send(result.value);
    }
  }

  // save
  public async save(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'option',
        items: ['id', 'idQuestion', 'idUser', 'name', 'cost'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const oData = body.option;
      const result = await this.service.save(oData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // delete
  public async delete(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'option',
        items: ['id'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const oData = body.option;
      const deleteRelation = await this.service.deleteRelation(oData.id);
      if (deleteRelation.statusCode === 200) {
        const deleteOption = await this.service.delete(oData.id);
        response.status(deleteOption.statusCode).send(deleteOption.value);
      } else {
        response.status(deleteRelation.statusCode).send(deleteRelation.value); // error
      }
    }
  }

  // getByIdUser
  public async getByIdUser(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'option',
        items: ['idUser'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const oData = body.option;
      // return questionnaires
      const result = await this.service.getByIdUser(oData);
      response.status(result.statusCode).send(result.value);
    }
  }

  // getIdByQuestionnaire
  public async getIdByQuestionnaire(request: Request, response: Response) {
    const body = request.body;
    const requiredObjects: any = [
      {
        name: 'option',
        items: ['idQuestionnaire'],
      },
    ];
    if (this.utils.validation(body, requiredObjects, response)) {
      const oData = body.option;
      // return options
      const result = await this.service.getIdByIdQuestionnaire(oData);
      response.status(result.statusCode).send(result.value);
    }
  }
}
