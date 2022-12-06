import express from 'express'
import { getPosts, createPost, getPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import upload from '../middleware/multer.js'

/*
// Imports and configuration to get multer-storage-cloudinary working
// Commenting out to try to get cloudinary sdk to work
import multer from 'multer'
import storage from '../config/cloudinary.js'
const upload = multer(storage)
*/

const router = express.Router()

//console.log('yayy')

router.get('/', getPosts)
router.post('/', upload.single('selectedFile'), createPost)
router.get('/:id', getPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router