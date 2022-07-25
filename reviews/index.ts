import { reviewRouter } from "./reviewRoute"
const koa=require('koa')
const port=process.env.PORT||3002
const app=new koa()
const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");

export const exporter = new opentelemetry.NodeSDK(
	{
	  traceExporter: new ZipkinExporter({
		url: 'http://localhost:9411/api/v2/spans',
		serviceName: 'reviews'
	  }),
	  serviceName: 'reviews',
	  instrumentations: [getNodeAutoInstrumentations()]
	});
	exporter.start()


app.use(reviewRouter.routes()).use(reviewRouter.allowedMethods())

app.on('error', (err: any) => {
	console.error('server error', err)
})

app.listen(port, function (error: any) {
	if (error) {
		console.log('Something went wrong', error)
	} else {
		console.log('Server is listening at port : ' + port)
	}
})