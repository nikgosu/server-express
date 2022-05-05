import Post from "./Post.js"
import fileService from "./fileService.js"

class PostService {
	async create(post, picture) {
		const fileName = fileService.saveFile(picture)
		return await Post.create({...post, picture: fileName})
	}
	async getAll() {
		return Post.find()
	}
	async getOne(id) {
		if (!id) {
			throw new Error('id not found')
		}
		return Post.findById(id)
	}
	async update(post) {
		if (!post._id) {
			throw new Error('id not found')
		}
		return Post.findByIdAndUpdate(post._id, post, {new: true})
	}
	async delete(id) {
		if (!id) {
			throw new Error('id not found')
		}
		return Post.findByIdAndDelete(id)
	}
}

export default new PostService()