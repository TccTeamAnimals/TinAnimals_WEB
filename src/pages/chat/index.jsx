import { Sidebar } from '../../components/sidebar/sidebar.jsx'
import { ChatComponent } from '../../components/chat/chat.jsx'
import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext"
import styles from "./index.module.css"

export function Chat () {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div>
            <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
                <div className={styles.container}>
                    <h1 className={styles.page_title}>Chat</h1>
                    <ChatComponent/>
                </div>
            </div>
        </div>
    )
}