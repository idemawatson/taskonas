import * as Koa from 'koa'
import jwt from 'jsonwebtoken'
import secret from './tokenSecret'

export default (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.logger.debug(ctx.request.header)
  const token = ctx.request.header.authorization.replace(/Bearer\s/, '')
  if (!token) ctx.throw('Invalid token', 401)
  const decoded = jwt.verify(token, secret)
  ctx.user = decoded
  ctx.logger.debug(decoded)
  return next()
}
