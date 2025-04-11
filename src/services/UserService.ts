import { CreateUserDTO, UpdateUserDTO } from "../dtos/UserDTO";
import { UserEntity } from "../entities/UserEntity";
import { IUserRepository } from "../repositories/UserRepository";

export interface IUserService {
    create(data: CreateUserDTO): Promise<UserEntity>
    list(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity> | null
    getByEmail(email: string): Promise<UserEntity>
    update(data: UpdateUserDTO): Promise<void>
    delete(id: string): Promise<void>
}

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async create(data: CreateUserDTO): Promise<UserEntity> {
        const user = UserEntity.create({
            ...data,
            id: undefined,
        });
        return await this.userRepository.create(user);
    }

    async list(): Promise<UserEntity[]> {
        return await this.userRepository.list()
    }

    async getById(id: string): Promise<UserEntity> {
        return await this.userRepository.getById(id)
    }

    async getByEmail(email: string): Promise<UserEntity> {
        return await this.userRepository.getByEmail(email)
    }

    async update(data: UpdateUserDTO): Promise<void> {
        const existingUser = await this.userRepository.getById(data.id);
        if (!existingUser) throw new Error("Usuário não encontrado!");

        if (data.email !== existingUser.getEmail()) {
            const userWithEmail = await this.userRepository.getByEmail(data.email)
                .catch(() => null);
            if (userWithEmail) throw new Error("Email já está em uso");
        }

        const updatedUser = UserEntity.create({
            ...existingUser.props,
            ...data
        });

        await this.userRepository.update(updatedUser);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id)
    }

}