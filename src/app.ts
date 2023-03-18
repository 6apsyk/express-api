import express, {Express} from 'express'
import {Server} from 'node:http'
import { userRoute } from './users/user';

export class App {

    server: Server;
    app: Express;
    port: number;

    constructor(){
        this.port = 8000
        this.app = express()
    }

    useRoutes(){
        this.app.use('users', userRoute)
    }

    async init(){
        this.useRoutes()
        this.server = this.app.listen(this.port)
        console.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}