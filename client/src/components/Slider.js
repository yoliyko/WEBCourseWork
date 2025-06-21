import React from 'react';
import { Carousel } from 'react-bootstrap';

import sliderImage1 from '../assets/slider-1.jpg';
import sliderImage2 from '../assets/slider-2.jpg';
import sliderImage3 from '../assets/slider-3.JPG';

const imageStyle = {
  height: '500px',
  objectFit: 'cover',
  width: '100%'
};

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={imageStyle}
          src={sliderImage1}
          alt="Вигляд університету"
        />
        {/* Додаємо наш новий клас сюди */}
        <Carousel.Caption className="caption-background">
          <h3>Ласкаво просимо до нашої кафедри!</h3>
          <p>Дізнайтеся більше про наші навчальні програми та дослідження.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle}
          src={sliderImage2}
          alt="Студенти в аудиторії"
        />
        {/* І сюди */}
        <Carousel.Caption className="caption-background">
          <h3>Сучасне навчання</h3>
          <p>Ми використовуємо передові методики для якісної освіти.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle}
          src={sliderImage3}
          alt="Наукова конференція"
        />
        {/* І сюди */}
        <Carousel.Caption className="caption-background">
          <h3>Активне наукове життя</h3>
          <p>Приєднуйтесь до наших наукових гуртків та конференцій.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;