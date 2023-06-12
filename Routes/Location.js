const express = require('express');
const router = express.Router();
const Location = require('../models/Locate');

// Create a location
router.post('/locations', async (req, res) => {
  const { latitude, longitude } = req.body;
  const location = new Location({ latitude, longitude });

  location.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving location');
    } else {
      res.json(location);
    }
  });
});

module.exports = router;
