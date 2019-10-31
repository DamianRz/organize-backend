import socketIo from 'socket.io';
import http from 'http';
import RoutesIo from './routesIO';

import MysqlConnection from './connection/MysqlConnection';
import Routes from './routes';
import Logger from './utils/Logger';
import Express, { Application } from 'express';

import { config } from 'dotenv';
config(); // load the .env variables

const routesIo = new RoutesIo();
const app: Application = Express();
const server = http.createServer(app);
const io = socketIo(server);

async function init() {
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));
  app.use('/api', Routes);
  try {
    MysqlConnection.connect(server);
    // define the routes socket.io
    routesIo.defineRoutes(io);
  } catch (ex) {
    Logger.fatal('Error in App -' + ex);
  }
}

init();
