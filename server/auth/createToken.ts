import { sign } from 'jsonwebtoken'
import * as Koa from 'koa'
const SECRET = 'secret'
export default async (ctx: Koa.Context) => {
  const req = ctx.request.body
  const payload: {
    name: string
    email: string
    id?: string
  } = {
    name: req.name,
    email: req.email,
  }
  const user = await ctx.db.collection('user').findOne(req)
  ctx.assert(user, 401, 'unauthenticated')
  payload.id = user._id
  const token = sign(payload, SECRET)
  ctx.logger.debug(`token: ${token}`)
  ctx.response.body = token
}
