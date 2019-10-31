import socketIo from 'socket.io';
import UserSystemController from './web/UserSystemController';
import EventController from './web/EventController';
import JoinEventController from './web/JoinEventController';
import QuestionController from './web/QuestionController';
import QuestionnaireController from './web/QuestionnaireController';
import OptionController from './web/OptionController';
import TimeLimitController from './web/TimeLimitController';

export default class RoutesIO {
  private userSystem: UserSystemController = new UserSystemController();
  private event: EventController = new EventController();
  private joinEvent: JoinEventController = new JoinEventController();
  private question: QuestionController = new QuestionController();
  private questionnaire: QuestionnaireController = new QuestionnaireController();
  private option: OptionController = new OptionController();
  private timeLimit: TimeLimitController = new TimeLimitController();

  public defineRoutes(io: socketIo.Server) {
    io.on('connection', (socket) => {

      // User
      socket.on('post:signIn', (data) => { this.userSystem.signIn(data, socket); } );
      socket.on('post:signUp', (data) => { this.userSystem.signUp(data, socket); } );

      // JoinEvents
      socket.on('get:joinEvents', (data) => { this.joinEvent.getJoinEvents(data, socket); } );

      // Questionnaire
      socket.on('get:questionnaireByEventId', (data) => { this.questionnaire.getByIdEvent(data, socket); } );
    });
  }
}
