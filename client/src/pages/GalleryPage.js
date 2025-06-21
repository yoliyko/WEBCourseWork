import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL; 

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try { // Завжди добре огортати запити в try...catch
        // !!! ОСЬ ЗМІНА !!!
        const { data } = await axios.get(`${API_URL}/api/gallery`);
        setImages(data);
      } catch (error) {
        console.error("Помилка при завантаженні зображень галереї:", error);
        // Тут можна також встановити стан помилки, щоб показати її користувачу
      }
    };
    fetchImages();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Галерея</h2>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image._id} className="gallery-item">
            <img src={image.imageUrl} alt={image.title} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GalleryPage;