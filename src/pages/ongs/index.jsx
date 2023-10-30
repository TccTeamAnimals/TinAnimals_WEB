import React from 'react'
import { Sidebar } from "../../components/sidebar/sidebar";
import { ThemeContext } from "../../contextApi/ThemeContext";
import styles from "./index.module.css";
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { CardOngs } from '../../components/cardOngs/cardOngs';


export function Ongs() {
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
            <div className={styles.margin}>
                <h1>test</h1>
                <CardOngs/>                
            </div>
        </div>
    )
}