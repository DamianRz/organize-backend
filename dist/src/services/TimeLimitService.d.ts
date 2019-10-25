import ResultObject from '../models/ResultObject';
export default class TimeLimitService {
    private repository;
    add(tData: any): Promise<ResultObject>;
    setMaxTime(tData: any): Promise<ResultObject>;
    delete(tData: any): Promise<ResultObject>;
    get(tData: any): Promise<ResultObject>;
}
