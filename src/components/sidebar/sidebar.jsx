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
import { useState } from 'react';


export function Sidebar(){
    
    const [isSwitchToggled, setIsSwitchToggled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);


    const handleToggle = () => {
        console.log("Toggle foi clicado!");
        setIsSwitchToggled(!isSwitchToggled);
        console.log("isSwitchToggled: ", isSwitchToggled);
    };


    let classeTexto = isSwitchToggled ? "dark-mode" : "light-mode";
    
  

    return (
        <nav className={styles.sidebar}>
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
                    </div>
                </div>

                <i className={styles.toggle}> <BsArrowRightShort /></i>
                    
            </header>

            <div className={styles.menuBar}>
                <div className={styles.menu}>

                    <li className={styles.seachBox}>
                        
                        <i className={styles.icon}> <BsSearchHeart/></i>
                        <input type="search" placeholder="Search..." />
                       
                    </li>

                    <ul className={styles.menuLinks}>
                        <li className={styles.navLink}>
                            <a href="#">
                                <i className={styles.icon}> <BsFillHouseDoorFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Dashboard</span>
                            </a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="#">
                                <i className={styles.icon}> <BsTencentQq/> </i>
                                <span className={`${styles.text} ${styles.navText}`}> Feed </span>
                            </a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="#">
                                <i className={styles.icon}> <BsHeartFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Curtidas</span>
                            </a>
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
                            <a href="#">
                                <i className={styles.icon}> <BsFillPersonFill/></i>
                                <span className={`${styles.text} ${styles.navText}`}> Perfil</span>
                            </a>
                        </li>
                    

                        <div className={styles.bottomContent}>
                            <li className=''>
                                <a href="#" >
                                    <i className={styles.icon}> <BsDoorOpen/></i>
                                    <span className={`${styles.text} ${styles.navText}`}> Sair </span>
                                </a>
                            </li>


                            <li className={styles.mode}>
                                <div className={styles.moonSun}>
                                    <i className={`${styles.icon} ${styles.moon}`}> <BsMoonStars/> </i>
                                    <i className={`${styles.icon} ${styles.sun}`}> <BsFillSunFill/> </i>
                                </div>
                                <span className={`${styles.modeText} ${styles.text}`}>Dark Mode</span>

                                <div className={styles.toggleSwitch} >
                                    {/* <span className={styles.switch} onClick={handleToggle}> </span> */}
                                    <span className={`${styles.switch} ${isSwitchToggled ? styles.switchToggled : ''}`} onClick={handleToggle}></span>
                                </div>

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <script scr="scriptSidebar.js"></script>
        </nav>
       

        )
}
