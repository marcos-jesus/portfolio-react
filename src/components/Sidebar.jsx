import styles from './Sidebar.module.css'

import profileImage from '../assets/perfil.jpg'

import { FileVue, Atom, FileTs, Graph } from 'phosphor-react'

export function Sidebar() {
return (
  <aside className={styles.sidebar}>
    <img src='https://miro.medium.com/v2/resize:fit:1400/0*geGBf15olI4TiKnN' />

    <div className={styles.profile}>
      <img src={profileImage} />
      
      <strong>Marcos Jesus</strong>
      <span>Frontend Engineer</span>
    </div>

    <footer>
      <a href="#">
        <FileVue size={25} />
        <FileTs size={25} />
        <Atom size={25} />
        <Graph size={25} />
      </a>
    </footer>
  </aside>
)
}