import Router from 'koa-router'
import createToken from './auth/createToken'

const router = new Router()

router.post('/api/login', async ctx => {
  await createToken(ctx)
})

// router.get('/api/getTask', authorize, async ctx => {
//   ctx.response.body = await getTasks(ctx)
// })

export default router
