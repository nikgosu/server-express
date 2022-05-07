
import TodoService from "./TodoService.js"

class TodoController{
	async create(req, res) {
		try {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods: GET, DELETE, POST, PUT");
			res.header('Access-Control-Allow-Headers', 'Content-Type');
			const todo = await TodoService.create(req.body)
			res.json(todo)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async getAll(req, res) {
		try {
			const todos = await TodoService.getAll()
			res.header('Access-Control-Allow-Origin', "*");
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.header('Access-Control-Allow-Headers', 'Content-Type');
			return res.json(todos)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async getOne(req, res) {
		try {
			const todo = await TodoService.getOne(req.params.id)
			return res.json(todo)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async update(req, res) {
		try {
			const updatedTodo = await TodoService.update(req.body)
			return res.json(updatedTodo)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async delete(req, res) {
		try {
			const deletedTodo = await TodoService.delete(req.params.id)
			return res.json(deletedTodo)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
}

export default new TodoController()