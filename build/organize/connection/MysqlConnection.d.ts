export default class MysqlConnection {
    static mysqlConn: any;
    private static mysql;
    private static createConnection;
    static connect(app: any): Promise<void>;
}
