const express = require('express')


const router = express.Router()

const { imageUploadMiddleware } = require('../middleware/imageUploadMiddleware')
const { allPosts, createPost, aPost, deletePost, updatePost } = require('../controllers/wanderlust')


router.route('/').get(allPosts).post(imageUploadMiddleware, createPost)
router.route('/:id').get(aPost).delete(deletePost).patch(updatePost)


module.exports = router