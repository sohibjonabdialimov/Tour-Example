const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainImage: { type: String, required: true },
  shortDescription: { type: String, required: true },
  title: { type: String },
  fullDescription: { type: String },
  youtubeLink: { type: String },
  mapLink: { type: String },
  infoSections: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [String]
  }],
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
  images: [String],
}, { timestamps: true }); 

module.exports = mongoose.model('City', CitySchema);
