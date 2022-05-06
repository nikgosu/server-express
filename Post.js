import mongoose from "mongoose"

const Post = new mongoose.Schema({
	info: {type: Object, required: true},
	isImportant: {type: Boolean, required: true},
	isDone: {type: Boolean, required: true}
})

export default mongoose.model('Post', Post)