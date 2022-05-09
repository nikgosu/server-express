import mongoose from 'mongoose'
const {Schema, model} = mongoose

const User = new Schema({
	userName: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	isAuth: {type: Boolean, required: false}
})

export default mongoose.model('User', User)