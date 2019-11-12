import JoinEvent from '../models/JoinEvent';
import JoinEventRepository from '../repositories/JoinEventRepository';
import ResultObject from '../models/ResultObject';

export default class JoinEventService {
  private repository = new JoinEventRepository();

  // add
  public async add(jeData: any, idEvent: number) {
    console.log('je ', idEvent)
    try {
      const joinEvent = new JoinEvent(idEvent, jeData.idUser, jeData.idType);
      return await this.repository.add(joinEvent);
    } catch (ex) {
      return new ResultObject(400, {error: String(ex) });
    }
  }

  // setUserType
  public async setUserType(jeData: any) {
    try {
      const joinEvent = new JoinEvent(jeData.idEvent, jeData.idUser, jeData.idType);
      return await this.repository.setUserType(joinEvent);
    } catch (ex) {
      return new ResultObject(400, {error: String(ex) });
    }
  }

  // delete
  public async delete(idEvent: number) {
    try {
      return await this.repository.delete(idEvent);
    } catch (ex) {
      return new ResultObject(400, {error: String(ex) });
    }
  }

  // getJoinEvents
  public async getJoinEvents(jeData: any) {
    try {
      const joinEvent = new JoinEvent(-1, jeData.idUser, jeData.idType);
      return await this.repository.getJoinEvents(joinEvent);
    } catch (ex) {
      return new ResultObject(400, {error: String(ex) });
    }
  }

    // getJoinUsers
    public async getJoinUsers(jeData: any) {
      try {
        const joinEvent = new JoinEvent(jeData.idEvent, -1, jeData.idType);
        return await this.repository.getJoinUsers(joinEvent);
      } catch (ex) {
        return new ResultObject(400, {error: String(ex) });
      }
    }
}
