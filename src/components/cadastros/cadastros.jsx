import styles from './cadastros.module.css';
import { Link } from 'react-router-dom';

export function CadastrosOngUser() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastros</h1>
            <div className={styles.buttonContainer}>
                <Link to="/cadUser">
                    <button className={styles.btn}>Usuário</button>
                </Link>
                <Link to="/cadOng">
                    <button className={styles.btn}>Ong</button>
                </Link>
            </div>
            <div>
            <Link className={styles.back} to="/">
                <a>Voltar para a pagina principal</a>
            </Link>
            </div>
        </div>
    );
}