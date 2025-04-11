import { UserEntity } from "../entities/UserEntity";
import { IUserRepository } from "../repositories/UserRepository";

interface UpdateUserDTO {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserService {
    create(firstName: string, lastName: string, email: string): Promise<UserEntity>
    list(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity> | null
    getByEmail(email: string): Promise<UserEntity>
    update(data: UpdateUserDTO): Promise<void>
    delete(id: string): Promise<void>
}

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) {}

    async create(firstName: string, lastName: string, email: string): Promise<UserEntity> {
        const props = { firstName, lastName, email }
        const user = UserEntity.create(props)
        return await this.userRepository.create(user)
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
        if (!existingUser) throw new Error("Usuário não encontrado.");
        
        existingUser.props.firstName = data.firstName;
        existingUser.props.lastName = data.lastName;
        existingUser.props.email = data.email;
    
        await this.userRepository.update(existingUser);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id)
    }

}