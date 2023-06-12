const mongoose = require("mongoose");
const {Schema} =mongoose;
const locateacheme = new Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
    
  });
 
  module.exports = mongoose.model('Locate', locateacheme);