import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 1611
//config view engine
configViewEngine(app)

//init web Route
initWebRoutes(app)




app.listen(PORT, ()=> {
    console.log("http://localhost:1502")
})