import express from 'express'
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/data/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

router.get('/', getPosts)
router.post('/', upload.single('selectedFile'), createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router