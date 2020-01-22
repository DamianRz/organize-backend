import MysqlConnection from '../connection/MysqlConnection';
import ResultObject from '../../models/ResultObject';

export default class QueryFunctions {

  async query(queryData: any, data: any[]) {
    console.log('')
    console.log('')
    console.log('.START QUERY. ' + queryData.action + ' of table ' + queryData.table)
    let query: string = queryData.query;
    let reader: string = '';
    let index: number = 0;
    for (let i = 0; i < queryData.query.length; i++) {
      if (query[i] === '?') {
        switch (typeof data[index]) {
          case 'number':
          case 'boolean':
            reader += data[index];
            break;
          case 'string':
            reader += `'${data[index]}'`;
            break;
        }
        index++;
      } else {
        reader += queryData.query[i]
      }
    }
    console.log(reader)
    console.log(data)
    console.log('total of items in data: ', data.length)
    console.log('total of ? in query: ', index)
    console.log('END_QUERY')

    try {
      let result: any = await new Promise((resolve, reject) => {
        MysqlConnection
          .mysqlConn.query(queryData.query, data, (err: any | null, result: any, fieldPacket: any[]) => {
            if (!err) {
              resolve(new ResultObject(200, result))
            } else {
              reject(new ResultObject(403, err))
            }
          });
      }).catch((err) => {
        throw err;
      });
      return new ResultObject(result.statusCode, result.value);
    } catch (error) {
      return error
    }
  }
}
