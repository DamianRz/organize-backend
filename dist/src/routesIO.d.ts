import socketIo from 'socket.io';
export default class RoutesIO {
    private userSystem;
    private event;
    private joinEvent;
    private question;
    private questionnaire;
    private option;
    private timeLimit;
    defineRoutes(io: socketIo.Server): void;
}
