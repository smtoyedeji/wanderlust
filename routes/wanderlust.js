const express = require('express')


const router = express.Router()

const { imageUploadMiddleware } = require('../middleware/imageUploadMiddleware')
const { uploadImages } = require('../controllers/uploadController')
const { allPosts, writePost, aPost, deletePost, updatePost } = require('../controllers/wanderlust')
const { getImage } = require('../controllers/imageController');

router.route('/').get(allPosts).post(writePost)
router.route('/:id').get(aPost).delete(deletePost).patch(updatePost)
router.route('/upload').post(imageUploadMiddleware, uploadImages)
router.route('/img/:id').get(getImage)


module.exports = router