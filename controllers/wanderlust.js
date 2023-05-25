const Wanderlust = require("../models/Wanderlust");

const allPosts = async (req, res) => {
  try {
    const wanderlusts = await Wanderlust.find({}); // get all wanderlusts
    res.status(200).json({ success: true, wanderlusts });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createPost = async (req, res) => {
  try {
    const { place, topic, experience } = req.body;
    const { buffer, mimetype } = req.file;

    if (!place || !topic || !experience || !buffer || !mimetype) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields." });
    }

    const newDocument = new Wanderlust({
      place,
      topic,
      experience,
      image: {
        data: buffer,
        contentType: mimetype,
      },
    });

    const savedDocument = await newDocument.save();

    res.status(201).json({ success: true, newDocument: savedDocument });
  } catch (error) {
    res.status(500).json({ error: `Failed to create post: ${error.message}` });
  }
};

const aPost = async (req, res) => {
  try {
    const { id: wanderlustID } = req.params;
    const wanderlust = await Wanderlust.findOne({ _id: wanderlustID });

    // if id does not exist
    if (!wanderlust) {
      return res
        .status(404)
        .json({ msg: "no wanderlust with id :" + wanderlustID });
    }

    res.status(200).json({ suceess: true, wanderlust });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id: wanderlustID } = req.params;
    const wanderlust = await Wanderlust.findOneAndDelete({ _id: wanderlustID });

    // if id does not exist
    if (!wanderlust) {
      return res
        .status(404)
        .json({ msg: "no wanderlust with id :" + wanderlustID });
    }
    res
      .status(200)
      .json({ status: `post with id of ${wanderlustID} successfully deleted` });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};


const updatePost = async (req, res) => {
  try {
    const { place, topic, experience } = req.body;
    const { buffer, mimetype } = req.file;
    const postId = req.params.id;

    let updateFields = {};

    // check if form fields are empty

    if (place) {
      updateFields.place = place;
    }

    if (topic) {
      updateFields.topic = topic;
    }

    if (experience) {
      updateFields.experience = experience;
    }

    if (buffer && mimetype) {
      updateFields["image.data"] = buffer;
      updateFields["image.contentType"] = mimetype;
    }

    // Get the old document
    const existingDocument = await Wanderlust.findById(postId);

    if (!existingDocument) {
      return res.status(404).json({ error: "Post not found." });
    }

    // merge the old document with the new
    const updatedDocument = Object.assign(existingDocument, updateFields);

    // save into a new variable
    const savedDocument = await updatedDocument.save();

    res.status(200).json({ success: true, updatedDocument: savedDocument });
  } catch (error) {
    res.status(500).json({ error: `Failed to update post: ${error.message}` });
  }
};

module.exports = {
  createPost,
  allPosts,
  aPost,
  deletePost,
  updatePost,
};
