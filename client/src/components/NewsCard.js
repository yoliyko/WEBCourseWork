import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Цей компонент приймає один об'єкт новини (newsItem) як пропс
const NewsCard = ({ newsItem }) => {
  return (
    // Використовуємо Col, щоб картка була частиною сітки Bootstrap
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100">
        {/* Робимо картинку посиланням на детальну сторінку новини */}
        <Link to={`/news/${newsItem._id}`}>
          <Card.Img 
            variant="top" 
            src={newsItem.imageUrl} 
            alt={newsItem.title} 
            style={{ height: '200px', objectFit: 'cover' }} 
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{newsItem.title}</Card.Title>
          <Card.Text>
            {/* Показуємо лише перші 100 символів тексту */}
            {newsItem.content.substring(0, 100)}...
          </Card.Text>
          {/* Робимо кнопку посиланням на детальну сторінку */}
          <Link to={`/news/${newsItem._id}`} className="mt-auto btn btn-primary">
            Читати далі
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;