import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './cardAnimalsLiked.module.css';
import axios from 'axios';
import { ThemeContext } from '../../contextApi/ThemeContext';
import { useState, useContext, useEffect } from 'react';

export function CardAnimalsLiked() {
    const { getLocalStorage } = useContext(ThemeContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const user = getLocalStorage();
        setUserData(user);

        
        if (user.id) {
            console.log("sjikdjoasd", user.id)
            axios.get(`http://localhost:3333/api/likes`, user.id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Erro ao atualizar dados:', error);
            });
        }
    }, []);

    return  (
        <div className="card-animals-liked">
            <h1>Animais Curtidos</h1>
            <Card className={styles.card}>
                <Card.Img className={styles.cardImg} scr="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg" variant="top" />
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.textColor}>test</Card.Title>
                    <Button variant="primary">Ver Detalhes</Button>
                </Card.Body>
            </Card>
        </div>
    )
}