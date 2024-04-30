// Dependencias
import express from "express"
import cors from 'cors'


// Modulos
import routerApicultors from "./routes/apicultor_route.mjs";


// Middlewares
const app = express()
app.use(express.json());
app.use(cors())

// Puerto
const port = 3001


// Uso de rutas
app.use('/api',routerApicultors);

// Ruta por default
app.use('/api',(req,res)=>{
    res.status(404).json({error:'Route Not Found'})
})

app.listen(port,()=>{
    console.log(`Server http://localhost:${port}`)
})