import MysqlConnection from '../connection/MysqlConnection';
import ResultObject from '../models/ResultObject';
import Logger from '../utils/Logger';

export default class QueryFunctions {
  // action = insert, delete, update
  public async action(query: any, data: any) {
    try {
      await new Promise((resolve, reject) => {
        MysqlConnection.mysqlConn.query(query.query, data, (err: any, result: any) => {
          if (!err) {
            resolve(result);
          } else {
            reject();
          }
        });
      }).catch((err) => {
        throw err;
      });
      return new ResultObject(200, 'sucess ' + query.action + ' in table' + query.table);
    } catch (ex) {
      return new ResultObject(403,
        { 'Error ': 'table ' + query.table + ' - action ' + query.action + ' :' + String(ex) });
    }
  }
  // get
  public async get(query: any, data: any) {
    try {
      const rows = await new Promise((resolve, reject) => {
        MysqlConnection.mysqlConn.query(query.query, data, (err: any, result: any) => {
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
        { 'Error ': 'table ' + query.table + ' - action ' + query.action + ' :' + String(ex) });
    }
  }
}
