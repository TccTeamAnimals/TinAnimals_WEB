import React from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { ThemeContext } from '../../contextApi/ThemeContext';
import styles from './index.module.css';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../imgs/iconPet7.jpg';
import img2 from '../../imgs/iconPet6.jpg';
import img3 from '../../imgs/iconPet5.png';
import img4 from '../../imgs/iconPet4.png';
import img5 from '../../imgs/iconPet3.png';
import img6 from '../../imgs/iconPet2.png';
import img7 from '../../imgs/iconPet1.png';
import logo from '../../imgs/logo.jpg';
import likeHeart from '../../imgs/likeHeart.png';
import iconChat from '../../imgs/iconChat.png';
import { Link } from 'react-router-dom';

export function FirstPage() {
  const { darkMode, getLocalStorage } = useContext(ThemeContext);
  const [userData, setUserData] = useState({});
  const [dataUserOrOng, setDataUserOrOng] = useState({});

  useEffect(() => {
    const usuarioLocalStorage = getLocalStorage();
    if (!usuarioLocalStorage) {
      window.location.href = '/login';
    } else {
      setUserData(usuarioLocalStorage);
    }
  }, []);

  useEffect(() => {
    const GetUserOrOng = async () => {
      if (userData.typeCad === 'ong') {
        try {
          const response = await axios.get(`http://localhost:3333/api/ong/${userData.id}`);
          setDataUserOrOng(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await axios.get(`http://localhost:3333/api/users/${userData.id}`);
          setDataUserOrOng(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    // EVITA O LOOP DE REQUISIÇÕES
    if (Object.keys(userData).length !== 0) {
      GetUserOrOng();
    }
  }, [userData]);

  return (
    <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
      <br />
      <h1 className={styles.title}>
        Bem-vindo a TinAnimals
        <img className={styles.logo} src={logo} alt="" />
      </h1>
      <Carousel className={styles.carousel} autoPlay infiniteLoop interval={5000}>
        <div className={styles.slide}>
          <img src={img1} alt="ong 1" />
        </div>
        <div className={styles.slide}>
          <img src={img2} alt="ong 2" />
        </div>
        <div className={styles.slide}>
          <img src={img3} alt="ong 3" />
        </div>
        <div className={styles.slide}>
          <img src={img4} alt="ong 4" />
        </div>
        <div className={styles.slide}>
          <img src={img5} alt="ong 5" />
        </div>
        <div className={styles.slide}>
          <img src={img6} alt="ong 6" />
        </div>
        <div className={styles.slide}>
          <img src={img7} alt="ong 7" />
        </div>
      </Carousel>
      <div className={styles.margin}>
        <h3 className={styles.titulo}>Conheça o TinAnimals</h3>
        <h6 className={styles.subtitulo}>
          {userData.typeCad === 'user'
            ? `Olá ${dataUserOrOng.name}, seja bem-vindo ao TinAnimals, aqui você pode encontrar seu novo melhor amigo e ajudar uma ONG a encontrar um novo lar para um animalzinho.`
            : `Olá ${dataUserOrOng.name}, seja bem-vindo ao TinAnimals, aqui você pode cadastrar animais que têm disponíveis e encontrar um novo lar para eles.`
          }
        </h6>

        <h6 className={styles.subtitulo}>
          {userData.typeCad === 'user'
            ? 'Nós da TinAnimals fazemos a intermediação entre a ONG e você que deseja adotar um pet de forma segura e responsável.'
            : 'Nós da TinAnimals fazemos a intermediação entre a ONG e o usuário que deseja adotar um pet de forma segura e responsável.'
          }
        </h6>

        <h6 className={styles.subtitulo}>
          {userData.typeCad === 'user'
            ? 'O TinAnimals disponibiliza uma plataforma especialmente dedicada para a adoção de animais, '
            : 'O TinAnimals disponibiliza uma plataforma especialmente dedicada para a adoção de animais,  '
          }
        </h6>

        <h6 className={styles.subtitulo}>
          {userData.typeCad === 'user'
            ? 'Onde os usuários podem encontrar o animal que deseja adotar e entrar em contato com a ONG responsável pelo animal. '
            : 'Onde os usuários podem encontrar o animal que deseja adotar e entrar em contato com a ONG para combinar sobre a adoção ou tirar dúvidas. '
          }
        </h6>
        <br /> <br /> <br />

        <div className={styles.containerInfo}>
          <div className={styles.infoItem}>
            <h1 className={styles.marginTextTitle}>+185 mil</h1>
            <h5 className={styles.marginText}>animais abandonados em 2023</h5>
          </div>
          <div className={styles.infoItem}>
            <h1 className={styles.marginTextTitle}>
              {userData.typeCad === 'user' ? '8 Ong\'s' : '+30'}
            </h1>
            <h5 className={styles.marginText}>
              {userData.typeCad === 'user' ? 'cadastradas' : 'Animais cadastrados'}
            </h5>
          </div>
          <div className={styles.infoItem}>
            <h1 className={styles.marginTextTitle}>+900 Usuários</h1>
            <h5 className={styles.marginText}>cadastrados</h5>
          </div>
          <div className={styles.infoItem}>
            <h1 className={styles.marginTextTitle}>
              {userData.typeCad === 'user' ? '+1 mil' : '+200'}
            </h1>
            <h5 className={styles.marginText}>Adoções realizadas</h5>
          </div>
        </div>

        <div className={styles.marginTop}>
          <h3 className='text-center'>
            {userData.typeCad === 'user'
              ? 'Quer fazer parte dessa corrente do bem e adotar? Entenda como funciona:'
              : 'Como irá funcionar o processo de troca de informação entre a ONG e o usuário para a adoção'
            }
          </h3>
        </div>
        <div className={styles.marginInfo}>
          <div className={styles.imageContainer}>
            <img className={styles.imagensInfo} src={img6} alt="" />
            <h5 className={styles.marginTextlowIcon}>
              {userData.typeCad === 'user'
                ? 'Procure um animal entre todas as ongs'
                : 'Cadastre os animais que têm disponível para adoção'
              }
            </h5>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.imagensInfo} src={likeHeart} alt="" />
            <h5 className={styles.marginTextlowIcon}>
              {userData.typeCad === 'user'
                ? 'Deixe seu like no animal que deseja adotar ou salvar'
                : 'O usuário poderá dar like no animal que deseja adotar'
              }
            </h5>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.imagensInfo} src={iconChat} alt="" />
            <h5 className={styles.marginTextlowIcon}>
              {userData.typeCad === 'user'
                ? 'Converse com a ong'
                : 'E assim inicie esse primeiro contato com a ong'
              }
            </h5>
            <h5>
              {userData.typeCad === 'user'
                ? 'Para realizar a adoção ou tirar alguma dúvida'
                : 'Para tratar da adoção ou tirar alguma dúvida'
              }
            </h5>
          </div>
        </div>

        <div className={styles.marginQuestions}>
          <h3 className={styles.marginTextQuestions}>Dúvidas sobre a adoção?</h3>
          <h6 className={styles.marginTextQuestions}>
            Na área de Perguntas Frequentes, você encontra as
          </h6>
          <h6 className={styles.marginTextQuestions}>
            respostas para as principais dúvidas sobre adoção.
          </h6>
          <h6 className={styles.marginTextQuestions}>
            Caso não encontre o que procura, entre em contato
          </h6>
          <h6 className={styles.marginTextQuestions}>
            conosco que teremos o maior prazer em ajudar você.
          </h6>
          
          <Link to="/questions">
            <button className={`btn btn-primary ${styles.buttonQuestion}`}>
              Ir para perguntas frequentes
            </button>
          </Link>
        </div>
        <br /><br /><br />
      </div>
      <Sidebar />
    </div>
  );
}