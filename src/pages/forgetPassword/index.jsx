import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import  logo  from '../../imgs/logo.jpg';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function ForgetPassword() {

    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(


        <div className={styles.darkMode}>
            <Header/>

              <div className={styles.containerMain}>
                <div className={styles.containerLogin}>
                  <div className={styles.wrapLogin}>
                    <form className={styles.loginForm}>
                      <span className={styles.loginFormTitle}>
                        <img className={styles.img} src={logo} alt="login" />
                      </span>

                      <span className={styles.loginFormTitle}>
                        Esqueceu a Senha ?
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
                        data-placeholder='Digite o email cadastrado'>
                        </span>
                      </div>

                      <div className={styles.wrapInput}>
                        <input 
                        className={`${confirmPassword !== "" ? styles.hasVal : ""} ${styles.inputs}`}  
                        type="email" 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <span className={styles.focusInput} data-placeholder='confirme o email'>
                        </span>
                      </div>

                      <div className={styles.containerLoginFormBtn}>
                        <button className={styles.loginFormBtn}>Enviar Email</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
                
                

            <Footer/>
        </div>

    )
}