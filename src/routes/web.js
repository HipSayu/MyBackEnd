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
    router.get('/Account/List', homeController.handleAccountList);
    router.post('/Account/List', homeController.handleCreateNewAccount)
    router.post('/Account/Delete/:username', homeController.handleDeleteAccount)
    return app.use('/', router)
}
export default initWebRoutes;