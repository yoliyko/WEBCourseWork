// client/src/pages/NewsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import NewsCard from '../components/NewsCard'; // Переконайтесь, що у вас є цей компонент

const NewsPage = () => {
  // Стан для зберігання списку новин
  const [news, setNews] = useState([]);
  // Стан для відстеження процесу завантаження
  const [loading, setLoading] = useState(true);
  // Стан для зберігання можливих помилок
  const [error, setError] = useState('');

  // useEffect спрацює один раз при завантаженні компонента
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Робимо запит до нашого API
        const { data } = await axios.get('http://localhost:5000/api/news');
        setNews(data); // Зберігаємо отримані дані у стан
      } catch (err) {
        // Якщо сталася помилка, зберігаємо її текст
        setError('Не вдалося завантажити новини. Спробуйте пізніше.');
        console.error("Помилка axios:", err);
      } finally {
        // У будь-якому випадку прибираємо індикатор завантаження
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Порожній масив означає, що ефект виконається лише один раз

  // Показуємо спіннер, поки йде завантаження
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Завантаження...</span>
        </Spinner>
      </Container>
    );
  }

  // Показуємо повідомлення про помилку, якщо вона сталася
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  // Основний вміст сторінки, якщо все завантажилось успішно
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Усі новини</h1>
      <Row>
        {/* 
          Перевіряємо, чи є новини. Якщо масив порожній, показуємо повідомлення.
          Інакше - проходимось по масиву новин і для кожної рендеримо компонент NewsCard.
        */}
        {news.length === 0 ? (
          <Col>
            <Alert variant="info">На даний момент новин немає.</Alert>
          </Col>
        ) : (
          news.map((newsItem) => (
            // Тут ми використовуємо NewsCard для кожної новини
            <NewsCard key={newsItem._id} newsItem={newsItem} />
          ))
        )}
      </Row>
    </Container>
  );
};

// ОБОВ'ЯЗКОВО експортуємо компонент за замовчуванням
export default NewsPage;