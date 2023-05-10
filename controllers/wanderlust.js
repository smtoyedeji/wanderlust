const Wanderlust = require('../models/Wanderlust')

const allPosts = (req, res) => {
    res.send('All Posts on DOM')
}

const writePost = async (req, res) => {
    try {
        const wanderlusts = await Wanderlust.create(req.body)
        res.status(201).json({ wanderlusts })

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const aPost = (req, res) => {
    res.send('A post on the DOM')
}


module.exports = {
    allPosts,
    writePost,
    aPost
}