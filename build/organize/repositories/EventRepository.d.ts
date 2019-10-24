import Event from '../models/Event';
export default class EventRepository {
    private queryFunctions;
    private queries;
    add(e: Event): Promise<import("../models/ResultObject").default>;
    getId(name: string, created: string): Promise<import("../models/ResultObject").default>;
    save(e: Event): Promise<import("../models/ResultObject").default>;
    delete(id: number): Promise<import("../models/ResultObject").default>;
    linkQuestionnaire(idEvent: number, idQuestionnaire: number, idOption: number): Promise<import("../models/ResultObject").default>;
}
