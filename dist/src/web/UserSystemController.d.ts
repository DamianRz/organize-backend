import { Request, Response } from 'express';
import { Socket } from 'socket.io';
export default class UserSystemController {
    private errorList;
    private service;
    private utils;
    signIn(data: any, socket: Socket): Promise<void>;
    signUp(data: any, socket: Socket): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
