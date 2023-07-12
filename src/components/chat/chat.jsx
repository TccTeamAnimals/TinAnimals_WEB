import React, { useState } from 'react';
import style from './chat.module.css';

export function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      setMessages([...messages, { user: 'User 1', message: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <div className={style.chat_container}>
      <div className={style.messages_container}>
        {messages.map((message, index) => (
          <div key={index} className={style.message}>
            <span className={style.username}>{message.user}:</span>
            <span className={style.message_text}>{message.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className={style.input_container}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite sua mensagem..."
          className={style.input_field}
        />
        <button type="submit" className={style.send_button}>
          Enviar
        </button>
      </form>
    </div>
  );
}