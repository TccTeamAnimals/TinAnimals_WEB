import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'
import { Sidebar } from '../../components/sidebar/sidebar'
import styles from './index.module.css'
import logo from '../../imgs/logo.jpg';
import backgroundImage from '../../imgs/background.png';

function redirectToCadOng() {
  window.location.href = '/cadOng';
}

function redirectToCadUser() {
  window.location.href = '/cadUser';
}

export function Home() {
  return (
    <div>
      <div className={styles.backgroundImageContainer}></div>
      <div className={styles.darkMode}>
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.introSection}>
            <div className={styles.alingImg}>
              <h1>Bem-vindo à Tin Animals</h1>
              <img src={logo} alt="Tin Animal Logo" className={styles.logo} />
            </div>
            
            <h1 className={styles.subTitle}>Você Deseja adotar um pet ? </h1>
            <h5 className={styles.center}>O lugar perfeito para encontrar seu novo amiguinho de quatro patas!</h5>
            <h6 className={styles.ctaText}>Cadastre-se agora para explorar todas as opções de adoção conhecer a nossa plataforma e encontrar o animal perfeito para você!</h6>
            <button onClick={redirectToCadUser} className={styles.ctaButton}>Cadastre-se</button>
          </div>
          <div className={styles.ongSection}>
            <h2 className={styles.subTitle}>Você é parte de uma ONG?</h2>
            <h5 className={styles.center}>Na Tin Animal, também ajudamos organizações a encontrarem lares amorosos para animais que precisam.</h5>
            <h6 className={styles.ctaText}>Junte-se a nós para conheça a plataforma e conectar seus amiguinhos peludos a lares amorosos!</h6>
            <button onClick={redirectToCadOng} className={styles.ctaButton}>Cadastre-se</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
