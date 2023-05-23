const mongoose = require('mongoose');

// set up the structure of all documents in db collection with Schema
const firstSchema = new mongoose.Schema({
  place: {
    type: String,
    required: [true, 'must provide name'], // validation to ensure the value is provided. Check mongoose docs
    trim: true, // remove whitespaces from name
    maxlength: [20, 'name cannot be more than 20 characters'], // length of characters for name
  },
  topic: {
    type: String,
    required: [true, 'must provide title of article'],
    maxlength: [50, 'title cannot be more than 50 characters'],
  },
  experience: {
    type: String,
    required: [true, 'write your holiday experience'],
    maxlength: [3000, 'experience cannot be more than 500 characters'],
  },
});

// image upload schema
const secondSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// combined schema for first and second schema
const WanderlustSchema = new mongoose.Schema({
  place: firstSchema.path('place'),
  topic: firstSchema.path('topic'),
  experience: firstSchema.path('experience'),
  name: secondSchema.path('name'),
  image: secondSchema.path('image'),
  size: secondSchema.path('size'),
  mimetype: secondSchema.path('mimetype'),
  createdAt: secondSchema.path('createdAt'),
});


const Wanderlust = mongoose.model('Wanderlust', WanderlustSchema);
module.exports = Wanderlust;
