import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import  logo  from '../../imgs/logo.jpg';
import styles from './index.module.css';

import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import { ThemeContext } from '../../contextApi/ThemeContext';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { insertLocalStorage } = useContext(ThemeContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://tinanimals-api.vercel.app/api/users/login", { email, password })
      .then((response) => {
        // Se o login estiver na tabela de usuários, faça o login do usuário
        insertLocalStorage(response.data);
        toast.success('Usuário Logado Com Sucesso!', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
        setTimeout(() => {
          window.location.href = "/firstPage";
        }, 1800);
      })
      .catch(() => {
        axios.post("https://tinanimals-api.vercel.app/api/ong/login", { email, password })
          .then((response) => {
            insertLocalStorage(response.data);
            toast.success('ONG Logada Com Sucesso!', {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            
            setTimeout(() => {
              window.location.href = "/firstPage";
            }, 1800);
          })
          .catch(() => {
            toast.warn('Login ou Senha Inválidos 😕 ', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          });
      });
  }
  return (
    <div className={styles.darkMode}>
      <Header />
        <div className={styles.containerMain}>
          <div className={styles.containerLogin}>
            <div className={styles.wrapLogin}>
              <form className={styles.loginForm}>
                <span className={styles.loginFormTitle}>
                  <img className={styles.img} src={logo} alt="login" />
                </span>
                <span className={styles.loginFormTitle}>
                  Faça seu Login
                </span>

                <div className={styles.wrapInput}>
                  <input 
                  className={`${email !== "" ? styles.hasVal : ""} ${styles.inputs}`}  
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                  <span 
                  className={styles.focusInput} 
                  data-placeholder='Email'>
                  </span>
                </div>

                <div className={styles.wrapInput}>
                  <input 
                    className={`${password !== "" ? styles.hasVal : ""} ${styles.inputs}`}  
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e)
                      }
                    }}
                    />
                  <span className={styles.focusInput} data-placeholder='Password'>
                  </span>
                </div>

                <div className={styles.containerLoginFormBtn}>
                {/* <Link to="/FirstPage" className={styles.loginFormBtn}>
                  <span>Login</span>
                </Link> */}
                <button type="button" onClick={handleSubmit} className={styles.loginFormBtn}>
                  <span>Login</span>
                </button>
                </div>

                <div className={styles.textCenter}> 
                  <Link to="/forgetPassword" className={styles.linkCad}>
                    <span className={styles.linkCad}>
                    Esqueceu a senha?
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}