import {
	getAllUsers,getHello
} from './userController'
import  Router from 'koa-router'
import { verify } from '../middleware'
const userRouter = new Router()
userRouter.prefix('/user')

userRouter.get('/', verify,getAllUsers)
userRouter.get('/hello',verify,getHello)
export { userRouter }