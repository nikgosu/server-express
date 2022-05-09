import Router from 'express'
import TodoController from "./TodoController.js"

const router = Router()

router.post('/todos', TodoController.create)
router.post('/login', TodoController.login)
router.post('/isAuth', TodoController.getIsAuth)
router.post('/logout', TodoController.logout)
router.get('/todos', TodoController.getAll)
router.get('/todos/:id', TodoController.getOne)
router.put('/todos', TodoController.update)
router.delete('/todos/:id', TodoController.delete)

export default router