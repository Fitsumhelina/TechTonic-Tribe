const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  level: { type: String, required: true },
  title: { type: String, required: true },
  videoLink: { type: String, required: true },
  description: { type: String, required: true }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
