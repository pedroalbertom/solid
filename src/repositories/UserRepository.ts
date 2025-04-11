import { UserEntity } from "../entities/UserEntity";

export interface IUserRepository {
    create(): Promise<UserEntity>,
    list(): Promise<UserEntity[]>,
    getById(): Promise<UserEntity>,
    getByEmail(): Promise<UserEntity>,
    update(): Promise<void>,
    delete(): Promise<void>,
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