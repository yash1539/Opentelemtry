import { feedRouter } from "./feedRouter"
import { exporter } from './trace'
const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve('/home/raramuri/zipkin/feeds/configs/.env') })
// dotenv.config()
const koa = require('koa')
const port = process.env.PORT || 3005
const app = new koa()

console.log(process.env.TRACE_URL);

if (process.env.TRACE_URL) {
	exporter.start()
}

app.use(feedRouter.routes()).use(feedRouter.allowedMethods())

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