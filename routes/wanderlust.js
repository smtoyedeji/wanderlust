const express = require('express')


const router = express.Router()

const { imageUploadMiddleware } = require('../middleware/imageUploadMiddleware')
const uploadController = require('../controllers/uploadController')
const { allPosts, writePost, aPost, deletePost, updatePost } = require('../controllers/wanderlust')

router.route('/').get(allPosts).post(writePost)
router.route('/:id').get(aPost).delete(deletePost).patch(updatePost)
router.route('/upload').post(imageUploadMiddleware, uploadController.uploadImages)




module.exports = router