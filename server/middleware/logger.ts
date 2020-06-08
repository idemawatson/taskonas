import Koa from 'koa'
import log4js from 'log4js'

export default async (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.logger = log4js.getLogger()
  ctx.logger.info(ctx.request.url)
  await next()
}
