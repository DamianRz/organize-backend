export default class Notification {
    /**
     * @description Prints highlighted message in console
     * @param text
     */
    static header(text: string): void;
    /**
     * @description Prints normal message in console
     * @param text
     */
    static info(text: string): void;
    /**
     * @description Prints success message in console
     * @param text
     */
    static success(text: string): void;
    /**\
     * @description Prints warning message in console
     * @param text String
     */
    static warn(text: string): void;
    /**
     * @description Prints error message in console
     * @param text  String
     */
    static error(text: string): void;
    /**
     * @description Prints fatal error in console
     * @param text String
     */
    static fatal(text: string): void;
    protected static getDate(): string;
}
