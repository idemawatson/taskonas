import Router from 'koa-router'
import userController from './controller/userController'

const router = new Router()

router.post('/api/login', userController.login)

export default router
