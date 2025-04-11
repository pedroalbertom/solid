import { UserEntity } from "../entities/UserEntity";
import { UserRepository } from "../repositories/UserRepository";

export interface IUserService {
    create(firstName: string, lastName: string, email: string): Promise<UserEntity>
    list(): Promise<UserEntity[]>
    getById(id: string): Promise<UserEntity> | null
    getByEmail(email: string): Promise<UserEntity>
    update(userEntity: UserEntity): Promise<void>
    delete(userEntity: UserEntity): Promise<void>
}

export class UserService implements IUserService {
    private constructor(private userRepository: UserRepository) { }

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
        return await this.userRepository.getById(email)
    }
    async update(userEntity: UserEntity): Promise<void> {
        await this.userRepository.update(userEntity)
    }
    async delete(userEntity: UserEntity): Promise<void> {
        await this.userRepository.delete(userEntity)
    }

}