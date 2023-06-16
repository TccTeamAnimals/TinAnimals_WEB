import styles from './cardProfileUser.module.css'
import { PencilLine } from 'phosphor-react'
import dog from '../../imgs/dogLogo.png'
import user from '../../imgs/user.png' 

export function CardProfileUser(){
    return (
        <aside className={styles.card}>
            <img className={styles.cover} src={dog} />
            <div className={styles.profile}>
                <img className={styles.avatar} src={user}/>
                <br />
                <strong>Usuário: Rodrigo</strong>
                <br />
                <span>Descrição do usuário: test</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={15}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}