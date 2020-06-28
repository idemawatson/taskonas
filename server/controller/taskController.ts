import * as Koa from 'koa'
import Task from '../model/Task'

const getTasks = async (ctx: Koa.Context) => {
  const tasks = await Task.find({
    user: ctx.user._id,
  })
  ctx.logger.debug(tasks)
  ctx.response.body = tasks
}

const addTask = async (ctx: Koa.Context) => {
  const req = ctx.request.body
  ctx.logger.debug(req)
  const task = new Task({
    ...req,
    status: '未達成',
    user: ctx.user._id,
  })
  await task.save()
  ctx.logger.info(`Added task id: ${req.title}`)
  ctx.response.body = 'added Task'
}

export default {
  getTasks,
  addTask,
}
