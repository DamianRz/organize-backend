import Questionnaire from '../models/Questionnaire';
import QuestionnaireList from '../models/QuestionnaireList';
import MysqlConnection from '../connection/MysqlConnection';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../Queries/QueryFunctions';
import Queries from '../Queries/Queries';

export default class QuestionnaireRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(q: Questionnaire) {
    const data = [q.idUser, q.name, q.category];
    return this.queryFunctions.action(this.queries.getQuery('questionnaire', 'add'), data);
  }

  // save
  public async save(q: Questionnaire) {
    const data = [q.idUser, q.name, q.category, q.id];
    return this.queryFunctions.action(this.queries.getQuery('questionnaire', 'save'), data);
  }

  // getByIdUser
  public async getByIdUser(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    const rows = await this.queryFunctions.get(this.queries.getQuery('questionnaire', 'getByIdUser'), data);
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
    return this.queryFunctions.get(this.queries.getQuery('questionnaire', 'getId'), data);
  }

  // delete
  public async delete(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    return this.queryFunctions.action(this.queries.getQuery('questionnaire', 'delete'), data);
  }

  // delete relation
  public async deleteRelation(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    return this.queryFunctions.action(this.queries.getQuery('questionnaire', ' deleteRelation'), data);
  }
}
