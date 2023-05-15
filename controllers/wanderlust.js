const Wanderlust = require('../models/Wanderlust')

const allPosts = async (req, res) => {
    try {
        const wanderlusts = await Wanderlust.find({}) // get all wanderlusts
        res.status(200).json({ success: true, wanderlusts })
    } catch(err) {
        res.status(500).json({ msg: err })
    }
}


const writePost = async (req, res) => {
    try {
        const wanderlust = await Wanderlust.create(req.body)
        res.status(201).json({ success: true, wanderlust })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const aPost = async (req, res) => {
    try {     
        const { id: wanderlustID } = req.params
        const wanderlust = await Wanderlust.findOne({ _id:wanderlustID })

        // if id does not exist
        if(!wanderlust) {
            return res.status(404).json({msg: 'no wanderlust with id :' + wanderlustID })
        }

        res.status(200).json({ suceess: true, wanderlust })
    } catch(err) {
        res.status(500).json({ msg: err })
    }
    
}

const deletePost = async (req, res) => {
    try {
        const { id: wanderlustID } = req.params
        const wanderlust = await Wanderlust.findOneAndDelete({ _id:wanderlustID })

        // if id does not exist
        if(!wanderlust) {
            return res.status(404).json({msg: 'no wanderlust with id :' + wanderlustID })
        }
        res.status(200).json({ status: `post with id of ${wanderlustID} successfully deleted` })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updatePost = async (req, res) => {
    try {
        const { id: wanderlustID } = req.params

        const wanderlust = await Wanderlust.findOneAndUpdate({_id:wanderlustID}, req.body, {
            new: true,
            runValidators: true
        })

        // if id does not exist
        if(!wanderlust) {
            return res.status(404).json({msg: 'no wanderlust with id :' + wanderlustID })
        }
        res.status(200).json({ id: wanderlustID, data: req.body })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}




module.exports = {
    allPosts,
    writePost,
    aPost,
    deletePost, 
    updatePost,
}