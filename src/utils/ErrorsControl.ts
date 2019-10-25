export default class ErrorsControl {

  private className: string;
  private method: string;
  private message: string;

  constructor(className: string, method: string, message: string) {
    this.className = className;
    this.method = method;
    this.message = message;
  }
}
