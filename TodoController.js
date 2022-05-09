import TodoService from "./TodoService.js"
import User from "./User.js"
import jwt from 'jsonwebtoken'

class TodoController{
	async create(req, res) {
		try {
			const todo = await TodoService.create(req.body)
			res.json(todo)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async login (req, res) {
		const candidate = await User.findOne({userName: req.body.userName})
		try {
			res.header('Access-Control-Allow-Origin: *');
			res.header('Access-Control-Allow-Methods', 'GET, POST');
			const {userName, password} = req.body
			if (candidate) {
				if (password === candidate.password) {
					candidate.isAuth = true
					await User.findByIdAndUpdate(candidate._id, candidate, {new: true})
					res.json(candidate.isAuth)
				} else {
					res.status(401).json({
						message: 'Password is not valid'
					})
				}
			} else {
				res.status(400).json({
					message: 'User is not valid'
				})
			}
		} catch (e) {
			res.status(400).json({message: 'Login error'})
		}
	}
	async logout(req, res) {
		const candidate = await User.findOne({userName: req.body.userName})
		if (candidate) {
			candidate.isAuth = false
			await User.findByIdAndUpdate(candidate._id, candidate, {new: true})
			res.json(candidate.isAuth)
		}
	}
	async getIsAuth(req, res) {
		const candidate = await User.findOne({userName: req.body.userName})
		if (candidate) {
			res.json(candidate.isAuth)
		}
	}
	async getAll(req, res) {
		try {
			const todos = await TodoService.getAll()
			res.header('Access-Control-Allow-Origin: *');
			res.header('Access-Control-Allow-Methods', 'GET');
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