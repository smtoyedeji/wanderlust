const express = require('express')
const router = express.Router()

const { allPost, aPost, writePost } = require('../controllers/wanderlust')

router.route('/').get(allPost).post(writePost)
router.route('/:id').get(aPost)