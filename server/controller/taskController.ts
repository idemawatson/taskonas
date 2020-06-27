import * as Koa from 'koa'
import Task from '../model/Task'

const getTasks = async (ctx: Koa.Context) => {
  const tasks = await Task.find({
    user: ctx.user._id,
  })
  ctx.logger.debug(tasks)
  ctx.response.body = tasks
}

export default {
  getTasks,
}
