import { Request, Response } from 'express';
export default class UserSystemController {
    private service;
    private utils;
    signIn(request: Request, response: Response): Promise<void>;
    signUp(request: Request, response: Response): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
