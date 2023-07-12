import { CadastrosOngUser } from '../../components/cadastros/cadastros';
import styles from './index.module.css';



export function Cadastros() {
  return (
    <div className={styles.darkMode}>
      <div>
        <CadastrosOngUser/>
      </div>
    </div>
  );
}