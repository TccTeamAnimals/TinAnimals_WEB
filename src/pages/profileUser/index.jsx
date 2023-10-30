import { Sidebar } from '../../components/sidebar/sidebar';
import styles from './index.module.css';
import { ThemeContext } from '../../contextApi/ThemeContext';
import { CardProfileUser } from '../../components/cardProfileUser/cardProfileUser';
import { useState, useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Inputmask from 'inputmask';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ProfileUser() {
  const { darkMode, getLocalStorage } = useContext(ThemeContext);
  const [infoUserInCache, setInfoUserInCache] = useState({});
  const [dataUserOrOng, setDataUserOrOng] = useState({});
  const [formValues, setFormValues] = useState({});
  const [editMode, setEditMode] = useState(false); 


  useEffect(() => {
    Inputmask('(99) 9-9999-9999').mask('#phone');

    const userData = getLocalStorage();
    setInfoUserInCache(userData);
  }, []);

  useEffect(() => {
    const GetUserOrOng = async () => {
      if (infoUserInCache.typeCad === 'ong') {
        try {
          const response = await axios.get(`http://localhost:8000/api/ong/${infoUserInCache.id}`);
          setDataUserOrOng(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await axios.get(`http://localhost:8000/api/users/${infoUserInCache.id}`);
          setDataUserOrOng(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    if (Object.keys(infoUserInCache).length !== 0) {
      GetUserOrOng();
    }
  }, [infoUserInCache]);

  useEffect(() => {
    // Atualiza os campos do formulário com os dados retornados da API
    setFormValues({
      name: dataUserOrOng.name || '',
      phone: dataUserOrOng.phone || '',
    });
  }, [dataUserOrOng]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target.password.value === event.target.ConfirmedPassword.value) {
      if (infoUserInCache.typeCad === 'ong') {
        const ongData = {
          name: event.target.name.value,
          phone: event.target.phone.value,
          password: event.target.password.value,
        };
        axios
          .put(`http://localhost:8000/api/ong/${infoUserInCache.id}`, ongData)
          .then((response) => {
            toast.success(
              'Ong Atualizada Com Sucesso',
              {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              }
            );

            setDataUserOrOng({
              ...dataUserOrOng,
              name: event.target.name.value,
              phone: event.target.phone.value,
            });

            // Desativar o modo de edição após enviar o formulário
            setEditMode(false);
            window.location.reload();
          })
          .catch((error) => {
            toast.error('Erro ao atualizar perfil!', {
              position: 'bottom-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      } else {

        const UserData = {
          name: event.target.name.value,
          phone: event.target.phone.value,
          password: event.target.password.value,
        };
        axios
          .put(`http://localhost:8000/api/users/${infoUserInCache.id}`, UserData)
          .then((response) => {
            console.log("caiu no deu bom")
            toast.success(
              'Usuario Atualizada Com Sucesso',
              {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              }
            );

            setDataUserOrOng({
              ...dataUserOrOng,
              name: event.target.name.value,
              phone: event.target.phone.value,
            });

            // Desativar o modo de edição após enviar o formulário
            setEditMode(false);
            window.location.reload();
          })
          .catch((error) => {
            toast.error('Erro ao atualizar perfil!', {
              position: 'bottom-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
        
      }
    }
  };

  return (
    <div className={`${darkMode ? styles.dark_mode : styles.light_mode}`}>
      <div className={styles.margin}>
        <br />
          <h3>Edite seu perfil</h3>
        <br />
      </div>

      <div className={styles.profileContainer}>
        <div className={styles.profileCardContainer}>
          <CardProfileUser />
        </div>

        <div className={styles.editFormContainer}>
          <Form onSubmit={handleSubmit}>
              <fieldset>
                <legend>
                  {infoUserInCache.typeCad === 'ong'
                    ? 'Informações da ONG'
                    : 'Informações do Usuário'}
                </legend>
                <div className={styles.formGroup}>
                  <label htmlFor="name"> {infoUserInCache.typeCad === 'ong'? "Novo nome da ONG" : "Novo nome do Usuário" }  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={infoUserInCache.typeCad === 'ong'? "Novo nome da ONG" : "Novo nome do Usuário"  }
                    required
                    defaultValue={formValues.name}
                    disabled={!editMode} 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone"> Número de Telefone </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Digite o novo número de telefone"
                    required
                    defaultValue={formValues.phone}
                    disabled={!editMode} 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="password"> Senha </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua nova senha"
                    required
                    disabled={!editMode} 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="ConfirmedPassword"> Confirme a senha </label>
                  <input
                    type="password"
                    id="ConfirmedPassword"
                    name="ConfirmedPassword"
                    placeholder="Confirme sua nova senha"
                    required
                    disabled={!editMode} 
                  />
                </div>

                {!editMode && (
                  <Button variant="primary" onClick={() => setEditMode(true)}>
                    Editar Perfil
                  </Button>
                )}

                {/* Mostra o botão de enviar apenas quando o modo de edição estiver ativado */}
                {editMode && (
                  <Button type="submit" variant="success">
                    Salvar Alterações
                  </Button>
                )}
              </fieldset>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}