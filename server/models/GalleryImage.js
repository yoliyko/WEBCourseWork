const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GalleryImageSchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('GalleryImage', GalleryImageSchema);