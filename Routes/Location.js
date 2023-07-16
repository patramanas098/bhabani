
const express = require('express');
const router = express.Router();
const Location = require('../models/Locate');

// Create a location
router.post('/locations', async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    // Create a new location document
    const location = new Location({ latitude, longitude });
    await location.save();

    res.status(200).json({ message: 'Location saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save location' });
  }
});

module.exports = router;

