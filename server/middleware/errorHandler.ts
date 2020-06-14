import Koa from 'koa'
export default async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (err) {
    ctx.logger.warn(err)
    if (err.status) {
      ctx.status = err.status
      ctx.body = {
        message: err.message,
      }
    } else {
      ctx.status = 500
      ctx.body = {
        message: 'Internal Server Error',
      }
    }
  }
}
