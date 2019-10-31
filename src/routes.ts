import { Request, Response, Router } from 'express';
import UserSystemController from './web/UserSystemController';
import EventController from './web/EventController';
import JoinEventController from './web/JoinEventController';
import QuestionController from './web/QuestionController';
import QuestionnaireController from './web/QuestionnaireController';
import OptionController from './web/OptionController';
import TimeLimitController from './web/TimeLimitController';

const router = Router();
const userSystem: UserSystemController = new UserSystemController();
const event: EventController = new EventController();
const joinEvent: JoinEventController = new JoinEventController();
const question: QuestionController = new QuestionController();
const questionnaire: QuestionnaireController = new QuestionnaireController();
const option: OptionController = new OptionController();
const timeLimit: TimeLimitController = new TimeLimitController();

router.route('/users')
  .put((req: Request, res: Response) => userSystem.save(req, res))
  .delete((req: Request, res: Response) => userSystem.delete(req, res));

router.route('/events')
  .put((req: Request, res: Response) => event.save(req, res))
  .delete((req: Request, res: Response) => event.delete(req, res));

router.route('/events/inviteds')
  .post((req: Request, res: Response) => joinEvent.add(req, res))
  .put((req: Request, res: Response) => joinEvent.setUserType(req, res))
  .delete((req: Request, res: Response) => joinEvent.delete(req, res));

router.route('/questionnaires')
  .get((req: Request, res: Response) => questionnaire.getByIdUser(req, res))
  .post((req: Request, res: Response) => questionnaire.add(req, res))
  .put((req: Request, res: Response) => questionnaire.save(req, res))
  .delete((req: Request, res: Response) => questionnaire.delete(req, res));

router.route('/options')
  .get((req: Request, res: Response) => option.getByIdUser(req, res))
  .post((req: Request, res: Response) => option.add(req, res))
  .put((req: Request, res: Response) => option.save(req, res))
  .delete((req: Request, res: Response) => option.delete(req, res));

router.route('/questions')
  .get((req: Request, res: Response) => question.getByIdType(req, res))
  .post((req: Request, res: Response) => question.add(req, res))
  .put((req: Request, res: Response) => question.save(req, res))
  .delete((req: Request, res: Response) => question.delete(req, res));

router.route('/questions/timelimit')
  .post((req: Request, res: Response) => timeLimit.add(req, res))
  .put((req: Request, res: Response) => timeLimit.setMaxTime(req, res))
  .delete((req: Request, res: Response) => timeLimit.delete(req, res));

router
  // .get('/join/events', (req: Request, res: Response) => joinEvent.getJoinEvents(req, res))
  .get('/join/users', (req: Request, res: Response) => joinEvent.getJoinUsers(req, res))
  // .post('/signin', (req: Request, res: Response) => userSystem.signIn(req, res))
  // .post('/signup', (req: Request, res: Response) => userSystem.signUp(req, res))
  .post('/questionnaires/options', (req: Request, res: Response) => option.linkQuestionnaire(req, res))
  .post('/events/questionnaires',
    (req: Request, res: Response) => event.linkQuestionnaire(req, res));

export default router;
