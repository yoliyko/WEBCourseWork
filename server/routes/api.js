
const express = require('express');
const router = express.Router();

// Імпортуємо моделі. Переконайтесь, що шляхи правильні.
const News = require('../models/News');
const GalleryImage = require('../models/GalleryImage');

// GET: Маршрут для отримання ВСІХ новин
// Саме до нього звертається ваша сторінка NewsPage
router.get('/news', async (req, res) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 });
    res.status(200).json(allNews); // Відправляємо дані клієнту зі статусом 200 (OK)
  } catch (error) {
    console.error('Помилка при отриманні новин з БД:', error);
    res.status(500).json({ message: 'Помилка на сервері при отриманні новин' });
  }
});

// GET: Отримати 10 останніх новин для головної сторінки
router.get('/news/latest', async (req, res) => {
    const latestNews = await News.find().sort({ createdAt: -1 }).limit(10);
    res.json(latestNews);
});

// GET: Отримати всі зображення для галереї
router.get('/gallery', async (req, res) => {
    const images = await GalleryImage.find();
    res.json(images);
});

module.exports = router;