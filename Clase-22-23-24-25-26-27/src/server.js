import ENVIROMENT from "./config/enviroment.config.js";
import express from "express";
import mongoose from './db/config.js'
import cors from 'cors'
import productRouter from "./router/produts.router.js";
import authRouter from "./router/auth.router.js";
import statusRouter from "./router/status.router.js";



const app = express();
const PORT = ENVIROMENT.PORT || 3000

app.use(cors())
app.use(express.json())


app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)



app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})