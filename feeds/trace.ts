import axios from "axios";
const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const serviceName = 'feeds'
const { HttpLogger } = require("zipkin-transport-http");
const wrapAxios = require('zipkin-instrumentation-axios');
const { Tracer, ExplicitContext, BatchRecorder } = require('zipkin');
// // Setup zipkin components   --Zipkinaxios
// const ctxImpl = new ExplicitContext();
// const recorder = new BatchRecorder({
//   logger: new HttpLogger({
//     endpoint: `http://localhost:9411/api/v1/spans`
//   })
// });
// const tracer = new Tracer({ ctxImpl, recorder });

// // Wrapp an instance of axios
// export const zipkinAxios = wrapAxios(axios, { tracer, serviceName: serviceName});
// console.log('zipkinaxios',zipkinAxios);

export const exporter = new opentelemetry.NodeSDK(
  {
    traceExporter: new ZipkinExporter({
      url: 'http://localhost:9411/api/v2/spans',
      serviceName: serviceName
    }),
    serviceName: serviceName,
    instrumentations: [getNodeAutoInstrumentations()]
  });


