import * as express from 'express';
import * as cors from 'cors';
import logger from '../utils/logger'
import { getUser, addUser } from '../db/user';
import { addFinance, getAllFinances, getFinance, removeFinance, updateFinanceById } from '../db/finance';
import { authenticate } from '../services/auth/authentication';
import { addGrocery, getGrocery, removeGrocery, updateGroceryById, getAllGroceries } from '../db/grocery';

const MainServer =  () => {
    const PORT = 3001
    const HOST = "localhost"
    const app = express();
    
    app.use(express.json())
    app.use(express.urlencoded({extended: true}));
    app.use(cors())
   
    app.get('/user/:id',logger, getUser)
    app.get('/fin/:id',logger, getFinance)
    app.get('/fin', logger, getAllFinances)
    app.get('/grocery/:id', logger, getGrocery)
    app.get('/groceries', logger, getAllGroceries)
    app.get('oauth/redirect', logger, authenticate)


    app.post('/add-user', logger, addUser)
    app.post('/add-fin', logger, addFinance)
    app.post('/add-grocery', logger, addGrocery)

    app.delete('/fin/:id', logger, removeFinance)
    app.delete('/grocery/:id', logger, removeGrocery)

    app.put('/update-grocery/:id', logger, updateGroceryById)
    app.put('/update-fin/:id', logger, updateFinanceById)


    app.listen(PORT, () => {
        console.log("Server is up on ")
        console.log("\x1b[34m", `--> http://${HOST}:${PORT} <--`)
    })
}

export default MainServer