import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white mt-auto p-4 text-center">
    <Container>
      <Row>
        <Col>
          <p>© {new Date().getFullYear()} Кафедра суспільних наук. Всі права захищено.</p>
          <p>Адреса: м. Київ, вул. Університетська, 1 | Email: contact@university.ua</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;