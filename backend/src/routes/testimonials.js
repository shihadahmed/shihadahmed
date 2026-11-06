import express from 'express';
import Testimonial from '../models/Testimonial.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { featured, limit = 10 } = req.query;
    const query = featured === 'true' ? { featured: true } : {};
    const testimonials = await Testimonial.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .limit(parseInt(limit))
      .select('-__v');
    res.json({ success: true, data: testimonials });
  } catch (error) {
    next(error);
  }
});

router.get('/featured', async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find({ featured: true })
      .sort({ order: 1 })
      .limit(5)
      .select('-__v');
    res.json({ success: true, data: testimonials });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id).select('-__v');
    if (!testimonial) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-__v');
    if (!testimonial) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;