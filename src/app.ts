import socketIo from 'socket.io';
import http from 'http';

import MysqlConnection from './connection/MysqlConnection';
import Routes from './routes';
import Logger from './utils/Logger';
import Express, { Application } from 'express';
import cors from 'cors';

import express_gq from 'express-graphql';
import { buildSchema } from 'graphql';

const app: Application = Express();
const server = http.createServer(app);
const io = socketIo(server);

let events = [
    {
      id: 1,
      name: 'event test',
    },
    {
      id: 2,
      name: 'event test',
    },
  ];


const schema = buildSchema(`
  type Query {
    event(id: Int!): Event
    events(name: String!): [Event]
  }

  type Event {
    id: Int
    name: String
  }
`);

let getEvent = (args: any) => {
  let id = args.id;
  return events.filter((e: any) => {
    return e.id === id;
  })[0];
};

let getEvents = (args: any) => {
  let name = args.name;
  return events.filter((e: any) => {
    return e.name === name;
  });
};

const root = {
  event: getEvent,
  events: getEvents,
};

app.use('/graphql', express_gq({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



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
