import Questionnaire from '../models/Questionnaire';
import Option from '../models/Option';
import OptionList from '../models/OptionList';
import QuestionnaireRepository from '../repositories/QuestionnaireRepository';
import ResultObject from '../models/ResultObject';

export default class QuestionnaireService {
  private repository = new QuestionnaireRepository();

  // add
  public async add(qData: any) {
    try {
      let questionnaire: Questionnaire = new Questionnaire();
      questionnaire.idUser = qData.idUser;
      questionnaire.name = qData.name;
      questionnaire.category = qData.category;

      const addNew = await this.repository.add(questionnaire);
      if (addNew.statusCode == 200) {
        return await this.repository.getId(questionnaire);
      } else { 
        return addNew; // error
      }
      
    } catch (ex) {
      return new ResultObject(400, { "error": String(ex) });
    }
  }

  // save
  public async save(qData: any) {
    try {
      let q: Questionnaire = new Questionnaire();
      q.id = qData.id;
      q.idUser = qData.idUser;
      q.name = qData.name;
      q.category = qData.category;

      return await this.repository.save(q);
    } catch (ex) {
      return new ResultObject(400, { "error": String(ex) });
    }
  }

  // delete
  public async delete(idQuestionnaire: number) {
    try {
      return await this.repository.delete(idQuestionnaire);
    } catch (ex) {
      return new ResultObject(400, { "error": String(ex) });
    }
  }

  // delete relation whit questionnaire-option
  public async deleteRelation(idQuestionnaire: number) {
    try {
      return await this.repository.deleteRelation(idQuestionnaire);
    } catch (ex) {
      return new ResultObject(400, { "error": String(ex) });
    }
  }

  // getByIdUser
  public async getByIdUser(idUser: number) {
    try {
      return await this.repository.getByIdUser(idUser);
    } catch (ex) {
      return new ResultObject(400, { "error": String(ex) });
    }
  }

}