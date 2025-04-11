import { UserEntity } from "../entities/UserEntity";

export interface IUserRepository {
    create(user: UserEntity): Promise<UserEntity>,
    list(): Promise<UserEntity[]>,
    getById(id: string): Promise<UserEntity>,
    getByEmail(id: string): Promise<UserEntity>,
    update(user: UserEntity): Promise<void>,
    delete(id: string): Promise<void>,
}

export class UserRepository implements IUserRepository {
    create(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    getByEmail(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}