import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

testimonialSchema.index({ featured: -1, order: 1 });

export default mongoose.model('Testimonial', testimonialSchema);