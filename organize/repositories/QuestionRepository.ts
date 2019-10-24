import Question from '../models/Question';
import QuestionList from '../models/QuestionList';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../Queries/QueryFunctions';
import Queries from '../Queries/Queries';

export default class QuestionRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(q: Question) {
    const data = [q.idType, q.name, q.category];
    return this.queryFunctions.action(this.queries.getQuery('question', 'add'), data);
  }

  // save
  public async save(q: Question) {
    const data = [q.idType, q.name, q.category, q.id];
    return this.queryFunctions.action(this.queries.getQuery('question', 'save'), data);
  }

  // getByIdType
  public async getByIdType(idType: number) {
    const data = [idType];
    const rows = await this.queryFunctions.get(this.queries.getQuery('question', 'getByIdType'), data);
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

  // getId
  public async getId(q: Question) {
    const data = [q.idType, q.name, q.category];
    return this.queryFunctions.get(this.queries.getQuery('question', 'getId'), data);
  }

  // delete
  public async delete(idQuestion: number) {
    const data = [idQuestion];
    return this.queryFunctions.action(this.queries.getQuery('question', 'delete'), data);
  }
}
