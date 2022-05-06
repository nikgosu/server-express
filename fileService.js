import * as uuid from 'uuid'
import path from 'path'
import fs from "fs"

class FileService{
	static readFile () {
		return JSON.parse(fs.readFileSync('./static/posts.json', 'utf8'))
	}
	static writeFile(posts) {
		fs.writeFileSync('./static/posts.json', JSON.stringify(posts))
	}
	static saveFile(file) {
		try {
			const fileName = uuid.v4() + '.jpeg'
			const filePath = path.resolve('static', fileName)
			file.mv(filePath)
			return fileName
		} catch (e) {
			console.log(e.message)
		}
	}
	static create(post) {
		const posts = this.readFile()
		post._id = uuid.v4()
		posts.push(post)
		this.writeFile(posts)
	}
	static getAll() {
		return this.readFile()
	}
	static getOne(id) {
		return this.readFile().find(post => post._id === id)
	}
	static update(updatedPost) {
		const updatedPosts = this.readFile().map(post => {
			if (post._id === updatedPost._id) {
				return updatedPost
			} else {
				return post
			}
		})
		this.writeFile(updatedPosts)
		return updatedPost
	}
	static delete(id) {
		const postsWithoutPost = this.readFile().filter(post => post._id !== id)
		const deletedPost = this.readFile().find(post => post._id === id)
		this.writeFile(postsWithoutPost)
		return deletedPost
	}
}

export default FileService