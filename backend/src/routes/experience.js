import express from 'express';
import Experience from '../models/Experience.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { current } = req.query;
    const query = current === 'true' ? { current: true } : { current: { $ne: true } };
    const experiences = await Experience.find(query).sort({ current: -1, startDate: -1, order: 1 }).select('-__v');
    res.json({ success: true, data: experiences });
  } catch (error) {
    next(error);
  }
});

router.get('/current', async (req, res, next) => {
  try {
    const experience = await Experience.findOne({ current: true }).select('-__v');
    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const experience = await Experience.findById(req.params.id).select('-__v');
    if (!experience) return res.status(404).json({ success: false, message: 'Experience not found' });
    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-__v');
    if (!experience) return res.status(404).json({ success: false, message: 'Experience not found' });
    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json({ success: false, message: 'Experience not found' });
    res.json({ success: true, message: 'Experience deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;