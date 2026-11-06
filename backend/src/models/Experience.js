import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
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
  companyUrl: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  achievements: [{
    type: String,
    trim: true
  }],
  techStack: [{
    type: String,
    trim: true
  }],
  type: {
    type: String,
    enum: ['full-time', 'contract', 'freelance', 'internship'],
    required: true
  },
  current: {
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

experienceSchema.index({ startDate: -1 });
experienceSchema.index({ current: -1, order: 1 });

export default mongoose.model('Experience', experienceSchema);