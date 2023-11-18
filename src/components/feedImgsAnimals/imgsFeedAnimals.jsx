import styles from "./imgsFeedAnimals.module.css";
import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbsUp, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from '../../contextApi/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export function ImgsFeedAnimals() {
    const { getLocalStorage } = useContext(ThemeContext);
    const [animals, setAnimals] = useState([]);
    const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
    const [userID, setUserID] = useState('');

    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(false);
  
    const URL_API_PROD = "https://tinanimalsapi.onrender.com";
    const URL_API_DEV = "http://localhost:8000";

    useEffect(() => {
        const usuarioLocalStorage = getLocalStorage();
        if (!usuarioLocalStorage) {
            setRedirect(true);
        } else {
            setUserID(usuarioLocalStorage.id)
        }
    }, [])

    if (redirect) {
        navigate('/login'); 
        return null; 
      }

    useEffect(() => {
        axios.get(`${URL_API_PROD}/api/ong/getAnimals/pictures`)
            .then((response) => {
                setAnimals(response.data);
            })
            .catch((error) => {
                console.log('Erro ao atualizar dados:', error);
            });
    }, []);

    const handleLike = () => {
        const id = uuidv4();
        const data = {
            id: id,
            user_id: userID,
            ong_id: animals[currentAnimalIndex].ong_id,
            animal_id: animals[currentAnimalIndex].id,
            name: animals[currentAnimalIndex].name,
            idade: animals[currentAnimalIndex].idade,
            sexo: animals[currentAnimalIndex].sexo,
            raca: animals[currentAnimalIndex].raca,
            image_url: animals[currentAnimalIndex].image_url,
        };

        axios.post(`${URL_API_PROD}/api/like`, data)
            .then((response) => {
                toast.success('Animal curtido e adicionado na sua coleção', {
                    position: "bottom-right",
                    autoClose: 1400,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Erro ao atualizar dados:', error);
            });
    };

    const handlePass = () => {
        if (currentAnimalIndex < animals.length - 1) {
            setCurrentAnimalIndex(currentAnimalIndex + 1);
        } else {
            setCurrentAnimalIndex(0);
        }
    };

    return (
        <div className={styles.cardContainer}>
            {animals.length === 0 ? (
                <h1 style={{ textAlign: 'center' }}>
                    Nenhum animal cadastrado ainda
                </h1>
            ) : (
                <>
                    <div className={styles.infoPets}>
                        <div className={styles.petInfo}>
                            <h3 className={styles.infoTitle}>Detalhes do Animal</h3>
                            <div className={styles.infoDetail}>
                                <p><span className={styles.infoLabel}>Nome:</span> {animals[currentAnimalIndex].name}</p>
                                <p><span className={styles.infoLabel}>Idade:</span> {animals[currentAnimalIndex].idade}</p>
                                <p><span className={styles.infoLabel}>Sexo:</span> {animals[currentAnimalIndex].sexo}</p>
                                <p><span className={styles.infoLabel}>Raça:</span> {animals[currentAnimalIndex].raca}</p>
                            </div>
                        </div>
                        <div className={styles.heartContainer}>
                            <span className={styles.heart}>❤️</span>
                        </div>
                    </div>
                    
                    <div className={styles.card}>
                        <img src={animals[currentAnimalIndex].image_url} alt="Animal" />
                        <div className={styles.buttons}>
                            <Button onClick={handleLike} variant="success" style={{ padding: '15px 30px', fontSize: '18px' }}>
                                <FaThumbsUp /> Curtir
                            </Button>
                            <Button onClick={handlePass} variant="primary" style={{ padding: '15px 30px', fontSize: '18px' }}>
                                <FaArrowRight /> Próximo
                            </Button>
                        </div>
                    </div>
                </>
            )}
            <ToastContainer />
        </div>
    );
}