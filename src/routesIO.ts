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

      // Event
      socket.on('post:event', (data) => { this.event.add(data, socket); } );
      socket.on('put:event', (data) => { this.event.save(data, socket); } );
      socket.on('delete:event', (data) => { this.event.delete(data, socket); } );
      
      socket.on('post:eventQuestionnaireOption', (data) => { this.event.linkQuestionnaire(data, socket); } );
      socket.on('delete:eventQuestionnaireOption', (data) => { this.event.removeLinkQuestionnaire(data, socket); } );

      // JoinEvents
      socket.on('get:joinEvents', (data) => { this.joinEvent.getJoinEvents(data, socket); } );

      // Questionnaire
      socket.on('post:questionnaire', (data) => { this.questionnaire.add(data, socket); } );
      socket.on('post:questionnaireFull', (data) => { this.questionnaire.addFull(data, socket); } );
      socket.on('get:questionnaireByEventId', (data) => { this.questionnaire.getByIdEvent(data, socket); } );
      socket.on('get:questionnaireByIdUser', (data) => { this.questionnaire.getByIdUser(data, socket); } );
    
      // Questions
      socket.on('get:defaultQuestions', (data) => { this.question.getAll(data, socket); } );
    });
  }
}
