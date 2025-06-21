import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await axios.get('http://localhost:5000/api/gallery');
      setImages(data);
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