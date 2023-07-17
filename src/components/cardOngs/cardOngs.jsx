import styles from './cardOngs.module.css'
import { PencilLine } from 'phosphor-react'
import ong from '../../imgs/ong3.jpg'
import user from '../../imgs/user.png' 
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from "../../contextApi/ThemeContext";

export function CardOngs(){
    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const usuarioLocalStorage = getLocalStorage();
        if (!usuarioLocalStorage) {
            window.location.href = "/login";
        }
        else{
            setUserName(usuarioLocalStorage.name)
        }
    }, [])

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