import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';
import { UserModel } from '../models/UserModel';

const userRouter = Router();

// Instanciando as dependências
const userRepository = new UserRepository(UserModel);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Rotas
userRouter.post('/', userController.create.bind(userController));
userRouter.get('/', userController.list.bind(userController));
userRouter.get('/:id', userController.listOne.bind(userController));
userRouter.put('/:id', userController.update.bind(userController));
userRouter.delete('/:id', userController.delete.bind(userController));

export { userRouter };