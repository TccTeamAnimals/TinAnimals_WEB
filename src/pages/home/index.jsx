import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'
import { Sidebar } from '../../components/sidebar/sidebar'
import styles from './index.module.css'

export function Home() {
  return (
    <div className={styles.darkMode}>
      <Header />
      <div>
        <h1>home</h1>
      </div>
      
      <Footer />
    </div>
  )
}
