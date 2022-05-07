import mongoose from "mongoose"

const Todo = new mongoose.Schema({
	userName: {type: String, required: true},
	email: {type: String, required: true},
	text: {type: String, required: true},
	isDone: {type: Boolean, required: true},
	isEditedByAdmin: {type: Boolean, required: true}
})

export default mongoose.model('Todo', Todo)