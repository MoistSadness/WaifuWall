/*
    Route logic lives here
*/
import mongoose from 'mongoose'
import postMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find()
        res.status(200).json(postMessages)
    } catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const imageName = req.file.originalname
    const post = {...req.body, selectedFile: req.file.originalname};
    
    const newPost = new postMessage(post)
    console.log(newPost)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async(req, res) => {
    //console.log(req.body);
    const {id: _id} = req.params        // id: _id destrucatures id from req object and renames it to _id
    const post = req.body

    // Check to see if _id is a valid mongoose id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Cannot update post with id ${_id}`)

    // If it is a valid mongoose id, update it.
    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {new: true})
    
    console.log('Updated DB\n',updatedPost)
    res.json(updatedPost)
}

export const deletePost = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Cannot delete post with id ${_id}`)
    await postMessage.findByIdAndRemove(id)

    console.log(`Deleted ${id}`)
    res.json({message: 'Post deleted successfully'})
}

export const likePost = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Cannot like post with id ${_id}`)
    const post = await postMessage.findById(id)
    const updatedPost = await postMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new: true})

    console.log(`Liked ${updatedPost._id}`)
    res.json(updatedPost)
}