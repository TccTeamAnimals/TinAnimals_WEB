import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contextApi/ThemeContext';
import style from './chat.module.css';
import userImage from '../../imgs/user.png';

export function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chats, setChats] = useState([]);
  
  const { getLocalStorage, socket } = useContext(ThemeContext);
  const { state } = useLocation();

  const {
    id,
    typeCad
  } = getLocalStorage()

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const messageText = inputValue.trim()
    if (messageText !== '') {
      setMessages([...messages, { sender: id, recive: 'Ong', message: messageText }]);
      setInputValue('');
    }
  };

  const getChats = async () => {
    const params = {}
    if(typeCad === 'user'){
      params.user_id = id;
    } else {
      params.ong_id = id;
    }

    const response = await axios.get('http://localhost:8000/api/chats', {
      params
    });

    setChats(response.data);

    if(state.ong_id){
      choseChat(state.ong_id)
    }
  }

  const choseChat = async (toId) => {
    const params = {}

    if(typeCad === 'user'){
      params.user_id = id;
      params.ong_id = toId;
    } else {
      params.ong_id = id;
      params.user_id = toId;
    }

    socket.emit('join-room', params)
  }

  useEffect(() => {
    if(state){
      getChats();
    }
  },[state])

  socket.on('join-room-response', (message) => {
    setMessages(JSON.parse(message.messages))
  })

  socket.on('message', (message) => {

  })

  return (
    <div className={style.container}>
      {chats.map((chat, index) => (
        <div key={index} className={style.chat_contaiener}>
          <div className={style.chat_user}>
            <img className={style.chat_user_image} src={userImage} alt="" />
            <div className={style.chat_user_text}>
              <strong>{chat.chat.name}</strong>
              <p>Last Message</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className={style.message_container}>
        <div className={style.messages}>

          {messages.map((message, index) => (
            <div key={index} className={`${message.sender === id ? style.message_send : style.message_recive}`}>
              <p className={style.message}>
                {message.message}
              </p>
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
          <button type="submit" className={style.input_button} >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}