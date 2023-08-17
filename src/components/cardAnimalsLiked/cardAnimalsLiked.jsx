import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './cardAnimalsLiked.module.css';
import axios from 'axios';
import { ThemeContext } from '../../contextApi/ThemeContext';
import { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CardAnimalsLiked() {
    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [userData, setUserData] = useState({});
    const [animalsInBD, setAnimalsInBD] = useState([]);

    useEffect(() => {
        const data = getLocalStorage();
        setUserData(data);
    }, []);

    useEffect(() => {
        if (userData.id) {
            let data = {
                userId: userData.id,
            }
            axios.get(`http://localhost:3333/api/likesByUser/${data.userId}`)
                .then((response) => {
                    setAnimalsInBD(response.data);
                })
                .catch((error) => {
                    console.log('Erro ao atualizar dados:', error);
                });
        }
    }, [userData.id]);


    const deleteLikedAnimalByUser = (id) => {
        axios.delete(`http://localhost:3333/api/removelikesByUser/${id}`)
            .then((response) => {
                console.log(response.data);
                toast.success('Curtida removida com sucesso!', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setAnimalsInBD(animalsInBD.filter((animal) => animal.id !== id));
            })
            .catch((error) => {
                console.log('Erro ao deletar dados:', error);
            });
    }

    return  (
        <div className={`${darkMode ? (animalsInBD.length > 4 ? styles.dark_mode : styles.dark_modeVW) : (animalsInBD.length > 4 ? styles.light_mode : styles.light_modeVW)}`}>
            <br />
         
            <div className={`${styles.divCard} ${styles.cardContainer}`}>
                <div className='container'>
                    <div className='row'>
                        {animalsInBD.map((animal) => (
                            <div className='col-lg-3 mb-5' key={animal.id}>
                                <Card className={styles.card}>
                                    <Card.Img className={styles.cardImg} variant="top" src={animal.image_url} />
                                    <Card.Body className={styles.cardBody}>
                                        <Card.Title>{animal.description}</Card.Title>
                                        <Card.Text>
                                            {animal.name}
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => deleteLikedAnimalByUser(animal.id)}>Remover curtida</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <ToastContainer />
                </div>
            </div>

        </div>
    )
}