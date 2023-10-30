import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext"
import { Sidebar } from "../../components/sidebar/sidebar"
import styles from "./index.module.css"
import { CardAnimalsLiked } from "../../components/cardAnimalsLiked/cardAnimalsLiked"
import Button from 'react-bootstrap/Button';
import {    
    BsFillInfoSquareFill,
    BsChatRightDots,
    BsHeartbreak
} from "react-icons/bs";

export function AnimalsLiked (){
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>


            <div className={styles.margin}>
                <br />
                <div className={styles.test}>
                    <h1 className="text-center">Animais Curtidos </h1> 
                </div>
                
                <div className={styles.buttonsInfo}>
                    <div className={styles.iconText}>
                    <span>Informações da ONG</span>
                        <Button variant="primary">
                        <BsFillInfoSquareFill />
                        </Button>
                    </div>

                    <div className={styles.iconText2}>
                    <span>Falar com a ONG</span>
                        <Button variant="success">
                        <BsChatRightDots />
                        </Button>
                        
                    </div>

                    <div className={styles.iconText}>
                    <span>Remover curtida</span>
                        <Button variant="danger">
                        <BsHeartbreak />
                        </Button>
                        
                    </div>
                </div>  
            </div>
            
            <CardAnimalsLiked/>
         
            
        </div>
        
    )
}