import './global.css'
import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/index.jsx';
import { CadUser } from './pages/cadUser/index.jsx';
import { Login } from './pages/login/index.jsx';
import { ForgetPassword } from './pages/forgetPassword/index.jsx';
import { ProfileUser } from './pages/profileUser/index.jsx';
import { AnimalsLiked } from './pages/animalsLiked/index.jsx';
import { FeedAnimals } from './pages/feedAnimals/index.jsx';
import { FirstPage } from './pages/firstPage/index.jsx';
import { Chat } from './pages/chat/index.jsx';
import { Cadastros } from './pages/cadastros/index.jsx';
import { CadOng } from './pages/cadOng/index.jsx';
import { Ongs } from './pages/ongs/index.jsx';


import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadUser" element={<CadUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/profileUser" element={<ProfileUser />} />
      <Route path='/animalsLiked' element={<AnimalsLiked />} />
      <Route path='/feedAnimals' element={<FeedAnimals />} />
      <Route path='/firstPage' element={<FirstPage />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/cadastros' element={<Cadastros />} />
      <Route path='/cadOng' element={<CadOng />} />
      <Route path='/ongs' element={<Ongs />} />

    </Routes>
  );
}

export default App
