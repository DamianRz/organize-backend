import { Response } from 'express';
import { Socket } from 'socket.io';
export default class Utils {
    private errorList;
    validateData(body: any, requiredObjects: any, socket: Socket): boolean;
    validation(body: any, objects: any[], response: Response): boolean;
}
