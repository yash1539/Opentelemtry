import {
	getAllBooks,
} from './bookController'
// import
import { bootstrapMiddleware } from '../feeds/util'
import  Router from 'koa-router'
import { verify } from '../middleware' 
const bookRouter = new Router()
bookRouter.prefix('/book')

bookRouter.get('/',verify, bootstrapMiddleware,getAllBooks)
export { bookRouter }