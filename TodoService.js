import Todo from "./Todo.js"

class TodoService {
	async create(todo) {
		return await Todo.create(todo)
	}
	async getAll() {
		return Todo.find()
	}
	async getOne(id) {
		if (!id) {
			throw new Error('id not found')
		}
		console.log(Todo.findById(id))
		return Todo.findById(id)
	}
	async update(todo) {
		if (!todo._id) {
			throw new Error('id not found')
		}
		return Todo.findByIdAndUpdate(todo._id, todo, {new: true})
	}
	async delete(id) {
		if (!id) {
			throw new Error('id not found')
		}
		return Todo.findByIdAndDelete(id)
	}
}

export default new TodoService()