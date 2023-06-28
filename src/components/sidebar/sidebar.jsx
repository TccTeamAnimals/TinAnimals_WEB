import { useState, useContext, useEffect } from 'react';
import styles from './sidebar.module.css'
import logo from '../../imgs/logo.jpg';
import { Link } from 'react-router-dom'
import { 
    BsArrowRightShort, 
    BsFillHouseDoorFill,
    BsSearchHeart,
    BsHeartFill,
    BsChatHeart,
    BsTencentQq,
    BsFillPinMapFill,
    BsFillPersonFill,
    BsMoonStars,
    BsFillSunFill,
    BsDoorOpen
} from "react-icons/bs";
import { ThemeContext } from '../../contextApi/ThemeContext';


export function Sidebar(){
    const { darkMode, toggleDarkMode, getLocalStorage, removeLocalStorage } = useContext(ThemeContext);
    const [userName, setUserName] = useState('');
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    useEffect(() => {
        const usuarioLocalStorage = getLocalStorage();
        if (!usuarioLocalStorage) {
            window.location.href = "/loginUser";
        }
        else{
            setUserName(usuarioLocalStorage.name)
        }
    }, [])

    return (
        <nav className={`${darkMode ? styles.sidebarDark : styles.sidebar} ${sidebarExpanded ? styles.sidebarExpanded : ''}`}>
            <header>
                <div className={styles.imageText}>
                    <span className={styles.image}>
                        <Link to="/#">
                            <img src={ logo } alt="TinAnimalsLogo" />
                        </Link>
                    </span>
                

                    <div className={`${styles.text} ${styles.headerText}`}>
                        <span className={styles.name}>TinAnimals</span>
                        <span className={styles.description}>Adote seu pet!</span>
                        <span className={styles.description}></span>
                    </div>
                </div>

                <i className={styles.toggle} onClick={() => setSidebarExpanded(!sidebarExpanded)}> <BsArrowRightShort /></i>
                    
            </header>

            <div className={styles.menuBar}>
                <div className={styles.menu}>

                    <li className={`${darkMode ? styles.seachBoxDark : styles.seachBox}`}>
                        <i className={styles.icon}> <BsSearchHeart/></i>
                        <input type="search" placeholder="Search..." />
                    </li>

                    <ul className={styles.menuLinks}>

                            <li className=''>
                                <span className={`${styles.text} ${styles.navText}`}>Bem vindo {userName}!</span>
                            </li>

                        <li className={styles.navLink}>
                            <Link to="/FirstPage">
                                <i className={styles.icon}> <BsFillHouseDoorFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Dashboard</span>
                            </Link>
                        </li>
                        <li className={styles.navLink}>
                            <a href="/feedAnimals">
                                <i className={styles.icon}> <BsTencentQq/> </i>
                                <span className={`${styles.text} ${styles.navText}`}> Feed </span>
                            </a>
                        </li>
                        <li className={styles.navLink}>
                            <Link to="/animalsLiked">
                                <i className={styles.icon}> <BsHeartFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Curtidas</span>
                            </Link>
                        </li>
                        <li className={styles.navLink}>
                            <a href="#">
                                <i className={styles.icon}> <BsChatHeart/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Chat</span>
                            </a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="#">
                                <i className={styles.icon}> <BsFillPinMapFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> ONGs</span>
                            </a>
                        </li>
                        <li className={styles.navLink}>
                            <Link to="/profileUser">
                                <i className={styles.icon}> <BsFillPersonFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Perfil</span>
                            </Link>
                        </li>
                    

                        <div className={`${styles.bottomContent} ${styles.navLink}`}>
                            <li className=''>
                                <Link to="/">
                                    <i className={styles.icon}> <BsDoorOpen/></i>
                                    <button className={`${styles.text} ${styles.navText} ${styles.button}`} onClick={removeLocalStorage}>
                                        Sair
                                    </button>
                                </Link>
                            </li>

                            <li className={styles.mode}>
                                <div className={styles.moonSun}>
                                    <i className={`${styles.icon} ${styles.moon}`}> <BsMoonStars/> </i>
                                    <i className={`${styles.icon} ${styles.sun}`}> <BsFillSunFill/> </i>
                                </div>
                                <span className={`${styles.modeText} ${styles.text}`}>Dark Mode</span>

                                <div className={styles.toggleSwitch} >
                                    <span className={`${styles.switch} ${darkMode ? styles.switchDark : styles.switchToggled}`} onClick={toggleDarkMode}></span>
                                </div>

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
