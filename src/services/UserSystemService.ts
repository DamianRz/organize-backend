import UserSystem from '../models/UserSystem';
import UserSystemRepository from '../repositories/UserSystemRepository';
import bcrypt from 'bcryptjs';
import ResultObject from '../models/ResultObject';
import ErrorsList from '../errors/ErrorsList';

export default class UserSystemService {
  private repository = new UserSystemRepository();
  private errorsList = new ErrorsList();

  // signIn
  public async signIn(email: string, password: string) {
    const existsUser = await this.repository.get(email);
    if (existsUser.statusCode === 200) {
      if (existsUser.value[0]) {
        let comparePassword = await bcrypt.compare(password, existsUser.value[0].password)
        if (comparePassword) {

          const getToken = await this.generateToken(
            { id: existsUser.value[0].id, username: existsUser.value[0].username });

            console.log(existsUser.value[0].username)

          // return data user in the token
          return new ResultObject(200,
            { id: existsUser.value[0].id, username: existsUser.value[0].username, token: getToken.value });
        } else {
          return new ResultObject(401, 'incorrect password');
        }
        return existsUser;
      } else {
        return new ResultObject(401, 'user do not exists');
      }
    } else {
      console.log('get user by email error')
      return existsUser //error
    }
  }

  //  signUp
  public async signUp(userData: any) {
    console.log('accede service')
    try {
      const userSystem: UserSystem = new UserSystem();
      userSystem.username = userData.username;
      userSystem.email = userData.email;

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(userData.passwd, salt);
      userSystem.password = hashPassword;

      console.log(userSystem)
      const existsEmail: ResultObject = await this.repository.existsEmail(userSystem.email);
      console.log('existe email : ', existsEmail)
      
      if (existsEmail.statusCode === 200) {
        if (!existsEmail.value) {
          const addNewUserSystem: ResultObject = await this.repository.add(userSystem);
          console.log('add new user : ', addNewUserSystem)
          if (addNewUserSystem.statusCode === 200) {
            const getNewUserId = await this.repository.getIdByEmail(userSystem.email);
            console.log('get new user email : ', getNewUserId)
            if (getNewUserId.statusCode === 200) {
              const getToken = await this.generateToken({ id: getNewUserId.value[0].id });
              // return id of the new user and token
              return new ResultObject(200, {id: getNewUserId.value[0].id, token: getToken.value });
            } else {
              return getNewUserId; // send error 
            }
          } else {
            return addNewUserSystem; // send error
          }
        } else {
          return new ResultObject(403, { error: this.errorsList.clientError.emailExists });
        }
      } else {
        return existsEmail; // send error
      }
    } catch (ex) {
      console.log('Exception ',ex)
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

  public async generateToken(data: any) {
    const secret = process.env.SECRET || 'secret';
    const jwt = require('jsonwebtoken');
    try {
      const token = jwt.sign(
        { data }, secret, { expiresIn: 60 * 60 });
      return { statusCode: 200, value: token };
    } catch (error) {
      return { statusCode: 403, value: error };
    }
  }
}
