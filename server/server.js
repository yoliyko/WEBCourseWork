// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// === ПОЧАТОК ЗМІН: Детальне налаштування CORS ===

// 1. Створюємо список доменів, яким ми довіряємо.
const allowedOrigins = [
  'http://localhost:3000',
  'https://web-course-work-13htgui6z-yoliykos-projects.vercel.app', // Це старий, можете його залишити або видалити
  'https://web-course-work-1smspbtdy-yoliykos-projects.vercel.app'  // <-- ОСЬ ВАШ ПРАВИЛЬНИЙ ДОМЕН!
];

// 2. Створюємо об'єкт налаштувань для CORS.
const VERCEL_PROJECT_DOMAIN = 'yoliykos-projects.vercel.app';

const corsOptions = {
  origin: function (origin, callback) {
    // Дозволяємо запити без origin (Postman, health checks)
    if (!origin) {
      return callback(null, true);
    }

    // Дозволяємо локальну розробку
    if (origin === 'http://localhost:3000') {
      return callback(null, true);
    }

    try {
      const hostname = new URL(origin).hostname;
      if (hostname.endsWith(VERCEL_PROJECT_DOMAIN)) {
        return callback(null, true);
      }
    } catch (e) {
      // Ігноруємо помилки парсингу URL
    }

    // Якщо жодна з умов не виконалась, блокуємо запит.
    return callback(new Error('This origin is not allowed by CORS policy'));
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json()); // Дозволяє серверу читати JSON з тіла запиту

// Підключення до MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('!!! MONGO_URI не знайдено в .env файлі. Сервер не може підключитися до БД.');
  process.exit(1);
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