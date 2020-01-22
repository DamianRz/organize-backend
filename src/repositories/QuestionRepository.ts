import Question from '../models/Question';
import QuestionList from '../models/QuestionList';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../sql/queries/QueryFunctions';
import Queries, { QUESTION_TABLE, QUESTION_QUERIES } from '../sql/queries/Queries';

export default class QuestionRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(q: Question) {
    const data = [q.idType, q.name, q.category];
    return this.queryFunctions.query(this.queries.getQuery(QUESTION_TABLE, QUESTION_QUERIES.ADD), data);
  }

  // save
  public async save(q: Question) {
    const data = [q.idType, q.name, q.category, q.id];
    return this.queryFunctions.query(this.queries.getQuery(QUESTION_TABLE, QUESTION_QUERIES.SAVE), data);
  }

  // getByIdType
  public async getByIdType(idType: number) {
    const data = [idType];
    const rows = await this.queryFunctions.query(this.queries.getQuery(QUESTION_TABLE, QUESTION_QUERIES.GET_BY_ID_TYPE), data);
    if (rows.statusCode === 200) {
      const qList: QuestionList = new QuestionList();
      rows.value.forEach((item: any) => {
        const q: Question = new Question();
        Object.assign(q, item);
        qList.add(q);
      });
      return new ResultObject(200, qList);
    } else {
      return new ResultObject(rows.statusCode, rows.value);
    }
  }

  // getAll
  public async getAll() {
    const data: any = [];
    return this.queryFunctions.query(this.queries.getQuery(QUESTION_TABLE, QUESTION_QUERIES.GET_ALL), data);
  }

  // getId
  public async getId(q: Question) {
    const data = [q.idType, q.name, q.category];
    return this.queryFunctions.query(this.queries.getQuery(QUESTION_TABLE, QUESTION_QUERIES.GET_ID), data);
  }

  // delete
  public async delete(idQuestion: number) {
    const data = [idQuestion];
    return this.queryFunctions.query(this.queries.getQuery(QUESTION_TABLE, QUESTION_QUERIES.DELETE), data);
  }
}
