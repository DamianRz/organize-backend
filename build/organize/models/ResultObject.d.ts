declare class ResultObject {
    statusCode: number;
    value: any;
    constructor(statusCode: number, value: any);
    getJsonObject(): Object;
}
export default ResultObject;
