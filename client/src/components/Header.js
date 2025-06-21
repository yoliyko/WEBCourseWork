import React, { useContext } from 'react'; // Додаємо useContext
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; // Додаємо Button
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Імпортуємо наш контекст
import { SunFill, MoonFill } from 'react-bootstrap-icons'; // Імпортуємо іконки
import logo from '../assets/logo.png';

const Header = () => {
  // Отримуємо поточну тему і функцію для перемикання з контексту
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          Кафедра суспільних наук
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">Про сайт</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Галерея</Nav.Link>
            <Nav.Link as={Link} to="/news">Новини</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Контакти</Nav.Link>
            {/* Наша нова кнопка */}
            <Button variant="outline-light" onClick={toggleTheme} className="ms-lg-2">
              {theme === 'light' ? <MoonFill /> : <SunFill />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;