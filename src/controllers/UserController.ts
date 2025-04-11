import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    constructor(private userService: UserService) {
        this.userService = userService;
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { firstName, lastName, email } = req.body;
            const user = await this.userService.create(firstName, lastName, email);
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.list();
            return res.status(200).json(users);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async listOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id
            const user = await this.userService.getById(id);
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id, firstName, lastName, email } = req.body;
            await this.userService.update({ id, firstName, lastName, email });
            return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id
            await this.userService.delete(id);
            return res.status(200);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}