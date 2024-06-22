const express = require('express');
const router = express.Router();
const Video = require('./../models/video'); 

router.get('/videos/html/beginner', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'HTML', level: 'Beginner' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/html/intermediate', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'HTML', level: 'Intermediate' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/html/advanced', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'HTML', level: 'Advanced' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/css/beginner', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'css', level: 'Beginner' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/css/intermediate', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'css', level: 'Intermediate' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/css/advanced', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'css', level: 'Advanced' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/react/beginner', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'react', level: 'Beginner' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/react/intermediate', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'react', level: 'Intermediate' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/react/advanced', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'react', level: 'Advanced' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/mongo/beginner', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'mongo', level: 'Beginner' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/mongo/intermediate', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'mongo', level: 'Intermediate' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/mongo/advanced', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'mongo', level: 'Advanced' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/nodejs/beginner', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'nodejs', level: 'Beginner' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/nodejs/intermediate', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'nodejs', level: 'Intermediate' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videos/nodejs/advanced', async (req, res) => {
  try {
    const videos = await Video.find({ topic: 'nodejs', level: 'Advanced' });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
