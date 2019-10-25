import Option from '../models/Option';
import OptionList from '../models/OptionList';
import MysqlConnection from '../connection/MysqlConnection';
import ResultObject from '../models/ResultObject';
import QueryFunctions from '../Queries/QueryFunctions';
import Queries from '../Queries/Queries';

export default class JoinEventRepository {
  private queryFunctions: QueryFunctions = new QueryFunctions();
  private queries: Queries = new Queries();

  // add
  public async add(o: Option) {
    const data = [o.idUser, o.idQuestion, o.name, o.cost];
    return this.queryFunctions.action(this.queries.getQuery('option', 'add'), data);
  }

  // linkQuestionnaire
  public async linkQuestionnaire(idOption: number, idQuestionnaire: number) {
    const data = [idOption, idQuestionnaire];
    return this.queryFunctions.action(this.queries.getQuery('option', 'link'), data);
  }

  // save
  public async save(o: Option) {
    const data = [o.name, o.cost, o.idUser, o.idQuestion, o.id];
    return this.queryFunctions.action(this.queries.getQuery('option', 'save'), data);
  }

  // getByIdUser
  public async getByIdUser(idUser: number) {
    const data = [idUser];
    const rows = await this.queryFunctions.get(this.queries.getQuery('option', 'getByIdUser'), data);
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
    return await this.queryFunctions.get(this.queries.getQuery('option', 'getIdByIdQuestionnaire'), data);
  }

  // getId
  public async getId(o: Option) {
    const data = [o.idUser, o.idQuestion, o.name];
    return await this.queryFunctions.get(this.queries.getQuery('option', 'getId'), data);
  }

  // delete
  public async delete(idOption: number) {
    const data = [idOption];
    return await this.queryFunctions.action(this.queries.getQuery('option', 'delete'), data);
  }

  // deleteRelation
  public async deleteRelation(idOption: number) {
    const data = [idOption];
    return await this.queryFunctions.action(this.queries.getQuery('option', 'deleteRelation'), data);
  }
}
