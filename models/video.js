const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = Schema({
    link: {type: String, required: true},
    title: {type: String, required: true}
})

const Video = mongoose.model('Video',videoSchema)

module.exports = Video;
