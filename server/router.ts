import Router from 'koa-router'
import userController from './controller/userController'
import taskController from './controller/taskController'
import verify from './auth/verifyToken'
import verifyToken from './auth/verifyToken'

const router = new Router()

router.post('/api/login', userController.login)
router.get('/api/getTasks', verify, taskController.getTasks)
router.post('/api/addTask', verifyToken, taskController.addTask)

export default router
