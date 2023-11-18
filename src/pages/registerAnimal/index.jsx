import { Sidebar } from '../../components/sidebar/sidebar';
import styles from './index.module.css';
import { ThemeContext } from '../../contextApi/ThemeContext';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


export function ImportAnimal() {
    const { darkMode, getLocalStorage } = useContext(ThemeContext);
    const [userData, setUserData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [animalsInBD, setAnimalsInBD] = useState([]);
    const [animalName, setAnimalName] = useState("");
    const [animalIdade, setAnimalIdade] = useState("");
    const [animalRaca, setAnimalRaca] = useState("");
    const [animalSexo, setAnimalSexo] = useState("");


    const [redirectToFirstPage, setRedirectToFirstPage] = useState(false);
    const URL_API_PROD = "https://tinanimalsapi.onrender.com";
    const URL_API_DEV = "http://localhost:8000";

    const navigate = useNavigate();

    useEffect(() => {
        const userData = getLocalStorage();
        setUserData(userData);

        axios.get(`http://localhost:8000/api/ong/getAnimalByOng/${userData.id}`)
            .then((response) => {
                setAnimalsInBD(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Erro ao atualizar dados:', error);
            });
        navigate("/importAnimal");
    }, []);

    const getHandlerImg = (event) => {
        setSelectedImage(event.target.files[0]);
    }

    const deleteAnimal = (id) => {
        axios.delete(`http://localhost:8000/api/ong/deleteAnimalByOng/${id}`)
        .then((response) => {
            toast.success('Sucesso Animal Deletado', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
        })
        .catch((error) => {
            console.log('Erro ao delete o animal:', error);
        });
    }


    

    const handleImportPicture = async () => {
        if (!selectedImage) {
            toast.warning('Por favor selecione uma imagem', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }

        const id = uuidv4();
        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('upload_preset', 'mq1qnicd');

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dzghsdauo/image/upload`,
                formData
            );

            const imageUrl = response.data.secure_url;
            const nameImg = response.data.original_filename;
            
            const ongData = {
                id: id,
                ongId: userData.id,
                name: animalName,
                imageUrl: imageUrl,
                idade: animalIdade,
                raca: animalRaca,
                sexo: animalSexo,
            };

            axios.post(`${URL_API_PROD}/api/ong/register_animal`, ongData)
                .then((response) => {
                    toast.success('Animal cadastrado com sucesso', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });

                        // setAnimalsInBD([...animalsInBD, ongData]);
                        setTimeout(() => {
                            window.location.href = "/importAnimal";
                        }, 800);
                })
                .catch((error) => {
                    console.log('Erro ao atualizar dados:', error);
                });

        } catch (error) {
            console.log('Erro ao fazer upload da imagem:', error);
        }
    }

    return (
        <div className={`${darkMode ? (animalsInBD.length > 4 ? styles.dark_mode : styles.dark_modeVW) : (animalsInBD.length > 4 ? styles.light_mode : styles.light_modeVW)}`}>
            <br />
            <div className={styles.margin}>
                <h1>Cadastrar Animal</h1>
            
                <div className='row'>
                    <div className='col-lg-2'>
                        <h5>Nome do Animal</h5>
                        <input
                            className={styles.inputName}
                            type="text"
                            value={animalName}
                            onChange={(e) => setAnimalName(e.target.value)}
                        />
                    </div>

                    <div className='col-lg-2'>
                        <h5>Idade Animal</h5>
                        <input
                            className={styles.inputName}
                            type="text"
                            value={animalIdade}
                            onChange={(e) => setAnimalIdade(e.target.value)}
                        />
                    </div>

                    <div className='col-lg-2'>
                        <h5 >Raça</h5>
                        <input
                            className={styles.inputName}
                            type="text"
                            value={animalRaca}
                            onChange={(e) => setAnimalRaca(e.target.value)}
                        />
                    </div>

                    <div className='col-lg-2'>
                        <h5 >Sexo</h5>
                        <input
                            className={styles.inputName}
                            type="text"
                            value={animalSexo}
                            onChange={(e) => setAnimalSexo(e.target.value)}
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-3'>
                        <h5 className={styles.marginTop}>Foto do animal</h5>
                        <input  type="file" accept="image/*" onChange={getHandlerImg} />
                    </div>

                    <div className='col-lg-2'>
                        <div className={styles.marginTopButton}>
                            <button className={`btn btn-success mt-3`}  onClick={handleImportPicture}>Cadastrar Animal</button>
                        </div>
                    </div>
                </div>               
            </div>
            
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
                                        <Button variant="danger" onClick={() => deleteAnimal(animal.id)}>Remover Animal</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}