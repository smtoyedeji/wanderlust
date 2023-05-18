const Images = require('../models/Image');

const getImage = async (req, res) => {
  try {
    const image = await Images.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found.' });
    }

    res.set('Content-Type', image.mimetype);
    res.send(image.image);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve image.' });
  }
};

module.exports = {
  getImage
};
