const mongoose = require("mongoose");
const {Schema} =mongoose;
const registerSchema = new Schema({
    name: String,
    email: String,
    image: {
      filename: String,
      mimetype: String,
      size: Number,
      data: Buffer,
    },
  });
 
  module.exports = mongoose.model('Register', registerSchema);