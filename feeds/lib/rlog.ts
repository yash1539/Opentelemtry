import axios from 'axios'
interface Ilogs {
    logLevel: string,
    source: string,
    createdOn: Date,
    message: string,
}

const level: any = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
}

class Rlog {
    apiKey: string
    source: string
    logLevel: string
    logs: Ilogs[] = []
    constructor(config: any) {
        this.apiKey = config.apiKey;
        this.source = config.source
        this.logLevel = config.logLevel
    }
    formatMessage(message:string){
        return message.replace(/["']/g, "");
    }
    async logsSyncCall(logsToBeSynced: any) {
        try {
            const res = await axios.post('http://localhost:8080/logs', {
                logs: logsToBeSynced
            }, {
                headers: {
                    'x-api-key': this.apiKey
                }
            })
        } catch (err: any) {
            console.log(err);
        }
    }

    async forceSync() {
        try {
            const res = await axios.post('http://localhost:8080/logs', {
                logs: this.logs
            }, {
                headers: {
                    'x-api-key': this.apiKey
                }
            })
        } catch (err: any) {
            console.log(err);
        }
    }

    async sync() {
        if (this.logs.length >= 10) {
            let logsToBeSynced: Ilogs[] = this.logs
            this.logs = []

            this.logsSyncCall(logsToBeSynced)
        }
    }

    getLogLevelValue() {
        return level[this.logLevel]
    }

    debug(message: string) {
        let logValue: any = this.getLogLevelValue()
        message =this.formatMessage(message)
        if (logValue >= level.debug) {
            this.logs.push({
                logLevel: "debug",
                source: this.source,
                createdOn: new Date(),
                message: message

            });
            this.sync()
        }
    }
    info(message: string) {
        let logValue: any = this.getLogLevelValue()
        message =this.formatMessage(message)
        if (logValue >= level.info) {
            this.logs.push({
                logLevel: "info",
                source: this.source,
                createdOn: new Date(),
                message: message,

            });
            this.sync()
        }

    }
    error(message: string) {
        let logValue: any = this.getLogLevelValue()
        message =this.formatMessage(message)
        if (logValue >= level.error) {
            this.logs.push({
                logLevel: "error",
                source: this.source,
                createdOn: new Date(),
                message: message,

            });
            this.sync()
        }

    }
    warn(message: string) {
        let logValue: any = this.getLogLevelValue()
        message =this.formatMessage(message)
        if (logValue >= level.warn) {
            this.logs.push({
                logLevel: "warn",
                source: this.source,
                createdOn: new Date(),
                message: message,

            });
            this.sync()
        }
    }
    trace(message: string) {
        let logValue: any = this.getLogLevelValue()
        message =this.formatMessage(message)
        if (logValue >= level.trace) {
            this.logs.push({
                logLevel: "trace",
                source: this.source,
                createdOn: new Date(),
                message: message,

            });
            this.sync()
        }
    }
    fatal(message: string) {
        let logValue: any = this.getLogLevelValue()
        message =this.formatMessage(message)
        if (logValue >= level.fatal) {
            this.logs.push({
                logLevel: "fatal",
                source: this.source,
                createdOn: new Date(),
                message: message,

            });
            this.sync()
        }
    }
}

export { Rlog }