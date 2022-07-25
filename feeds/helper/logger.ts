import { Rlog } from '../lib/rlog'

const rlog = new Rlog({
    apiKey: process.env.RLOG_API_KEY || '07323492-8e33-4a78-b5b6-ec2a1e5d209c',
    source: "rlog backend",
    logLevel: "debug"
})
process.on('uncaughtException', async function (err: any) {
    rlog.fatal(`${err.stack}`)
    await rlog.forceSync();
    return process.exit(1);
});

export function toMB(bytes: number) {
    return Number.parseFloat((bytes / 1024 / 1024).toFixed(2))
}

export { rlog }