import mongoose from "mongoose"

const Todo = new mongoose.Schema({
	userName: {type: String},
	email: {type: String},
	text: {type: String},
	isDone: {type: Boolean},
	isEditedByAdmin: {type: Boolean}
})

export default mongoose.model('Todo', Todo)