import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: {type: String, required: true, unique: true},
  authorId: {type: String, required: true},
  
  galleryId: {type: String},
  path: {
    thumbnail: {type: String},
    fullSize: {type: String}
  },
  
  created_at: {type: Date, default: Date.now}
});

const Image = mongoose.model('Image', imageSchema);
export default Image;
