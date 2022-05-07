import Router from 'express'
import TodoController from "./TodoController.js"

const router = Router()

router.post('/todos', TodoController.create)
router.get('/todos', TodoController.getAll)
router.get('/todos/:id', TodoController.getOne)
router.put('/todos', TodoController.update)
router.delete('/todos/:id', TodoController.delete)

export default router