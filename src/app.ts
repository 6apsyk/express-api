import express, {Express} from 'express'
import {Server} from 'node:http'
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './logger/logger.service';
import { ILogger } from './logger/logger.service.interface';
import { UsersController } from './users/users.controller';

export class App {

    server: Server;
    app: Express;
    port: number;
    logger: ILogger;
    userController: UsersController;
    exeptionFilter: ExeptionFilter;

    constructor(logger: ILogger, userController: UsersController, exeptionFilter: ExeptionFilter){
        this.port = 8000
        this.app = express()
        this.logger = logger
        this.userController = userController
        this.exeptionFilter = exeptionFilter
    }

    useRoutes(){
        this.app.use('/users', this.userController.router)
    }

    useExeptionFilter(){
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

    async init(){
        this.useRoutes()
        this.useExeptionFilter()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}