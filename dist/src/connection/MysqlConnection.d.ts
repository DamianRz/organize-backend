export default class MysqlConnection {
    static mysqlConn: any;
    static mysql: any;
    static createConnection(): Promise<void>;
    static connect(app: any): Promise<void>;
}
