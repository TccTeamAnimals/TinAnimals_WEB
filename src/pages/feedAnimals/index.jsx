import { Sidebar } from "../../components/sidebar/sidebar";
import styles from "./index.module.css";
import { useContext } from "react"
import { ThemeContext } from "../../contextApi/ThemeContext";
import React from 'react';
import { ImgsFeedAnimals } from "../../components/feedImgsAnimals/imgsFeedAnimals";

export function FeedAnimals() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.margin}>
                <ImgsFeedAnimals />
            </div>
            <Sidebar />
        </div>
    );
}