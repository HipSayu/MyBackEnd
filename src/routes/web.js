import express from 'express'
import homeController from "../controller/homeController"

const router = express.Router()
/**
 * 
 * @param {*} app express app
 * @returns 
 */


const initWebRoutes = (app) => {
     
    //path, handler
    router.get('/', homeController.handleHelloWord);
    router.get('/Account/Create', homeController.handleAccountCreatePage);
    router.get('/AccountList', homeController.handleAccountList);
    router.post('/Account/AccountCreate', homeController.handleCreateNewAccount)

    return app.use('/', router)
}
export default initWebRoutes;