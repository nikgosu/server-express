import mongoose from "mongoose"

const Post = new mongoose.Schema({
	_id: {type: String},
	info: {type: Object, required: true},
	isImportant: {type: Boolean, required: true},
	isDone: {type: Boolean, required: true}
})

export default mongoose.model('Post', Post)