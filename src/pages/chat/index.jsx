import { Sidebar } from '../../components/sidebar/sidebar.jsx'
import { ChatComponent } from '../../components/chat/chat.jsx'
import { useContext, useEffect, useState} from "react"
import { ThemeContext } from "../../contextApi/ThemeContext"
import styles from "./index.module.css"

export function Chat () {
    const { darkMode, getLocalStorage} = useContext(ThemeContext);
    const [ usuario, setUsuario ] = useState({});

    useEffect(() => {
        setUsuario(getLocalStorage());
    }, [])

    return (
        <div>
            <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
                <div className={styles.container}>
                    <h1 className={styles.page_title}>Chat {usuario.typeCad} </h1>
                    <ChatComponent/>
                </div>
            </div>
        </div>
    )
}