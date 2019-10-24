import { Request, Response } from 'express';
export default class JoinEventController {
    private service;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    setUserType(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
    getJoinEvents(request: Request, response: Response): Promise<void>;
    getJoinUsers(request: Request, response: Response): Promise<void>;
}
