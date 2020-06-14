import { sign } from 'jsonwebtoken'
import * as Koa from 'koa'
import { ObjectId } from 'mongodb'
import User from '../model/User'

const SECRET = 'secret'
const login = async (ctx: Koa.Context) => {
  const req = ctx.request.body
  const payload: {
    name: string
    email: string
    id?: ObjectId
  } = {
    name: req.name,
    email: req.email,
  }
  const user = await User.getUser(payload)
  ctx.assert(user, 401, 'unauthenticated')
  payload.id = user._id
  const token = sign(payload, SECRET)
  ctx.logger.debug(`token: ${token}`)
  ctx.response.body = token
}

export default {
  login,
}
