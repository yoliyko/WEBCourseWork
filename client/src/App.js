// client/src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ContactsPage from './pages/ContactsPage';

import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;