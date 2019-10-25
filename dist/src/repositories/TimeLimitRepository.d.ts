import TimeLimit from '../models/TimeLimit';
export default class JoinEventRepository {
    private queryFunctions;
    private queries;
    add(t: TimeLimit): Promise<import("../models/ResultObject").default>;
    setMaxTime(t: TimeLimit): Promise<import("../models/ResultObject").default>;
    get(t: TimeLimit): Promise<import("../models/ResultObject").default>;
    delete(t: TimeLimit): Promise<import("../models/ResultObject").default>;
}
