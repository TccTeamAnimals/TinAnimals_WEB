import { useState, useContext, useEffect } from 'react';
import styles from './sidebar.module.css'
import logo from '../../imgs/logo.jpg';
import { Link } from 'react-router-dom'
import { 
    BsArrowRightShort,
    BsArrowLeftShort, 
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


export function Sidebar({setUserData}){
    const { darkMode, toggleDarkMode, getLocalStorage, removeLocalStorage } = useContext(ThemeContext);
    const [userName, setUserName] = useState('');
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    const [typecad, setTypeCad] = useState('');	

    useEffect(() => {
        const usuarioLocalStorage = getLocalStorage();
        if (!usuarioLocalStorage) {
           console.log("não tem usuario logado");
        }
        else{
            setTypeCad(usuarioLocalStorage.typeCad)
            setUserName(usuarioLocalStorage.name)
        }

        if (window.innerWidth < 768) {
            setSidebarExpanded(false);
        }
    }, [])

  

    return (
        <nav className={` ${darkMode ? styles.sidebarDark : styles.sidebar} ${sidebarExpanded ? styles.sidebarExpanded : styles.sidebarCollapsed}`}>
            <header>
                <div className={styles.imageText}>
                    <span className={styles.image}>
                        <Link to="/#">
                            <img src={ logo } alt="TinAnimalsLogo" />
                        </Link>
                    </span>
                </div>

                <i className={styles.toggle} onClick={() => setSidebarExpanded(!sidebarExpanded)}>  
                    {sidebarExpanded && (
                       <BsArrowLeftShort/>
                    )}
                    {!sidebarExpanded && (
                       <BsArrowRightShort />
                    )}
                </i>

            </header>

            <div className={styles.menuBar}>
                <div className={`${styles.text} ${styles.headerText}`}>
                    <p className={styles.name}>TinAnimals</p>
                    <p className={styles.description}>{typecad == 'user' ? "Adote Seu Pet!" : "Cadastre Animais!"  }</p>
                </div>
                <div className={styles.menu}>


                    {/* <li className={`${darkMode ? styles.seachBoxDark : styles.seachBox}`}>
                        <i className={styles.icon}> <BsSearchHeart/></i>
                        <input  className={styles.inputSearch} type="search" placeholder="Search..." />
                    </li> */}

                    <ul className={styles.menuLinks}>

                            {/* <li className=''>
                                <span className={`${styles.text2} ${styles.navText}`}>Olá {userName.split(' ')[0]} {typecad === 'ong' ? '🏪' : '🐶'} </span>
                            </li> */}

                        <li className={styles.navLink}>
                            <Link to="/FirstPage">
                                <i className={styles.icon}> <BsFillHouseDoorFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Home</span>
                            </Link>
                        </li>

                        {typecad !== 'ong' && (
                            <li className={styles.navLink}>
                                <Link to="/feedAnimals">
                                    <i className={styles.icon}> <BsTencentQq/> </i>
                                    <span className={`${styles.text} ${styles.navText}`}> Feed </span>
                                </Link>
                            </li>
                        )}

                        {typecad !== 'user' && (
                            <li className={styles.navLink}>
                                <Link to="/importAnimal">
                                    <i className={styles.icon}> <BsTencentQq/> </i>
                                    <span className={`${styles.text} ${styles.navText}`}> Cadastrar Animal </span>
                                </Link>
                            </li>
                        )}
                        
                        {typecad !== 'ong' && (
                            <li className={styles.navLink}>
                                <Link to="/animalsLiked">
                                    <i className={styles.icon}> <BsHeartFill/></i>
                                    <span className={`${styles.text} ${styles.navText}`}> Curtidas</span>
                                </Link>
                            </li>
                        )}

                        <li className={styles.navLink}>
                            <Link to="/chat">
                                <i className={styles.icon}> <BsChatHeart/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Chat</span>
                            </Link>
                        </li>

                        <li className={styles.navLink}>
                            <Link to="/profileUser">
                                <i className={styles.icon}> <BsFillPersonFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Perfil</span>
                            </Link>
                        </li>
                    

                        <div className={`${typecad === 'user' ? `${styles.bottomContent} ${styles.navLink}` : `${styles.bottomContentOng} ${styles.navLink}`}`}>
                            <li className=''>
                                <Link to="/" onClick={() => {
                                        removeLocalStorage();
                                        setUserData({}); 
                                    }}>
                                    <i className={styles.icon}> <BsDoorOpen/></i>
                                    <button className={`${styles.text} ${styles.navText} ${styles.button}`} >
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
