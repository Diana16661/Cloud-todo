require('dotenv').config();
const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/task.routes');
const apiKeyMiddleware = require('./middlewares/apikey.middleware');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API key middleware для всіх /api/tasks
app.use('/api/tasks', apiKeyMiddleware, taskRoutes);

// Error handler (повинен бути останнім)
app.use(errorHandler);

module.exports = app;

// Якщо запускаємо напряму через node, стартує сервер
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
