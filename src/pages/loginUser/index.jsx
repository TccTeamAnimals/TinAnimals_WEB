import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import  logo  from '../../imgs/logo.jpg';
import styles from './index.module.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <Link to="/FirstPage" className={styles.loginFormBtn}>
                  <span>Login</span>
                </Link>
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
    </div>
  )
}