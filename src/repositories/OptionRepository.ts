import Option from '../models/Option';
import OptionList from '../models/OptionList';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../sql/queries/QueryFunctions';
import Queries, { OPTION_TABLE, OPTION_QUERIES } from '../sql/queries/Queries';

export default class JoinEventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(o: Option) {
    const data = [o.idUser, o.idQuestion, o.name, o.cost];
    return this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.ADD), data);
  }

  // linkQuestionnaire
  public async linkQuestionnaire(idOption: number, idQuestionnaire: number) {
    const data = [idOption, idQuestionnaire];
    return this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.LINK), data);
  }

  // save
  public async save(o: Option) {
    const data = [o.name, o.cost, o.idUser, o.idQuestion, o.id];
    return this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.SAVE), data);
  }

  // getByIdUser
  public async getByIdUser(idUser: number) {
    const data = [idUser];
    const rows = await this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.GET_BY_ID_USER), data);
    if (rows.statusCode === 200) {
      const oList: OptionList = new OptionList();
      rows.value.forEach((item: any) => {
        const option: Option = new Option();
        Object.assign(option, item);
        oList.add(option);
      });
      return new ResultObject(200, oList);
    } else {
      return new ResultObject(rows.statusCode, rows);
    }
  }

  // getIdByIdQuestionnaire
  public async getIdByIdQuestionnaire(idQuestionnaire: number) {
    const data = [idQuestionnaire];
    return await this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.GET_ID_BY_ID_QUESTIONNAIRE), data);
  }

  // getId
  public async getId(o: Option) {
    const data = [o.idUser, o.idQuestion, o.name];
    return await this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.GET_ID), data);
  }

  // delete
  public async delete(idOption: number) {
    const data = [idOption];
    return await this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.DELETE), data);
  }

  // deleteRelation
  public async deleteRelation(idOption: number) {
    const data = [idOption];
    return await this.queryFunctions.query(this.queries.getQuery(OPTION_TABLE, OPTION_QUERIES.DELETE_RELATION), data);
  }
}
