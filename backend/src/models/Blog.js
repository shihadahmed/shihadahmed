import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  content: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  readingTime: {
    type: String,
    trim: true
  },
  published: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date
  },
  views: {
    type: Number,
    default: 0
  },
  author: {
    type: String,
    default: 'Shihad Bin Ahmed'
  }
}, {
  timestamps: true
});

blogSchema.index({ published: 1, publishedAt: -1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ slug: 1 });

export default mongoose.model('Blog', blogSchema);