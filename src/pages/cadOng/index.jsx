import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

import Inputmask from 'inputmask';
import { useEffect } from 'react';
import { useState } from 'react';

import logo from '../../imgs/ong.png';
import styles from './index.module.css';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CadOng() {

  const [informationOng, setInformationOng] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    typeCad: "ong"
  });

  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  useEffect(() => {
    Inputmask("(99) 9-9999-9999").mask("#phone");
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInformationOng((prevInformationOng) => ({
      ...prevInformationOng,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    console.log(informationOng)
    if (informationOng.password === informationOng.confirmPassword) {
      event.preventDefault();
      // Chamada da requisição de cadastro de ONG
      axios.post("http://localhost:3333/api/ong", informationOng)
        .then((response) => {
          toast.success('ONG cadastrada com sucesso!', {
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
              window.location.href = "/login";
            }, 2800);
        })
        .catch((error) => {
          if(error.response.data.message == "email already used"){
            toast.error('🦄 Email já cadastrado !', {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
          console.log("error", error);
        });
    } else {
      toast.warn('Senhas Não Coincidem!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className={styles.darkMode}>
      <Header />
      <div className={styles.containerMain}>
        <div className={styles.containerLogin}>
          <div className={styles.wrapLogin}>
            <form className={styles.loginForm}>
              <span className={styles.loginFormTitle}>
                <img className={styles.img} src={logo} alt="login" />Cadastrar Ong
              </span>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.name !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  name="name"
                  value={informationOng.name}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Nome da Ong"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.phone !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  id="phone"
                  name="phone"
                  value={informationOng.phone}
                  onChange={handleInputChange}
                  onMouseEnter={() => setIsPhoneHovered(true)}
                  onMouseLeave={() => setIsPhoneHovered(false)}
                />
                <span
                  className={`${styles.focusInput} ${isPhoneHovered || informationOng.phone !== "" ? styles.focused : ""}`}
                  data-placeholder="Telefone"
                ></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.email !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="email"
                  name="email"
                  value={informationOng.email}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Email"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.password !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  name="password"
                  value={informationOng.password}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Password"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.confirmPassword !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  name="confirmPassword"
                  value={informationOng.confirmPassword}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Confirm Password"></span>
              </div>

              <div className={styles.containerLoginFormBtn}>
                <button type="button" onClick={handleSubmit} className={styles.loginFormBtn}>
                  <span>Cadastrar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}