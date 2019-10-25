import Question from '../models/Question';
// import Option from '../models/Option';
// import OptionList from '../models/OptionList';
import QuestionRepository from '../repositories/QuestionRepository';
import ResultObject from '../models/ResultObject';

export default class QuestionService {
  private repository = new QuestionRepository();

  // add
  public async add(qData: any) {
    try {
      const question: Question = new Question();
      question.idType = qData.idType;
      question.name = qData.name;
      question.category = qData.category;

      const addNew = await this.repository.add(question);
      if (addNew.statusCode == 200) {
        return await this.repository.getId(question);
      } else {
        return addNew;
      }

    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // save
  public async save(qData: any) {
    try {
      const q: Question = new Question();
      q.id = qData.id;
      q.idType = qData.idType;
      q.name = qData.name;
      q.category = qData.category;

      return await this.repository.save(q);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete
  public async delete(idQuestion: number) {
    try {
      return await this.repository.delete(idQuestion);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete relation whit question-option
  // async deleteRelation(idQuestion: number) {
  //   try {
  //     return await this.repository.deleteRelation(idQuestion);
  //   } catch (ex) {
  //     return new ResultObject(400, { "error": String(ex) });
  //   }
  // }

  // getByIdType
  public async getByIdType(idType: number) {
    try {
      return await this.repository.getByIdType(idType);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }
}
