import React from 'react'

// CSS
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>
            <span>Lista de tarefas</span> @ 2023
        </p>
    </footer>
  )
}

export default Footer