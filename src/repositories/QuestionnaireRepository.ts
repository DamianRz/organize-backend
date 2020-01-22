import Questionnaire from '../models/Questionnaire';
import QuestionnaireList from '../models/QuestionnaireList';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../sql/queries/QueryFunctions';
import Queries, { QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES } from '../sql/queries/Queries';

export default class QuestionnaireRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(q: Questionnaire) {
    const data = [q.idUser, q.name, q.category];
    return this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.ADD), data);
  }

  // save
  public async save(q: Questionnaire) {
    const data = [q.idUser, q.name, q.category, q.id];
    return this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.SAVE), data);
  }

  // getByIdUser
  public async getByIdUser(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    const rows = await this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.GET_BY_ID_USER), data);
    if (rows.statusCode) {
      const qList: QuestionnaireList = new QuestionnaireList();
      rows.value.forEach((item: any) => {
        const q: Questionnaire = new Questionnaire();
        Object.assign(q, item);
        qList.add(q);
      });
      return new ResultObject(200, qList);
    } else {
      return new ResultObject(rows.statusCode, rows);
    }
  }

  // getByIdEvent
  public async getByIdEvent(idEvent: number) {
    const data = [idEvent];
    const rows = await this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.GET_BY_ID_EVENT), data);
    if (rows.statusCode) {
      const qList: QuestionnaireList = new QuestionnaireList();
      rows.value.forEach((item: any) => {
        const q: Questionnaire = new Questionnaire();
        Object.assign(q, item);
        qList.add(q);
      });
      return new ResultObject(200, qList);
    } else {
      return new ResultObject(rows.statusCode, rows);
    }
  }

  //  getId
  public async getId(q: Questionnaire) {
    const data = [q.idUser, q.name, q.category];
    return this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.GET_ID), data);
  }

  // delete
  public async delete(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    return this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.DELETE), data);
  }

  // delete relation
  public async deleteRelation(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    return this.queryFunctions.query(this.queries.getQuery(QUESTIONNAIRE_TABLE, QUESTIONNAIRE_QUERIES.DELETE_RELATION), data);
  }
}
