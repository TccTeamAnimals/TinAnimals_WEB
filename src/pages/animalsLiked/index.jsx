import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext"
import { Sidebar } from "../../components/sidebar/sidebar"
import styles from "./index.module.css"
import { CardAnimalsLiked } from "../../components/cardAnimalsLiked/cardAnimalsLiked"

export function AnimalsLiked (){
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>

            <div className={styles.margin}>
                <br />
                <h1 className="text-center">Animais Curtidos </h1>
            </div>
            <CardAnimalsLiked/>
            <Sidebar/>
            
        </div>
        
    )
}