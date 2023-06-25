import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
// import './index.css';
import Inputmask from 'inputmask';
import { useEffect } from 'react';
import logo from '../../imgs/logo.jpg';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function CadUser() {
  useEffect(() => {
    Inputmask("(99) 9-9999-9999").mask("#phone");
    Inputmask("999.999.999-99").mask("#cpf");
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCPFHovered, setIsCPFHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  return (
    <div className={styles.darkMode}>
      <Header />
      <div className={styles.containerMain}>
        <div className={styles.containerLogin}>
          <div className={styles.wrapLogin}>
            <form className={styles.loginForm}>
              <span className={styles.loginFormTitle}>
                <img className={styles.img} src={logo} alt="login" />Cadastre-se!
              </span>

              <div className={styles.wrapInput}>
                <input
                  className={`${name !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Nome Completo"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${phone !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onMouseEnter={() => setIsPhoneHovered(true)}
                  onMouseLeave={() => setIsPhoneHovered(false)}
                />
                <span
                  className={`${styles.focusInput} ${isPhoneHovered || phone !== "" ? styles.focused : ""}`}
                  data-placeholder="Telefone"
                ></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${cpf !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  onMouseEnter={() => setIsCPFHovered(true)}
                  onMouseLeave={() => setIsCPFHovered(false)}
                />
                <span
                  className={`${styles.focusInput} ${isCPFHovered || cpf !== "" ? styles.focused : ""}`}
                  data-placeholder="CPF"
                ></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${email !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Email"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${password !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Password"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${confirmPassword !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Confirm Password"></span>
              </div>

              <div className={styles.containerLoginFormBtn}>
                <Link to="/FirstPage" className={styles.loginFormBtn}>
                  <span>Register</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}