import { Request, Response } from 'express';
import { Socket } from 'socket.io';
import Logger from './Logger';
import ResultObject from '../models/ResultObject';
import ErrorList from '../errors/ErrorsList';

export default class Utils {
  private errorList = new ErrorList();

  public validateData(body: any, requiredObjects: any, socket: Socket) {
    let missingItem: any = [];
    let missingObject: any = [];

    if (JSON.stringify(body) != '{}') {
      requiredObjects.items.forEach((object: any) => {
        if (body[object.name]) {
          object.items.forEach((item: any) => {
            if (body[object.name][item] == '') {
              missingItem.push({ item: item, message: this.errorList.clientError.itemRequired });
            }
          });
        } else {
          missingObject.push({ object: object.name, message: this.errorList.clientError.objectRequired });
        }
      });

      if (missingObject.length == 0) {
        if (missingItem.length == 0) {
          return true;
        } else {
          socket.emit(requiredObjects.socketUrl, new ResultObject(400, { missingItem: missingItem }));
          return false;
        }
      } else {
        socket.emit(requiredObjects.socketUrl, new ResultObject(400, { missingObject: missingObject }));
        return false;
      }
    } else {
      socket.emit(requiredObjects.socketUrl, new ResultObject(400, this.errorList.clientError.nullBody));
      return false;
    }
  }

  // OLd
  validation(body: any, objects: any[], response: Response) {
    return false;
  }
}