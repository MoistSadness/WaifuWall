import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    imgData: {
        public_id: String,
        url: String,
        secure_url: String,
        original_filename: String,
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const postMessage = mongoose.model('postMessage', postSchema)
export default postMessage