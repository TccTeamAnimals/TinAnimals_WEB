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

  const insertLocalStorage = (usuario) => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  const removeLocalStorage = () => {
    console.log("passou aqui")
    localStorage.removeItem('usuario');
  }

  const getLocalStorage = () => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      return JSON.parse(usuario);
    }
    
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Definindo o valor do contexto
  const themeContextValue = {
    darkMode,
    toggleDarkMode,
    insertLocalStorage,
    getLocalStorage,
    removeLocalStorage
  };

  // Retornando o provedor envolvendo os componentes filhos
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };