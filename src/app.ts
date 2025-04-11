import express from 'express'
import router from './routes/router'
import cors from "cors"
import dbConnect from './database'

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", router);

await dbConnect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando localmente na porta ${PORT}`);
});