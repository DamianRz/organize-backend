import UserSystem from '../models/UserSystem';
import UserSystemRepository from '../repositories/UserSystemRepository';
import bcrypt from 'bcryptjs';
import ResultObject from '../models/ResultObject';


export default class UserSystemService {
  private repository = new UserSystemRepository();

  // signIn
  public async signIn(email: string, password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return await this.repository.get(email, hashPassword);
  }

  //  signUp
  public async signUp(userData: any) {
    try {
      const userSystem: UserSystem = new UserSystem();
      userSystem.username = userData.username;
      userSystem.email = userData.email;
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(userData.password, salt);
      userSystem.password = hashPassword;
      const existsEmail: ResultObject = await this.repository.existsEmail(userSystem.email);
      if (existsEmail.statusCode === 200) {
        if (!existsEmail.value) {
          const addNewUserSystem: ResultObject = await this.repository.add(userSystem);
          if (addNewUserSystem.statusCode === 200) {
            return await this.repository.getIdByEmail(userSystem.email);
          } else {
            return addNewUserSystem; // send error
          }
        } else {
          return new ResultObject(403, { error: 'email exists' });
        }
      } else {
        return existsEmail; // send error
      }
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // save
  public async save(userData: any) {
    try {
      const userSystem: UserSystem = new UserSystem();
      userSystem.id = userData.id;
      userSystem.username = userData.username;
      userSystem.email = userData.email;
      userSystem.password = userData.password;
      return await this.repository.save(userSystem);
    } catch (ex) {
      return new ResultObject(400, { error: String(ex) });
    }
  }

  // delete
  public async delete(id: number) {
    return await this.repository.delete(id);
  }
}
