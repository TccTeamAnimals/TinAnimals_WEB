import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import styles from './cardAnimalsLiked.module.css';
import axios from 'axios';
import { ThemeContext } from '../../contextApi/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsFillInfoSquareFill, BsChatRightDots, BsHeartbreak, BsXSquare, BsX, BsXLg } from "react-icons/bs";

export function CardAnimalsLiked() {
    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [userData, setUserData] = useState({});
    const [animalsInBD, setAnimalsInBD] = useState([]);
    const [loadingAnimalsLiked, setLoadingAnimalsLiked] = useState(false);
    
    const [showModal, setShowModal] = useState(false);
    const [selectedOngInfo, setSelectedOngInfo] = useState({});

    useEffect(() => {
        const data = getLocalStorage();
        setUserData(data);
    }, []);

    const getOngAnimal = (id) => {
        axios.get(`http://localhost:3333/api/ong/${id}`)
            .then((response) => {
                setSelectedOngInfo(response.data);
                setShowModal(true);
            })
            .catch((error) => {
                console.log('Erro ao atualizar dados:', error);
            });
    }

    useEffect(() => {
        if (userData.id) {
            let data = {
                userId: userData.id,
            }
            axios.get(`http://localhost:3333/api/likesByUser/${data.userId}`)
                .then((response) => {
                    setAnimalsInBD(response.data);
                    setLoadingAnimalsLiked(true);

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

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {animalsInBD.length === 0 ? (
                <h1 className={styles.NoneAnimal}>
                    Nenhum animal curtido ainda
                </h1>
            ) : (
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
                                                <Card.Text className={styles.nameAnimals}>
                                                    {animal.name}
                                                </Card.Text>
                                                <Card.Text>
                                                    {animal.raca} - {animal.sexo}
                                                </Card.Text>

                                                <Button
                                                    variant="primary"
                                                    onClick={() => getOngAnimal(animal.ong_id)}
                                                    className={styles.buttonTalkToOng}
                                                >
                                                    <BsFillInfoSquareFill />
                                                </Button>

                                                <Button
                                                    variant="success"
                                                    onClick={() => getOngAnimal(animal.ong_id)}
                                                    className={`${styles.buttonTalkToOng} ${styles.marginRight}`}
                                                >
                                                    <BsChatRightDots />
                                                </Button>

                                                <Button
                                                    variant="danger"
                                                    onClick={() => deleteLikedAnimalByUser(animal.id)}
                                                    className={styles.buttonTalkToOng}
                                                >
                                                    <BsXSquare />
                                                </Button>

                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            )}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton className={styles.darkModal}>
                    <Modal.Title style={{ fontSize: '2rem', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif' }}>Informações da ONG</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.darkModal}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p><strong>Nome da ONG:</strong>  {selectedOngInfo.name}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p><strong>Bairro:</strong> {selectedOngInfo.district}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <p><strong>Rua:</strong> {selectedOngInfo.address}</p>
                        </div>
                        <div className='col-lg-4'>
                            <p><strong>Número:</strong> {selectedOngInfo.numero}</p>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p><strong>Telefone:</strong> {selectedOngInfo.phone}</p>
                        </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Button variant="success" style={{ fontSize: '1.2rem', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif' }}>
                       Falar com a ONG <span className={styles.marginButtonModal}><BsChatRightDots /></span> 
                    </Button>
                    <Button variant="danger" onClick={handleCloseModal} style={{ fontSize: '1.2rem', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif' }}>
                        Fechar <span className={styles.marginButtonModal}><BsXLg /></span> 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}