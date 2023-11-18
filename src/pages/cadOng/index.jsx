import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

import Inputmask from 'inputmask';
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import logo from '../../imgs/ong.png';
import styles from './index.module.css';

import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CadOng() {

  const [informationOng, setInformationOng] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    numero: "",
    cep: "",
    password: "",
    confirmPassword: "",
    typeCad: "ong"
  });

  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  const [redirectToFirstPage, setRedirectToFirstPage] = useState(false);
  const navigate = useNavigate();
  const URL_API_PROD = "https://tinanimalsapi.onrender.com";
  const URL_API_DEV = "http://localhost:8000";

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

  const handleCepSearch = () => {
    if (informationOng.cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${informationOng.cep}/json/`)
        .then((response) => {
          const { data } = response;
          if (!data.erro) {
            setInformationOng((prevInformationOng) => ({
              ...prevInformationOng,
              address: data.logradouro,
              district: data.bairro,
            }));
          } else {
            toast.error('CEP não encontrado', {
              position: 'bottom-right',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do CEP', error);
          toast.error('Erro ao buscar informações do CEP', {
            position: 'bottom-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        });
    }
  };

  const handleSubmit = (event) => {
    console.log("info ong", informationOng)
    // const filds = checkFields();
    if (checkFields()) {
      if (informationOng.password === informationOng.confirmPassword) {
        event.preventDefault();
        const id = uuidv4();
        const ongData = {
          ...informationOng,
          id: id,
        }

        console.log("info ong", ongData)
        // Chamada da requisição de cadastro de ONG
        axios.post(`${URL_API_PROD}/api/ong`, ongData)
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
              // setTimeout(() => {
              //   window.location.href = "/login";
              // }, 2800);

              setRedirectToFirstPage(true);
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
    else {
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
    if (
      informationOng.name === "" || 
      informationOng.email === "" || 
      informationOng.address === "" ||
      informationOng.district === "" ||
      informationOng.numero === "" ||
      informationOng.cep === "" || 
      informationOng.password === "" || 
      informationOng.confirmPassword === "" || 
      informationOng.phone === "") {
      return false;
    }
    return true;
  }

  if (redirectToFirstPage) {
    navigate('/login'); 
    return null; 
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
                  required
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
                  required
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

              <div className={styles.wrapInput2}>
                <div className={styles.inputContainer}>
                  <input
                    className={`${informationOng.cep !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                    type="text"
                    name="cep"
                    value={informationOng.cep}
                    onChange={handleInputChange}
                    onBlur={handleCepSearch}
                    required
                   />
                    <span className={styles.focusInput} data-placeholder="CEP (Apenas os numeros)"></span>
                </div>
                
                <div className={styles.inputContainer}>
                  <input
                    className={`${informationOng.address !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                    type="text"
                    name="address"
                    value={informationOng.address}
                    onChange={handleInputChange}
                    required
                  />
                  <span className={styles.focusInput} data-placeholder="Rua"></span>
                </div>
              </div>


              <div className={styles.wrapInput2}>
                <div className={styles.inputContainer}>
                  <input
                    className={`${informationOng.district !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                    type="text"
                    name="district"
                    value={informationOng.district}
                    onChange={handleInputChange}
                    required
                  />
                  <span className={styles.focusInput} data-placeholder="Bairro"></span>
                </div>

                
                <div className={styles.inputContainer}>
                  <input
                    className={`${informationOng.numero !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                    type="text"
                    name="numero"
                    value={informationOng.numero}
                    onChange={handleInputChange}
                    required
                  />
                  <span className={styles.focusInput} data-placeholder="Numero"></span>
                </div>


              </div>


              
              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.password !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  name="password"
                  value={informationOng.password}
                  onChange={handleInputChange}
                  required
                />
                <span className={styles.focusInput} data-placeholder="Password"></span>
              </div>

              <div className={styles.wrapInput}>
                <input
                  className={`${informationOng.confirmPassword !== "" ? styles.hasVal : ""} ${styles.inputs}`}
                  type="password"
                  name="confirmPassword"
                  required
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
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}