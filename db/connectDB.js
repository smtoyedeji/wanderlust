const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://oyedejismt:temitope104S@cluster0.rn9xsv6.mongodb.net/wanderlust?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
