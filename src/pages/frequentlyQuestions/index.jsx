import { useState, useContext, useEffect } from 'react';
import { Sidebar } from '../../components/sidebar/sidebar'
import { ThemeContext } from '../../contextApi/ThemeContext';
import styles from './index.module.css';
import { AccordionQuestions } from '../../components/accordionQuestions/accordion.jsx';
import { useNavigate } from 'react-router-dom';

export function Questions() { 
    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [dataInCache, setdataInCache] = useState({});

    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const usuarioLocalStorage = getLocalStorage();
        if (!usuarioLocalStorage) {
          navigate('/login');
        } else {
          setdataInCache(usuarioLocalStorage);
          window.scrollTo(0, 0);
        }
      }, []);

    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
            <br />
            <div className={styles.alingTitle}>
              <h1>Perguntas Frequentes</h1>
            </div>
            <div className={styles.margin}>
                <AccordionQuestions/>
            </div>
        </div>
    )
}