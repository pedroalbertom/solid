import { DataTypes, Model, Sequelize } from "sequelize";

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

export const initUserModel = (sequelize: Sequelize): typeof UserModel => {
  UserModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: true,
    }
  );

  return UserModel;
};