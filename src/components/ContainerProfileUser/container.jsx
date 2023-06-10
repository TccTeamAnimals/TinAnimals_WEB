import { useEffect } from 'react'
import styles from './container.module.css'

export function MainContainer(props) {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <article className={styles.container}>
            <header>
                <div>
                    <div>
                        <h1>tela de editar o perfil do usuario</h1>
                    </div>
                </div>
            </header>
        </article>
       
    )
}