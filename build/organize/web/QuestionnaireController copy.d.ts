import { Request, Response } from "express";
export default class QuestionnaireController {
    private service;
    add(request: Request, response: Response): Promise<void>;
    addOption(request: Request, response: Response): Promise<void>;
    getByIdUser(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
