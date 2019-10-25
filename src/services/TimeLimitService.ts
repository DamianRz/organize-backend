import Option from '../models/Option';
import TimeLimitRepository from '../repositories/TimeLimitRepository';
import ResultObject from '../models/ResultObject';
import TimeLimit from '../models/TimeLimit';

export default class TimeLimitService {
  private repository = new TimeLimitRepository();

  // add
  public async add(tData: any) {
    try {
      const timeLimit: TimeLimit = new TimeLimit();
      timeLimit.idEvent = timeLimit.idEvent;
      timeLimit.idQuestion = timeLimit.idQuestion;
      timeLimit.maxTime = timeLimit.maxTime;
      return await this.repository.add(timeLimit);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // setMaxTime
  public async setMaxTime(tData: any) {
    try {
      const timeLimit: TimeLimit = new TimeLimit();
      timeLimit.idEvent = timeLimit.idEvent;
      timeLimit.idQuestion = timeLimit.idQuestion;
      timeLimit.maxTime = timeLimit.maxTime;
      return await this.repository.setMaxTime(timeLimit);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete
  public async delete(tData: any) {
    try {
      const timeLimit: TimeLimit = new TimeLimit();
      timeLimit.idEvent = timeLimit.idEvent;
      timeLimit.idQuestion = timeLimit.idQuestion;
      timeLimit.maxTime = timeLimit.maxTime;
      return await this.repository.delete(timeLimit);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // get
  public async get(tData: any) {
    try {
      const timeLimit: TimeLimit = new TimeLimit();
      timeLimit.idEvent = timeLimit.idEvent;
      timeLimit.idQuestion = timeLimit.idQuestion;
      timeLimit.maxTime = timeLimit.maxTime;
      return await this.repository.get(timeLimit);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }
}
