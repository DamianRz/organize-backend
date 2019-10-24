import Event from "./Event";
export default class EventList {
    private _events;
    constructor();
    get(index: number): Event;
    set(index: number, event: Event): void;
    add(event: Event): void;
    length(): number;
}
