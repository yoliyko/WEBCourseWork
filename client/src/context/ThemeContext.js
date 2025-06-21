import React, { createContext, useState, useEffect } from 'react';

// Створюємо сам контекст
export const ThemeContext = createContext();

// Створюємо компонент-провайдер
export const ThemeProvider = ({ children }) => {
  // Створюємо стан для теми. Початкове значення беремо з localStorage, або 'light' за замовчуванням
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Цей ефект буде спрацьовувати щоразу, коли змінюється стан 'theme'
  useEffect(() => {
    // Встановлюємо атрибут data-bs-theme на тег <body>
    document.body.setAttribute('data-bs-theme', theme);
    // Зберігаємо вибір користувача в localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Функція для перемикання теми
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Надаємо поточну тему і функцію для її зміни усім дочірнім компонентам
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};