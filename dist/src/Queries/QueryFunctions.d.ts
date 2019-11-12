import ResultObject from '../models/ResultObject';
export default class QueryFunctions {
    action(queryData: any, data: any): Promise<ResultObject>;
    get(queryData: any, data: any): Promise<ResultObject>;
}
