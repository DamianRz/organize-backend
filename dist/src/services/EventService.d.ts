import ResultObject from '../models/ResultObject';
export default class EventService {
    private repository;
    private participantService;
    add(eventData: any): Promise<ResultObject>;
    save(eventData: any): Promise<ResultObject>;
    delete(id: number): Promise<ResultObject>;
    linkQuestionnaire(idEvent: number, idQuestionnaire: number, options: any): Promise<ResultObject>;
}
