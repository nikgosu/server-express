import mongoose from "mongoose"

const Post = new mongoose.Schema({
	id: {type: String},
	info: {type: Object, required: true},
	isImportant: {type: Boolean, required: true},
	IsDone: {type: Boolean, required: true}
})

export default mongoose.model('Post', Post)