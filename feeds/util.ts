const { v4: uuidv4 } = require('uuid')
import * as api from '@opentelemetry/api'
export const bootstrapMiddleware = async (ctx: any, next: any) => {
	const context = api.context.active();
	const tracer = api.trace.getSpanContext(context)
	console.log('tracer',tracer?.traceId);
	const correlationId = tracer?.traceId || uuidv4().replaceAll('-', '');
	await next()
}