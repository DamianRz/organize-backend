import Express from 'express';
import mysqlConfig from '../config/MysqlConfig';
import Logger from '../../utils/Logger';

export default class MysqlConnection {
    public static mysqlConn: any;
    public static mysql = require('mysql');

    public static async createConnection() {
        this.mysqlConn = this.mysql.createConnection({
            host: mysqlConfig.host,
            user: mysqlConfig.user,
            password: mysqlConfig.password,
            database: mysqlConfig.database,
        });
    }

    public static async connect(app: any) {
        try {
            await this.createConnection();
            // Starting app
            app.listen(mysqlConfig.listenPort, () => {
                Logger.success('')
                Logger.success('+++++++++++++++++++++++++');
                Logger.success('Organize Backend is ready');
                Logger.success('+++++++++++++++++++++++++');
                Logger.success('')
            });
        } catch (error) {
            Logger.fatal(error);
            Logger.warn('Retrying in 3 seconds...');
            setTimeout(async () => {
                await this.connect(app);
            }, 3000);
        }
    }
}
