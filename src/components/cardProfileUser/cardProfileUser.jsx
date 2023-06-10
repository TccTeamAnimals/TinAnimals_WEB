import styles from './cardProfileUser.module.css'
import { PencilLine } from 'phosphor-react'
import dog from '../../imgs/dogLogo.png'

export function CardProfileUser(){
    return (
        <aside className={styles.card}>
            <img className={styles.cover} src={dog} />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://pps.whatsapp.net/v/t61.24694-24/289369598_541389401029793_7123389115630270092_n.jpg?ccb=11-4&oh=01_AdSdI1B_TbUqTiWRvHfPdc0pGsVNkcqpj8_O6Bh3Ug6h6A&oe=648B3777"/>
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