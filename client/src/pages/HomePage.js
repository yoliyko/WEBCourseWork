import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from '../components/Slider';
import { Container, Row, Col, Card } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL; 
const HomePage = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const { data } = await axios.get(`${API_URL}/api/data`);
      setLatestNews(data);
    };
    fetchLatestNews();
  }, []);

  return (
    <>
      <Slider />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Головні новини</h2>
        <Row>
          {latestNews.map(newsItem => (
            <Col key={newsItem._id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={newsItem.imageUrl} />
                <Card.Body>
                  <Card.Title>{newsItem.title}</Card.Title>
                  <Card.Text>{newsItem.content.substring(0, 100)}...</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;