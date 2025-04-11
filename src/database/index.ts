import connection from "./sequelize";

export default async function dbConnect() {
    try {
        await connection.authenticate();
        console.log("Conexão com o banco de dados bem-sucedida!");
        await connection.sync();
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1);
    }
}