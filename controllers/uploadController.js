const Images = require('../models/Image');

module.exports.uploadImages = async (req, res) => {
  try {
    const uploadedImages = [];

    for (const file of req.files) {
      const { originalname, buffer, size, mimetype } = file;

      const newImage = new Images({
        name: originalname,
        image: buffer,
        size: size,
        mimetype: mimetype
      });

      const savedImage = await newImage.save();
      uploadedImages.push(savedImage);
    }

    const response = uploadedImages.map((image) => {
      return {
        id: image._id,
        name: image.name,
        size: image.size,
        mimetype: image.mimetype
      };
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload images.' });
  }
};
