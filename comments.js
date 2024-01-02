// Create web server using express.js
// Use mongoose to connect to mongoDB
// Create schema for comments
// Export model to use in other files

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: String,







