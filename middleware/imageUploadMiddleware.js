const multer = require('multer')

// Configure Multer storage
const storage = multer.memoryStorage()

// Create Multer upload instance
const upload = multer({ storage })

module.exports = {
  imageUploadMiddleware: upload.array('images')
};
