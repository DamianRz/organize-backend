import MysqlConnection from '../connection/MysqlConnection';
import ResultObject from '../models/ResultObject';
import Logger from '../utils/Logger';

export default class QueryFunctions {

  // action = insert, delete, update
  public async action(queryData: any, data: any) {
    try {
      await new Promise((resolve, reject) => {
        MysqlConnection.mysqlConn.query(queryData.query, data, (err: any, result: any) => {
          if (!err) {
            resolve(result);
          } else {
            reject();
          }
        });
      }).catch((err) => {
        throw err;
      });
      return new ResultObject(200, 'sucess ' + queryData.action + ' in table' + queryData.table);
    } catch (ex) {
      return new ResultObject(403,
        { 'Error ': 'table ' + queryData.table + ' - action ' + queryData.action + ' :' + String(ex) });
    }
  }

  // get
  public async get(queryData: any, data: any) {
    try {
      const rows = await new Promise((resolve, reject) => {
        MysqlConnection.mysqlConn.query(queryData.query, data, (err: any, result: any) => {
          if (!err) {
            resolve(result);
          } else {
            reject();
          }
        });
      }).catch((err) => {
        throw err;
      });
      return new ResultObject(200, rows);
    } catch (ex) {
      return new ResultObject(403,
        { 'Error ': 'table ' + queryData.table + ' - action ' + queryData.action + ' :' + String(ex) });
    }
  }
}
