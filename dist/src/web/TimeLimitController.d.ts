import { Request, Response } from 'express';
export default class OptionController {
    private service;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    setMaxTime(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
    getByIdUser(request: Request, response: Response): Promise<void>;
}
