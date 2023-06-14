import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext"
import { Sidebar } from "../../components/sidebar/sidebar"
import styles from "./index.module.css"

export function AnimalsLiked (){
    const { darkMode } = useContext(ThemeContext);
    console.log("Valor do darkmode:", darkMode)
    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode} ${styles.full_height}`}>
            <article className={styles.container}>
                <header>
                    <div>
                        <div>
                            <h1>tela de editar o perfil do usuario</h1>
                        </div>
                        <Sidebar/>
                    </div>
                </header>
            </article>
        </div>
    )
}