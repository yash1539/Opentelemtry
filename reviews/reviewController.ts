import {getReviews} from './reviewService'
export const getAllReviews = async(ctx: any) => {
	try {	
		const reviews=await getReviews()
		ctx.body=reviews
		ctx.status=200
	} catch (error: any) {
		ctx.status=error.statusCode
		ctx.body=error
	}
}
