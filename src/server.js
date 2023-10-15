import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config();

const app = express()
const PORT = process.env.PORT 
//config view engine
configViewEngine(app)

//init web Route
initWebRoutes(app)




app.listen(PORT, ()=> {
    console.log("http://localhost:1502")
})