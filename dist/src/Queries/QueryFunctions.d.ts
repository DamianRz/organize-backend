import ResultObject from '../models/ResultObject';
export default class QueryFunctions {
    action(query: any, data: any): Promise<ResultObject>;
    get(query: any, data: any): Promise<ResultObject>;
}
