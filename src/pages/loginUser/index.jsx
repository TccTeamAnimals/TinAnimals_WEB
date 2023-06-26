import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import  logo  from '../../imgs/logo.jpg';
import styles from './index.module.css';

import { Link } from 'react-router-dom'
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

export function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3333/api/users/login", { email, password })
      .then((response) => {
        toast.success('Usuario Logado Com Sucesso!', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          window.location.href = "/firstPage";
        }, 2800);
      })
      .catch((error) => {
        console.log("error", error);
        if(error.response.data.message == "user not found"){
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
        }
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
                  Bem vindo!
                </span>

                <span className={styles.loginFormTitle}>
                  <img className={styles.img} src={logo} alt="login" />
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
                  <span className={styles.txt1}>esqueceu a senha ? <br /></span>
                  <Link to="/forgetPassword" className={styles.linkCad}>
                    <span className={styles.linkCad}>
                      Click Aqui !
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