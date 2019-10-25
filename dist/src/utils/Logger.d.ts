export default class Notification {
    static header(text: string): void;
    static info(text: string): void;
    static success(text: string): void;
    static warn(text: string): void;
    static error(text: string): void;
    static fatal(text: string): void;
    protected static getDate(): string;
}
