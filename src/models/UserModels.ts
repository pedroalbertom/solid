import { DataTypes, Model } from "sequelize";
import connection from "../database/sequelize";

export interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class UserModel extends Model<UserAttributes> implements UserAttributes {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}
UserModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'O campo "firstName" não pode ser vazio!' },
          len: {
            args: [2, 50],
            msg: 'O campo "firstName" deve ter entre 2 e 50 caracteres.',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'O campo "lastName" não pode ser vazio!' },
          len: {
            args: [2, 50],
            msg: 'O campo "lastName" deve ter entre 2 e 50 caracteres.',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: 'O campo "email" não pode ser vazio!' },
          isEmail: { msg: 'O campo "email" deve ser um email válido.' },
        },
      },
    },
    {
      sequelize: connection,
      tableName: "users",
      timestamps: true,
    }
  );