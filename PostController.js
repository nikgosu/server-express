import FileService from "./fileService.js"
import fileService from "./fileService.js"

class PostController {
	async create(req, res) {
		try {
			const post = req.body
			FileService.create(post)
			res.json(post)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async getAll(req, res) {
		try {
			const posts = fileService.getAll()
			return res.json(posts)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async getOne(req, res) {
		try {
			const post = fileService.getOne(req.params.id)
			return res.json(post)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async update(req, res) {
		try {
			const updatedPost = fileService.update(req.body)
			return res.json(updatedPost)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async delete(req, res) {
		try {
			const deletedPost = fileService.delete(req.params.id)
			return res.json(deletedPost)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
}

export default new PostController()