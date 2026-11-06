import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { tag, published = 'true', limit = 10, page = 1, search } = req.query;
    const query = { published: published === 'true' };
    
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const posts = await Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v -content');
    
    const total = await Blog.countDocuments(query);
    
    res.json({
      success: true,
      data: posts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get('/tags', async (req, res, next) => {
  try {
    const tags = await Blog.aggregate([
      { $match: { published: true } },
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    res.json({ success: true, data: tags });
  } catch (error) {
    next(error);
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug }).select('-__v');
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    if (post.published) {
      await Blog.findByIdAndUpdate(post._id, { $inc: { views: 1 } });
    }
    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const post = new Blog(req.body);
    if (post.published) post.publishedAt = new Date();
    await post.save();
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
});

router.put('/:slug', async (req, res, next) => {
  try {
    const updateData = { ...req.body };
    if (updateData.published && !req.body.publishedAt) {
      updateData.publishedAt = new Date();
    }
    const post = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
});

router.delete('/:slug', async (req, res, next) => {
  try {
    const post = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;