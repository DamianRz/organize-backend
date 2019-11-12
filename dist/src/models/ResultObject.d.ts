declare class ResultObject {
    statusCode: number;
    value: any;
    constructor(statusCode: number, value: any);
    getJsonObject(): object;
}
export default ResultObject;
