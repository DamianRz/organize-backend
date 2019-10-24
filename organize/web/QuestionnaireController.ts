import { Request, Response } from "express";
import QuestionnaireService from '../services/QuestionnaireService';
import Utils from '../utils/Utils';

export default class QuestionnaireController {
  private service: QuestionnaireService = new QuestionnaireService();
  private utils = new Utils();

  //add
  async add(request: Request, response: Response) {
    let body = request.body;

    let requiredObjects: any = [
      {
        name: "questionnaire",
        items: ["idUser", "name", "category"] 
      }
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      let qData = body.questionnaire;
      let result = await this.service.add(qData);
      response.status(result.statusCode).send(result.value);
    }
  }

  //save
  async save(request: Request, response: Response) {
    let body = request.body;

    let requiredObjects: any = [
      {
        name: "questionnaire",
        items: ["id", "idUser", "name", "category"]
      }
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      let qData = body.questionnaire;
      let result = await this.service.save(qData);
      response.status(result.statusCode).send(result.value);
    }
  }

  //getByIdUser
  async getByIdUser(request: Request, response: Response) {
    let body = request.body;

    let requiredObjects: any = [
      {
        name: "questionnaire",
        items: ["idUser"]
      }
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      let qData = body.questionnaire;
      //return questionnaires
      let result = await this.service.getByIdUser(qData.idUser);
      response.status(result.statusCode).send(result.value);
    }
  }

  //delete
  async delete(request: Request, response: Response) {
    let body = request.body;

    let requiredObjects: any = [
      {
        name: "questionnaire",
        items: ["id"]
      }
    ];

    if (this.utils.validation(body, requiredObjects, response)) {
      let qData = body.questionnaire;
      //Delete references from questionnaire-option
      //delete questionnaire-option relation
      let deleteRelation = await this.service.deleteRelation(qData.id);
      if (deleteRelation.statusCode = 200) {
        //delete questionnaire
        let deleteQuestionnaire = await this.service.delete(qData.id);
        response.status(deleteQuestionnaire.statusCode).send(deleteQuestionnaire.value);
      } else {
        response.status(deleteRelation.statusCode).send(deleteRelation.value); //error
      }
    }
  }

};