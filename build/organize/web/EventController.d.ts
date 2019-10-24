import { Request, Response } from 'express';
export default class UserController {
    private service;
    private joinEventService;
    private optionService;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
    linkQuestionnaire(request: Request, response: Response): Promise<void>;
}
