import express, {Express} from 'express'
import {Server} from 'node:http'
import { LoggerService } from './logger/logger.service';
import { userRoute } from './users/user';

export class App {

    server: Server;
    app: Express;
    port: number;
    logger: LoggerService

    constructor(logger: LoggerService){
        this.port = 8000
        this.app = express()
        this.logger = logger
    }

    useRoutes(){
        this.app.use('users', userRoute)
    }

    async init(){
        this.useRoutes()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}