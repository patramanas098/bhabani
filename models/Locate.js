const mongoose = require('mongoose');

const locateSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

const Locate = mongoose.model('Locate', locateSchema);

module.exports = Locate;
