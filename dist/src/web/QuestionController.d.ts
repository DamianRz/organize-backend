import { Request, Response } from 'express';
export default class QuestionController {
    private service;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    getByIdType(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
