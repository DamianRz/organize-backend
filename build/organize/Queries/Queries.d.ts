export default class Queries {
    private table;
    private action;
    private query;
    private queries;
    constructor();
    getQuery(tableName: string, actionQuery: string): {
        table: string;
        action: string;
        query: any;
    } | null;
}
