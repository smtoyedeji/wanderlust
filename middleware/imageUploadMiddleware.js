const multer = require('multer');

// Configure Multer storage
const storage = multer.memoryStorage();

// Create Multer upload instance
const upload = multer({ storage });

// Single file upload middleware
const imageUploadMiddleware = upload.single('image');

module.exports = {
  imageUploadMiddleware
};
