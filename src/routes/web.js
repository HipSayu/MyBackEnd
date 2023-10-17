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
    router.post('/Account/Create', homeController.handleCreateNewAccount);
    router.post('/Account/Delete/:id', homeController.handleDeleteAccount);
    router.get('/Account/Update/:id', homeController.handleUpdateAccountPage);
    router.post('/Account/Update/', homeController.handleUpdateAccount);
    return app.use('/', router)
}
export default initWebRoutes;