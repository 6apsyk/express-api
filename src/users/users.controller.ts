import {Response, Request, NextFunction} from 'express'
import { BaseController } from "../common/base.controller";
import { HTTPError } from '../errors/http-error.class';
import {injectable, inject} from 'inversify'
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.service.interface';
import 'reflect-metadata';
import { IUsersController } from './users.controller.interface';

@injectable()
export class UsersController extends BaseController implements IUsersController{
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger){
      super(loggerService)  
      this.bindRoutes([
        {path:'/login', method: 'post', func: this.login},
        {path:'/register', method: 'post', func: this.register},
      ])
    }

    login(req: Request , res: Response, next: NextFunction){
       next(new HTTPError(401,'ошибка авторизации', 'login')) 
    }

    register(req: Request , res: Response, next: NextFunction){
        this.ok(res, 'register')
    }
}