import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize(process.env.DB_NAME || "solid", process.env.DB_USER || "root", process.env.DB_PASS || "root", {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    timezone: "-03:00",
    logging: false,
    port: 3306,
    define: {
        createdAt: false,
        updatedAt: false
    }
});

export default connection;