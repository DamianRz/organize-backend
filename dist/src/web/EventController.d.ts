import { Request, Response } from 'express';
import { Socket } from 'socket.io';
export default class UserController {
    private service;
    private joinEventService;
    private optionService;
    private utils;
    getJoinEvents(data: any, socket: Socket): Promise<void>;
    add(data: any, socket: Socket): Promise<void>;
    linkQuestionnaire(data: any, socket: Socket): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
