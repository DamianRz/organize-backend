import { Request, Response } from "express";
import { Socket } from 'socket.io';
export default class QuestionnaireController {
    private service;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    getByIdUser(data: any, socket: Socket): Promise<void>;
    getByIdEvent(data: any, socket: Socket): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
