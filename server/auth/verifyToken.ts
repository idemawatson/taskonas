import * as Koa from 'koa'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import secret from './tokenSecret'

export default (ctx: Koa.Context, next: () => Promise<any>) => {
  const token = ctx.request.header.authorization.replace(/Bearer\s/, '')
  if (!token) ctx.throw('Invalid token', 401)
  try {
    const decoded = jwt.verify(token, secret)
    ctx.user = decoded
    ctx.logger.debug(decoded)
    return next()
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      ctx.throw('token expired', 401)
    } else {
      ctx.throw()
    }
  }
}
