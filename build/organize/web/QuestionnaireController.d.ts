import { Request, Response } from "express";
export default class QuestionnaireController {
    private service;
    private utils;
    add(request: Request, response: Response): Promise<void>;
    save(request: Request, response: Response): Promise<void>;
    getByIdUser(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
