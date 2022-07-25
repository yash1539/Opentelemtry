// const { v4: uuidv4 } = require('uuid')
export const verify = async (ctx: any, next: any) => {
    if (ctx.headers['token'] == '123') {
        await next()
    } else {
        throw new Error()
    }
}