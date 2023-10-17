import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
import connection from './config/connectDB'
require('dotenv').config();

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 1611
//config view engine
configViewEngine(app)

//tetconnection
connection();

//init web Route
initWebRoutes(app)




app.listen(PORT, ()=> {
    console.log("http://localhost:1502")
})