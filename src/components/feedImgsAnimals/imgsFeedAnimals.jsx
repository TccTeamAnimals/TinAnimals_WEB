import styles from "./imgsFeedAnimals.module.css";
import user from "../../imgs/user.png"
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css?inline';
import { FaThumbsUp, FaTimes, FaArrowRight } from 'react-icons/fa';

export function ImgsFeedAnimals() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={user} alt="User" />
                <div className={styles.buttons}>
                <Button variant="danger" style={{ padding: '15px 30px', fontSize: '18px' }}>
                    <FaTimes /> Rejeitar
                </Button>
                <Button variant="success" style={{ padding: '15px 30px', fontSize: '18px' }}>
                    <FaThumbsUp /> Curtir
                </Button>
                <Button variant="primary" style={{ padding: '15px 30px', fontSize: '18px' }}>
                    <FaArrowRight /> Passar
                </Button>
                
                </div>
            </div>
        </div>
    );
}