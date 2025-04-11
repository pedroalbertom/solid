import express from 'express'
import router from './routes/router'
import cors from "cors"
import connection from './database/sequelize'

const app = express()

await connection.authenticate();
app.use(express.json())
app.use(cors())
app.use("", router)

await connection.sync({ force: false })

app.listen(3000, () => {
    console.log("Servidor rodando localmente na porta 3000")
})