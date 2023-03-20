import express, {Express} from 'express'
import {Server} from 'node:http'
import { LoggerService } from './logger/logger.service';
import { UsersController } from './users/users.controller';

export class App {

    server: Server;
    app: Express;
    port: number;
    logger: LoggerService
    userController: UsersController

    constructor(logger: LoggerService, userController: UsersController){
        this.port = 8000
        this.app = express()
        this.logger = logger
        this.userController = userController
    }

    useRoutes(){
        this.app.use('users', this.userController.router)
    }

    async init(){
        this.useRoutes()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}