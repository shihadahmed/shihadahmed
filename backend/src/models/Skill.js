import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'ui'],
    required: true
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  icon: {
    type: String,
    trim: true
  },
  yearsExperience: {
    type: Number,
    min: 0
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

skillSchema.index({ category: 1, order: 1 });

export default mongoose.model('Skill', skillSchema);