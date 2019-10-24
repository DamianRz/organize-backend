import { Request, Response } from "express";
export default class UserController {
    private service;
    add(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
