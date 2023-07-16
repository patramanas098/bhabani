const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const Register = require('../models/Register');

// Configure multer for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the API endpoint for user registration
router.post('/register', upload.single('image'), async (req, res) => {
  const { name, email, location } = req.body;
  const { originalname, mimetype, buffer } = req.file;

  try {
    // Compress the image using sharp
    const compressedImageBuffer = await sharp(buffer)
      .resize({ width: 800 }) // Adjust the width as needed
      .toBuffer();

    const compressedSize = compressedImageBuffer.length;

    const newRegister = new Register({
      name,
      email,
      location: JSON.parse(location),
      image: {
        filename: originalname,
        mimetype,
        size: compressedSize,
        data: compressedImageBuffer,
      },
    });

    await newRegister.save();

    res.status(200).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, error: 'Error registering user' });
  }
});

router.get('/dusers', async (req, res) => {
  try {
    const registers = await Register.find({}, '-_id name email location');
    res.json(registers);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Error getting users' });
  }
});

module.exports = router;
