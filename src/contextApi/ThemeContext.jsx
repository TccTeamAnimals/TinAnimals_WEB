import React, { createContext, useEffect, useState } from 'react';

// Criação do contexto
const ThemeContext = createContext();

// Provedor do contexto
const ThemeProvider = ({ children }) => {
  let cacheDarkMode = JSON.parse(localStorage.getItem('darkMode'))

  if(!cacheDarkMode) {
    cacheDarkMode = false
  }

  const [darkMode, setDarkMode] = useState(cacheDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Definindo o valor do contexto
  const themeContextValue = {
    darkMode,
    toggleDarkMode,
  };

  // Retornando o provedor envolvendo os componentes filhos
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };