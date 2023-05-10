const express = require('express')
const router = express.Router()

const { allPosts, writePost, aPost } = require('../controllers/wanderlust')

router.route('/').get(allPosts).post(writePost)
router.route('/:id').get(aPost)



module.exports = router