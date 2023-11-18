import styles from './cardOngs.module.css'
import { PencilLine } from 'phosphor-react'
import ong from '../../imgs/ong3.jpg'
import user from '../../imgs/user.png' 
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from "../../contextApi/ThemeContext";
import { useNavigate } from 'react-router-dom';

export function CardOngs(){
    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(false);

    const URL_API_PROD = "https://tinanimalsapi.onrender.com";
    const URL_API_DEV = "http://localhost:8000";

    useEffect(() => {
        const usuarioLocalStorage = getLocalStorage();
        if (!usuarioLocalStorage) {
            setRedirect(true);
        }
        else{
            setUserName(usuarioLocalStorage.name)
        }
    }, [])

    if (redirect) {
        navigate('/login'); 
        return null; 
    }

    return (
        <div className={styles.wrapper}>
            <aside className={styles.card}>
                <img className={styles.cover} src={ong} />
                <div className={styles.profile}>
                    <img className={styles.avatar} src={user}/>
                    <br />
                    <strong>ONG: {userName.split(' ')[0]}</strong>
                    <br />
                    <span>Descrição da ong: test</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={15}/>
                        Informações
                    </a>
                </footer>
            </aside>
        </div>
    )
}