import { UserEntity } from "../entities/UserEntity";
import { UserModel } from "../models/UserModel";

export interface IUserRepository {
    create(user: UserEntity): Promise<UserEntity>;
    list(): Promise<UserEntity[]>;
    getById(id: string): Promise<UserEntity>;
    getByEmail(email: string): Promise<UserEntity>;
    update(user: UserEntity): Promise<void>;
    delete(id: string): Promise<void>;
}

export class UserRepository implements IUserRepository {
    constructor(private userModel: typeof UserModel) {}

    async create(user: UserEntity): Promise<UserEntity> {
        const createdUser = await this.userModel.create({
            id: user.getId(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
        });

        return UserEntity.create(createdUser.toJSON());
    }

    async list(): Promise<UserEntity[]> {
        const users = await this.userModel.findAll();
        return users.map((user) => UserEntity.create(user.toJSON()));
    }

    async getById(id: string): Promise<UserEntity> {
        const user = await this.userModel.findByPk(id);
        if (!user) throw new Error("Usuário não encontrado.");

        return UserEntity.create(user.toJSON());
    }

    async getByEmail(email: string): Promise<UserEntity> {
        const user = await this.userModel.findOne({ where: { email } });
        if (!user) throw new Error("Usuário não encontrado.");

        return UserEntity.create(user.toJSON());
    }

    async update(user: UserEntity): Promise<void> {
        const [updatedRows] = await this.userModel.update(
            {
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
                email: user.getEmail(),
            },
            { where: { id: user.getId() } }
        );

        if (!updatedRows) throw new Error("Usuário não encontrado para atualização.");
    }

    async delete(id: string): Promise<void> {
        const deletedRows = await this.userModel.destroy({ where: { id } });

        if (!deletedRows) throw new Error("Usuário não encontrado para exclusão.");
    }
}