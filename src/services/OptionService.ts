import Option from '../models/Option';
import OptionRepository from '../repositories/OptionRepository';
import ResultObject from '../models/ResultObject';

export default class OptionService {
  private repository = new OptionRepository();

  // add
  public async add(oData: any) {
    try {
      const option: Option = new Option();
      option.idQuestion = oData.idQuestion;
      option.idUser = oData.idUser;
      option.name = oData.name;
      option.cost = oData.cost;
      const addNew = await this.repository.add(option);
      if (addNew.statusCode === 200) {
        return await this.repository.getId(option);
      } else {
        return addNew;
      }
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // linkQuestionnaire
  public async linkQuestionnaire(idOption: number, idQuestionnaire: number) {
    try {
      return await this.repository.linkQuestionnaire(idOption, idQuestionnaire);
    } catch (ex) {
      return new ResultObject(400, { 'addOption response fail with error:': String(ex) });
    }
  }

  // save
  public async save(oData: any) {
    try {
      const option: Option = new Option();
      option.id = oData.id;
      option.idUser = oData.idUser;
      option.idQuestion = oData.idQuestion;
      option.name = oData.name;
      option.cost = oData.cost;
      return await this.repository.save(option);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete
  public async delete(idOption: number) {
    try {
      return await this.repository.delete(idOption);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete relation whit questionnaire-option
  public async deleteRelation(idOption: number) {
    try {
      return await this.repository.deleteRelation(idOption);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // getByIdUser
  public async getByIdUser(oData: any) {
    try {
      return await this.repository.getByIdUser(oData.id);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // getByIdQuestionnaire
  public async getIdByIdQuestionnaire(idQuestionnaire: number) {
    try {
      return await this.repository.getIdByIdQuestionnaire(idQuestionnaire);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }
}
