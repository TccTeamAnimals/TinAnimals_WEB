import './global.css'
import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/index.jsx';
import { CadUser } from './pages/cadUser/index.jsx';
import { LoginUser } from './pages/loginUser/index.jsx';
import { ForgetPassword } from './pages/forgetPassword/index.jsx';
import { ProfileUser } from './pages/profileUser/index.jsx';
import { AnimalsLiked } from './pages/animalsLiked/index.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadUser" element={<CadUser />} />
      <Route path="/loginUser" element={<LoginUser />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/profileUser" element={<ProfileUser />} />
      <Route path='/animalsLiked'element={<AnimalsLiked />} />

    </Routes>
  );
}

export default App
