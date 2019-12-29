import Questionnaire from '../models/Questionnaire';
import Option from '../models/Option';
import Question from '../models/Question';
import QuestionService from '../services/QuestionService';
import OptionService from '../services/OptionService';
import OptionList from '../models/OptionList';
import QuestionnaireRepository from '../repositories/QuestionnaireRepository';
import ResultObject from '../models/ResultObject';
import { QuestionInterface } from '../interfaces/Question';
import { QuestionnaireInterface } from '../interfaces/Questionnaire';
import { OptionInterface } from '../interfaces/Option';

export default class QuestionnaireService {
  private repository = new QuestionnaireRepository();
  private questionService: QuestionService = new QuestionService();
  private optionService: OptionService = new OptionService();

  // add
  public async add(qData: QuestionnaireInterface) {
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

  // addFull
  public async addFull(qData: QuestionnaireInterface) {
    // save questionnaire
    const addQuestionnaire: ResultObject = await this.add(qData);
    if (addQuestionnaire.statusCode == 200) {
      let saveQuestionnaire: { id: number, questions: { id: number, options: number[] }[] } = {
        id: addQuestionnaire.value[0].id,
        questions: [] // [{id:1, options:[3,4,5]}]
      }
      await Promise.all((qData.questions || []).map(async (question: QuestionInterface) => {
        // save question
        const responseAddQuestion: ResultObject = await this.questionService.add(question);
        if (responseAddQuestion.statusCode == 200) {
          // add question      
          saveQuestionnaire.questions.push({ id: responseAddQuestion.value[0].id, options: [] });
          await Promise.all((question.options || []).map(async (option: OptionInterface) => {
            // save option
            let o = {
              idUser: qData.idUser,
              idQuestion: responseAddQuestion.value[0].id,
              name: option.name,
              cost: option.cost
            }
            const responseAddOption: ResultObject = await this.optionService.add(o);
            if (responseAddOption.statusCode == 200) {
              // add option
              let index = saveQuestionnaire.questions.length;
              saveQuestionnaire.questions[index - 1].options.push(responseAddOption.value[0].id);
              // link questionnaire-option
              let relationQO: ResultObject = await this.optionService
                .linkQuestionnaire(responseAddOption.value[0].id, saveQuestionnaire.id);
            }
          }));
        }
      }));
      console.log(saveQuestionnaire)
      console.log(saveQuestionnaire.questions)
    } else {
      console.log(addQuestionnaire)
      // error
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

  // getByIdEvent
  public async getByIdEvent(idEvent: number) {
    try {
      return await this.repository.getByIdEvent(idEvent);
    } catch (ex) {
      return new ResultObject(400, { "error": String(ex) });
    }
  }

}