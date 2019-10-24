import socketIo from 'socket.io';
import http from 'http';

import MysqlConnection from './connection/MysqlConnection';
import Routes from './routes';
import Logger from './utils/Logger';
import Express, { Application } from 'express';
import cors from 'cors';

const app: Application = Express();
const server = http.createServer(app);
const io = socketIo(server);

async function init() {
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));
  app.use(cors({
    origin: 'http://localhost:8080'
  }));
  app.use('/api', Routes);
  try {
    MysqlConnection.connect(server);
  } catch (ex) {
    Logger.fatal('Error in App -' + ex);
  }
}

io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('welcome', 'welcome to socket.io');
});

init();
