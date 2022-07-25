import {
	getAllReviews,
} from './reviewController'
import  Router from 'koa-router'
import { verify } from '../middleware'
const reviewRouter = new Router()
reviewRouter.prefix('/review')

reviewRouter.get('/',verify, getAllReviews)
export { reviewRouter }