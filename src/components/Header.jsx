import styles from './Header.module.css'
import dev from '../assets/devto.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={dev} alt="Logotipo do Ignite" />
    </header>
  )
}