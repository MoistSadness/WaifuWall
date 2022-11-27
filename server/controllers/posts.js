/*
    Route logic lives here
*/
import mongoose from 'mongoose'
import postMessage from '../models/postMessage.js'

import cloudinary from '../config/cloudinary.js'
//import upload from '../middleware/multer.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    // Upload image to cloudinary and save data in variable
    const uploadedImage = await cloudinary.cloudinary.uploader
        .upload(req.file.path, {
            use_filename: true,
            folder: 'WaifuWall',
        }).then(result => ({
            //implicit return specific data from response object
            public_id: result.public_id,
            url: result.url,
            secure_url: result.secure_url,
            original_filename: result.original_filename,
        }))

    // Spread image data into database
    const post = { ...req.body, imgData: uploadedImage };

    const newPost = new postMessage(post)
    console.log(newPost)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    //console.log(req.body);
    const { id: _id } = req.params        // id: _id destrucatures id from req object and renames it to _id
    const post = req.body

    console.log('bodyyy', req.body)

    // Check to see if _id is a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Cannot update post with id ${_id}`)

    // If it is a valid mongoose id, update it.
    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, { new: true })

    //console.log('Updated DB\n', updatedPost)
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Cannot delete post with id ${_id}`)
    await postMessage.findByIdAndRemove(id)

    console.log(`Deleted ${id}`)
    res.json({ message: 'Post deleted successfully' })
}

export const likePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Cannot like post with id ${_id}`)
    const post = await postMessage.findById(id)
    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    console.log(`Liked ${updatedPost._id}`)
    res.json(updatedPost)
}