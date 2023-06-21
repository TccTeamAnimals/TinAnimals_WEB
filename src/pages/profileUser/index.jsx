import { Sidebar } from '../../components/sidebar/sidebar';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CardProfileUser } from '../../components/cardProfileUser/cardProfileUser';
import { MainContainer } from '../../components/ContainerProfileUser/container.jsx';
import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext"

export function ProfileUser () {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
            <Sidebar/>
            <div className={styles.margin}>
                <br />
                <h3>Edite seu perfil</h3>
                <br />
            </div>
            <div className={styles.marginLeftCard}>
                <CardProfileUser/>
            </div>
                
            
        </div>
    )
}