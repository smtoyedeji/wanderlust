const mongoose = require('mongoose')

// set up the structure of all documents in db collection with Schema
const WanderlustSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'], // validation to ensure the value is provided. Check mongoose docs
        trim: true, // remove whitespaces from name
        maxlength: [20, 'name cannot be more than 20 characters'] // length of characters for name
    },
    title: {
        type: String,
        required: [true, 'must provide title of article'],
        maxlength: [50, 'title cannot be more than 50 characters'] 
    },
    experience: {
        type: String,
        required: [true, 'write your holiday experience'],
        maxlength: [500, 'experience cannot be more than 500 characers']
    }
})

module.exports = mongoose.model('Wanderlust', WanderlustSchema)