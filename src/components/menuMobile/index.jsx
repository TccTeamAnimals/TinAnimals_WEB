import { useState, useContext, useEffect } from 'react';
import styles from './menuMobile.module.css'
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


export function MenuMobile({setUserData}){
    const { darkMode, toggleDarkMode, getLocalStorage, removeLocalStorage } = useContext(ThemeContext);
    const [userName, setUserName] = useState('');
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
    }, [])

    return (
<>
      
        <nav class=" d-lg-none d-md-none navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div className={styles.imageText}>
                    <span className={styles.image}>
                        <Link to="/#">
                            <img src={ logo } alt="TinAnimalsLogo" />
                        </Link>
                    </span>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </>
    )
}
