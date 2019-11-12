import { Request, Response } from 'express';
import { Socket } from 'socket.io';
export default class JoinEventController {
    private service;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    setUserType(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
    getJoinEvents(data: any, socket: Socket): Promise<void>;
    getJoinUsers(request: Request, response: Response): Promise<void>;
}
