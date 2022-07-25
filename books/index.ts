import { bookRouter } from "./bookRoute"
const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin')
import { exporter } from '../feeds/trace'
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/tracing')
const { NodeTracerProvider } = require('@opentelemetry/node')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const consoleExporter = new ConsoleSpanExporter()
const provider = new NodeTracerProvider()
const spanProcessor = new SimpleSpanProcessor(consoleExporter)
provider.addSpanProcessor(spanProcessor)
const koa = require('koa')
const port = process.env.PORT || 3001
const app = new koa()

const zipkinExporter = new ZipkinExporter({
	url: 'http://localhost:9411/api/v2/spans',
	serviceName: 'users'
})
const zipkinProcessor = new SimpleSpanProcessor(zipkinExporter)
provider.addSpanProcessor(zipkinProcessor)
provider.register()
app.use(bookRouter.routes()).use(bookRouter.allowedMethods())
if (process.env.TRACE_URL) {
	exporter.start()
}
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