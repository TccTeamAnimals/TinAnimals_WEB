import styles from './cardProfileUser.module.css'
import { ArrowRight } from 'phosphor-react'
import dog from '../../imgs/dogLogo.png'
import ong from '../../imgs/ong3.jpg'
import user from '../../imgs/user.png' 
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../contextApi/ThemeContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { BarLoader } from 'react-spinners';

export function CardProfileUser(){

  const { darkMode, getLocalStorage } = useContext(ThemeContext);
  const [ infoUserInCache, setInfoUserInCache] = useState({});
  const [dataUserOrOng, setDataUserOrOng] = useState({});
  const [Loading, setLoading] = useState(true);

  const [redirect, setRedirect] = useState(false);
  const URL_API_PROD = "https://tinanimalsapi.onrender.com";
  const URL_API_DEV = "http://localhost:8000";
  const navigate = useNavigate();

    useEffect(() => {
        const userData = getLocalStorage();
        setInfoUserInCache(userData);
    }, [])

    useEffect(() => {
        const GetUserOrOng = async () => {
          if (infoUserInCache.typeCad === 'ong') {
            try {
              const response = await axios.get(`${URL_API_PROD}/api/ong/${infoUserInCache.id}`);
              setDataUserOrOng(response.data);
              setLoading(false);
              console.log("DADOS DA ONG", response.data)
            } catch (error) {
              setLoading(false);
              console.log(error);
            }
          } else {
            try {
              const response = await axios.get(`${URL_API_PROD}/api/users/${infoUserInCache.id}`);
              setLoading(false);
              setDataUserOrOng(response.data);
              console.log("DADOS DO USUARIO", response.data)
            } catch (error) {
              setLoading(false);
              console.log(error);
            }
          }
        };
    
        if (Object.keys(infoUserInCache).length !== 0) {
          GetUserOrOng();
        }
      }, [infoUserInCache]);
        

    return (
        <div className={styles.wrapper}>
            <aside className={`${darkMode ? styles.cardBlack : styles.card}`}>
                <img className={styles.cover} src={infoUserInCache.typeCad === 'user' ? dog : ong } />
                <div className={styles.profile}>
                    <img className={styles.avatar} src={user}/>
                    <br />
                    {Loading && (
                      <div className={styles.loading}>
                        <div>
                          <BarLoader className={styles.BarLoader} color={'#36D7B7'} loading={Loading} />
                        </div>    
                      </div>
                    )}
                    <strong> { dataUserOrOng.name }</strong>
                    <br />
                    <span>  
                    {infoUserInCache.typeCad === 'user' ? 'Adotante ' : 'ONG '} </span>
                </div>

                <footer>
                    <a className={styles.colorText}>
                        Editar perfil
                        <ArrowRight size={16} />
                    </a>
                </footer>
            </aside>
        </div>
    )
}