import express from 'express'
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
//import upload from '../middleware/multer.js'
import multer from 'multer'
import storage from '../config/cloudinary.js'
const upload = multer(storage)

const router = express.Router()

router.get('/', getPosts)
router.post('/', upload.single('selectedFile'), createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router