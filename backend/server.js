require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const messagesRouter = require('./routes/messages');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/messages', messagesRouter);

// Health check endpoint
app.get('/healthz', (req, res) => res.send('OK'));

// Start server immediately
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    // Don't exit immediately, server is still running for Render health check
  });