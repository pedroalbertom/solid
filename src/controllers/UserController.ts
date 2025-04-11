import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    constructor(private userService: UserService) {}

    private handleError(res: Response, error: any): Response {
        return res.status(400).json({ error: error.message });
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.userService.create(req.body);
            return res.status(201).json(user);
        } catch (error: any) {
            return this.handleError(res, error);
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.list();
            return res.status(200).json(users);
        } catch (error: any) {
            return this.handleError(res, error);
        }
    }

    async listOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            const user = await this.userService.getById(id);
            return res.status(200).json(user);
        } catch (error: any) {
            return this.handleError(res, error);
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            await this.userService.update(req.body);
            return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
        } catch (error: any) {
            return this.handleError(res, error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            await this.userService.delete(id);
            return res.status(200).json({ message: "Usuário deletado com sucesso!" });
        } catch (error: any) {
            return this.handleError(res, error);
        }
    }
}