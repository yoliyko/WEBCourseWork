import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactsPage = () => (
  <Container className="mt-5">
    <h2 className="text-center mb-4">Контакти</h2>
    <Row>
      <Col md={6}>
        <h3>Наша адреса</h3>
        <p><strong>Місто:</strong> Київ</p>
        <p><strong>Вулиця:</strong> Університетська, 1</p>
        <p><strong>Корпус:</strong> 3, кабінет 205</p>
        <p><strong>Телефон:</strong> +380 (44) 123-45-67</p>
        <p><strong>Email:</strong> contact@university.ua</p>
      </Col>
      <Col md={6}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.500292534069!2d30.512061315731383!3d50.4500335794754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56c524a87d%3A0x868033d86f4a332f!2z0JrQuNGX0LLRgdGM0LrQuNC5INC60L7QvNC_0YPRg9C70LDRjyDQstGD0LsuINCiLiwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1671021234567!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </Col>
    </Row>
  </Container>
);

export default ContactsPage;