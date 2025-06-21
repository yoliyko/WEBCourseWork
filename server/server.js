// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Переконайтесь, що цей пакет встановлено: npm install dotenv

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Дозволяє запити з вашого React-додатку
app.use(express.json()); // Дозволяє серверу читати JSON з тіла запиту

// Підключення до MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('!!! MONGO_URI не знайдено в .env файлі. Сервер не може підключитися до БД.');
  process.exit(1); // Зупиняємо сервер, якщо немає ключа
}

mongoose.connect(mongoUri)
  .then(() => console.log('>>> MongoDB connected successfully <<<'))
  .catch(err => console.error('!!! MongoDB connection error:', err));

// Підключення маршрутів (API)
app.use('/api', require('./routes/api'));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`>>> Server is running on port ${PORT}`);
});