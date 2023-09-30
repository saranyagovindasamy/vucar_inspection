import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import userController from './controllers/userController.js'
import carController from './controllers/carController.js'
import inspectionController from './controllers/inspectionController.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended : true }));

server.use('/register',userController.Register);
server.use('/login',userController.Login);
server.use('/new-car',carController.Register);
server.use('/cars',carController.getList);
server.use('/new/inspection',inspectionController.Register);

const port=8000;
server.listen(port,()=>{
    console.log("server starts", port)
})

