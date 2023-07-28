import React from 'react'
import { Sidebar } from "../../components/sidebar/sidebar";
import { ThemeContext } from "../../contextApi/ThemeContext";
import styles from "./index.module.css";
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  img1  from '../../imgs/ong3.jpg';
import  img2  from '../../imgs/ong2.png';
import  img3  from '../../imgs/ong.png';
import  img4  from '../../imgs/TinAnimalsLogo.jpg';
import  img5  from '../../imgs/user.png';


export function FirstPage() {
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
        
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
            <div>
                <h1>First Page</h1>
                <Carousel className={styles.carousel}>
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
                        <img src={img2} alt="ong 6" />
                    </div>
                    <div className={styles.slide}> 
                        <img src={img1} alt="ong 7" />
                    </div>
                </Carousel>
                <div className={styles.margin}>
                    <h3 className={styles.titulo}>Conheça o TinAnimals</h3>
                    <h6 className={styles.subtitulo}>Olá {userName}, seja bem vindo ao TinAnimals, aqui você pode encontrar seu novo melhor amigo, ou até mesmo ajudar uma ONG a encontrar um novo lar para um animalzinho.</h6>
                    <h6 className={styles.subtitulo}>
                    Nós fazemos a intermediação entre a ang e você que deseja adotar um pet de forma segura e responsável. 
                    <h6 className={styles.subtitulo}>
                    O TinAnimals disponibiliza uma plataforma especialmente dedicada para a adoção de animals,
                    onde os usuários podem encontrar o animal que deseja adotar e entrar em contato com a ONG responsável pelo animal.
                    </h6>
                    </h6>
                    <br />
                    <br /><br />
                
                    <div className={styles.containerInfo}>
                        <h1> +3.3 mil animais abandonar em 2023</h1>
                    </div>
                   

                </div>
            </div>
            <Sidebar />
        </div>
    )
}