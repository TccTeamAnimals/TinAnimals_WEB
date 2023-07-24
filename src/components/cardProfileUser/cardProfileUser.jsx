import styles from './cardProfileUser.module.css'
import { ArrowRight } from 'phosphor-react'
import dog from '../../imgs/dogLogo.png'
import ong from '../../imgs/ong3.jpg'
import user from '../../imgs/user.png' 
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../contextApi/ThemeContext';
import axios from 'axios';

export function CardProfileUser(){

    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [ infoUserInCache, setInfoUserInCache] = useState({});
    const [dataUserOrOng, setDataUserOrOng] = useState({});

    useEffect(() => {
        const userData = getLocalStorage();
        setInfoUserInCache(userData);
    }, [])

    useEffect(() => {
        const GetUserOrOng = async () => {
          if (infoUserInCache.typeCad === 'ong') {
            try {
              const response = await axios.get(`http://localhost:3333/api/ong/${infoUserInCache.id}`);
              setDataUserOrOng(response.data);
              console.log("DADOS DA ONG", response.data)
            } catch (error) {
              console.log(error);
            }
          } else {
            try {
              const response = await axios.get(`http://localhost:3333/api/users/${infoUserInCache.id}`);
              setDataUserOrOng(response.data);
              console.log("DADOS DO USUARIO", response.data)
            } catch (error) {
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
                    <strong> { dataUserOrOng.name }</strong>
                    <br />
                    <span>  
                    {infoUserInCache.typeCad === 'user' ? 'Adotante ' : 'Adoção Responsavel '} </span>
                </div>

                <footer>
                    <a href="#">
                        Editar perfil
                        <ArrowRight size={16} />
                    </a>
                </footer>
            </aside>
        </div>
    )
}