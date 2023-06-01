import './global.css'
import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/index.jsx';
import { CadUser } from './pages/cadUser/index.jsx';
import { LoginUser } from './pages/loginUser/index.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadUser" element={<CadUser />} />
          <Route path="/loginUser" element={<LoginUser />} />
        </Routes>
    </>
  );
}

export default App
