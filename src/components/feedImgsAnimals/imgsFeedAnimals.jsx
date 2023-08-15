import styles from "./imgsFeedAnimals.module.css";
import user from "../../imgs/user.png"
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css?inline';
import { FaThumbsUp, FaTimes, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';


export function ImgsFeedAnimals() {
    const [animals, setAnimals] = useState([]);
    const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3333/api/ong/getAnimals/pictures')
            .then((response) => {
                setAnimals(response.data);
            })
            .catch((error) => {
                console.log('Erro ao atualizar dados:', error);
            });
    }, []);

    const handlePass = () => {
        if (currentAnimalIndex < animals.length - 1) {
            setCurrentAnimalIndex(currentAnimalIndex + 1);
        }
        else {
            setCurrentAnimalIndex(0); 
        }
    };

    return (
        <div className={styles.cardContainer}>
            
            <div className={styles.infoPets}>
                <h4>nome: animal 4</h4>
                <h4>idade: 2 anos</h4>
                <h4>sexo: macho </h4>
                <h4>raça: vira lata </h4>
                <h4 className={styles.spaceTop}>Descrição: carinhoso </h4>

            </div>
            
            {animals.length > 0  && (
                <div className={styles.card}>
                    <img src={animals[currentAnimalIndex].image_url} alt="Animal" />
                    <div className={styles.buttons}>
                        <Button variant="success" style={{ padding: '15px 30px', fontSize: '18px' }}>
                            <FaThumbsUp /> Curtir
                        </Button>
                        <Button onClick={handlePass} variant="primary" style={{ padding: '15px 30px', fontSize: '18px' }}>
                            <FaArrowRight /> Próximo
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}