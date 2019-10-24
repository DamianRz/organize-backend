import { Request, Response } from "express";
export default class UserController {
    private service;
    signIn(request: Request, response: Response): Promise<void>;
    signUp(request: Request, response: Response): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
