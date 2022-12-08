import mongoose from 'mongoose'
import UserSchema from '../schemas/userSchema'

const UserModel = new mongoose.model("User", UserSchema)

export default UserModel
