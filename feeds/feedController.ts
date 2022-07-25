import { getFeeds } from './feedService'
import { rlog } from './helper/logger';
export const getAllFeeds = async (ctx: any) => {
	try {
		const feeds = await getFeeds(ctx)
		rlog.info(`successfully retrieved feeds traceId=${ctx.response.header['x-correlation-id']}`)
		ctx.status = 200
		ctx.body = feeds
	} catch (error: any) {
		ctx.status = error.statusCode
		ctx.body = error
	}
}
