import React from 'react'
import { Sidebar } from "../../components/sidebar/sidebar";
import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext";
import styles from "./index.module.css";

export function FirstPage() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.margin}>
                <h1>First Page</h1>
            </div>
            
            <Sidebar />
        </div>
    )
}