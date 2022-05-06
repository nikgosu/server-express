
import PostService from "./PostService.js"

class PostController {
	async create(req, res) {
		try {
			const post = await PostService.create(req.body)
			res.json(post)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async getAll(req, res) {
		try {
			const posts = await PostService.getAll()
			res.header('Access-Control-Allow-Origin', "*");
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.header('Access-Control-Allow-Headers', 'Content-Type');
			return res.json(posts)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async getOne(req, res) {
		try {
			const post = await PostService.getOne(req.params.id)
			return res.json(post)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async update(req, res) {
		try {
			const updatedPost = await PostService.update(req.body)
			return res.json(updatedPost)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async delete(req, res) {
		try {
			const deletedPost = await PostService.delete(req.params.id)
			return res.json(deletedPost)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
}

export default new PostController()