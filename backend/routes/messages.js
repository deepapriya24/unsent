const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages (newest first)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Something went quiet on our end.' });
  }
});

// POST create a message
router.post('/', async (req, res) => {
  const { name, content } = req.body;

  if (!name || !content) {
    return res.status(400).json({ error: 'This feels a little empty.' });
  }

  try {
    const message = new Message({ name, content });
    const saved = await message.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Something went quiet on our end.' });
  }
});

// DELETE a message
router.delete('/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: 'Released.' });
  } catch (err) {
    res.status(500).json({ error: 'Something went quiet on our end.' });
  }
});

module.exports = router;
