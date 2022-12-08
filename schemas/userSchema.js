import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        firstname: {},
        lastname: {},
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        img: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

export default UserSchema