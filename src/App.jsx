import './global.css'
import React from 'react' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { Questions } from './pages/frequentlyQuestions/index.jsx';
import { ImportAnimal } from './pages/registerAnimal/index.jsx';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "./contextApi/ThemeContext";

import { Chat_test } from './pages/chat_test/index.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Sidebar } from './components/sidebar/sidebar';
// import { MenuMobile } from './components/menuMobile';

function App() {
  const { getLocalStorage } = useContext(ThemeContext);
  const [userData, setUserData] = useState({});
 
  useEffect(() => {
    const data = getLocalStorage();
    setUserData(data); 
}, []);
  

  return (
    <>
    {userData && typeof userData === 'object' && Object.keys(userData).length > 0 && (
        <> 
        <Sidebar userData={userData} setUserData={setUserData}/>
        {/* <MenuMobile userData={userData} setUserData={setUserData}/> */}
        </>

        
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadUser" element={<CadUser />} />
        <Route path='/cadOng' element={<CadOng />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/profileUser" element={<ProfileUser />} />
        <Route path='/animalsLiked' element={<AnimalsLiked />} />
        <Route path='/feedAnimals' element={<FeedAnimals />} />
        <Route path='/firstPage' element={<FirstPage />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/cadastros' element={<Cadastros />} />
        <Route path='/ongs' element={<Ongs />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/importAnimal' element={<ImportAnimal />} />
      </Routes>
    </>
  );
}

export default App
