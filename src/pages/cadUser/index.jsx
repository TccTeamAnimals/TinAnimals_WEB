import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

import Inputmask from 'inputmask';
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import logo from '../../imgs/logo.jpg';
import styles from './index.module.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

export function CadUser() {

  const [informationUsers, setInformationUsers] = useState({
    name: "",
    phone: "",
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
    typeCad: "user"
  });

  const [isCPFHovered, setIsCPFHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  useEffect(() => {
    Inputmask("(99) 9-9999-9999").mask("#phone");
    Inputmask("999.999.999-99").mask("#cpf");
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInformationUsers((prevInformationUsers) => ({
      ...prevInformationUsers,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    if (checkFields()) {
      if (informationUsers.password === informationUsers.confirmPassword) {
        event.preventDefault();
        const id = uuidv4();
        const userData = {
          ...informationUsers,
          id: id,
        }

        axios.post("http://localhost:8000/api/users", userData)
          .then((response) => {
            toast.success('Usuario cadastrado com sucesso!', {
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
            if(error.response.data.message == "cpf already used"){
              toast.error('CPF já cadastrado !', {
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
        }
      else {
        toast.warn('Senhas Não Coincidem !', {
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
    }  else {
      toast.warn('Preencha todos os campos!', {
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

  const checkFields = () => {
    if (informationUsers.name === "" || informationUsers.email === "" || informationUsers.password === "" ||
      informationUsers.confirmPassword === "" || informationUsers.phone === "" || informationUsers.cpf === "") {
      return false;
    }
    return true;
  }

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
                  className={`${informationUsers.name !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  name="name"
                  value={informationUsers.name}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Nome Completo"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationUsers.phone !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  id="phone"
                  name="phone"
                  value={informationUsers.phone}
                  onChange={handleInputChange}
                  onMouseEnter={() => setIsPhoneHovered(true)}
                  onMouseLeave={() => setIsPhoneHovered(false)}
                />
                <span
                  className={`${styles.focusInput} ${isPhoneHovered || informationUsers.phone !== "" ? styles.focused : ""}`}
                  data-placeholder="Telefone"
                ></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationUsers.cpf !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={informationUsers.cpf}
                  onChange={handleInputChange}
                  onMouseEnter={() => setIsCPFHovered(true)}
                  onMouseLeave={() => setIsCPFHovered(false)}
                />
                <span
                  className={`${styles.focusInput} ${isCPFHovered || informationUsers.cpf !== "" ? styles.focused : ""}`}
                  data-placeholder="CPF"
                ></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationUsers.email !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="email"
                  name="email"
                  value={informationUsers.email}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Email"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationUsers.password !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  name="password"
                  value={informationUsers.password}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Password"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationUsers.confirmPassword !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  name="confirmPassword"
                  value={informationUsers.confirmPassword}
                  onChange={handleInputChange}
                />
                <span className={styles.focusInput} data-placeholder="Confirm Password"></span>
              </div>

              <div className={styles.containerLoginFormBtn}>
                {/* <Link to="/FirstPage" className={styles.loginFormBtn}>
                  <span>Cadastrar</span>
                </Link> */}
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