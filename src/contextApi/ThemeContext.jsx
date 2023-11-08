import React, { createContext, useEffect, useState } from 'react';
import { io } from "socket.io-client";

const WS_URL = 'ws://127.0.0.1:8000';

// Criação do contexto
const ThemeContext = createContext();

const socket = io(WS_URL);

socket.on('create-room-response', (data) => {
  console.log(data);
});

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
    localStorage.setItem('usuario', JSON.stringify({}));
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
    removeLocalStorage,
    socket
  };

  // Retornando o provedor envolvendo os componentes filhos
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };