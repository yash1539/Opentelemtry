import {
	getAllFeeds,
} from './feedController'
import { bootstrapMiddleware } from './util'
import Router from 'koa-router'
import { verify } from '../middleware'
const feedRouter = new Router()
feedRouter.prefix('/feeds')

feedRouter.get('/', verify, bootstrapMiddleware, getAllFeeds)
export { feedRouter }