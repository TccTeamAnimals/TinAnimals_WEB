import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import  logo  from '../../imgs/logo.jpg';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CardProfileUser } from '../../components/cardProfileUser/cardProfileUser';
import { MainContainer } from '../../components/ContainerProfileUser/container.jsx';




export function ProfileUser () {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <CardProfileUser />
                <main>
                    <MainContainer author="test" content="testets" />
                    
                </main>


            </div>


            <Footer />

        </div>
    )
}