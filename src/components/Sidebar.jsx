import styles from './Sidebar.module.css'

import profileImage from '../assets/profile-image.jpg'

import { FileVue, Atom, FileTs, Graph } from 'phosphor-react'

export function Sidebar() {
return (
  <aside className={styles.sidebar}>
    <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' />

    <div className={styles.profile}>
      <img src={profileImage} />
      
      <strong>Marcos Jesus</strong>
      <span>Frontend Engineer</span>
    </div>

    <footer>
      <a href="#">
        <Atom size={25} />
        <FileVue size={25} />
        <FileTs size={25} />
        <Graph size={25} />
      </a>
    </footer>
  </aside>
)
}