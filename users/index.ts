import { userRouter } from "./userRoute"
const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin')
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/tracing')
const { NodeTracerProvider } = require('@opentelemetry/node')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const consoleExporter = new ConsoleSpanExporter()
const provider = new NodeTracerProvider()
const spanProcessor = new SimpleSpanProcessor(consoleExporter)
provider.addSpanProcessor(spanProcessor)
const koa = require('koa')
const port = process.env.PORT || 3004
const app = new koa()

const zipkinExporter = new ZipkinExporter({
	url: 'http://localhost:9411/api/v2/spans',
	serviceName: 'users'
})
const zipkinProcessor = new SimpleSpanProcessor(zipkinExporter)
provider.addSpanProcessor(zipkinProcessor)
provider.register()
export const exporter = new opentelemetry.NodeSDK(
	{
		traceExporter: new ZipkinExporter({
			url: 'http://localhost:9411/api/v2/spans',
			serviceName: 'users'
		}),
		serviceName: 'users',
		instrumentations: [getNodeAutoInstrumentations()]
	});
exporter.start()

app.use(userRouter.routes()).use(userRouter.allowedMethods())

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