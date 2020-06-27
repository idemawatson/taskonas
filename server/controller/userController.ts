import { sign } from 'jsonwebtoken'
import * as Koa from 'koa'
import User from '../model/User'
import tokenSecret from '../auth/tokenSecret'

const login = async (ctx: Koa.Context) => {
  const req = ctx.request.body
  const user = await User.findOne({
    email: req.email,
    password: req.password,
  })
  ctx.assert(user, 401, 'unauthenticated')
  ctx.logger.debug(user)
  const token = sign(user.toJSON(), tokenSecret, { expiresIn: '1h' })
  ctx.logger.debug(`token: ${token}`)
  ctx.response.body = { token: token }
}

export default {
  login,
}
