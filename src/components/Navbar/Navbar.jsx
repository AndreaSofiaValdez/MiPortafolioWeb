import React,{useState} from 'react';

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);

  return <nav className={styles.navbar}>
    <a className={styles.titulo} href="/">
    <span>Portafolio</span>AndreaValdez<span>.</span>
    </a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={
            menuOpen
            ? getImageUrl("nav/cerrarIcon.png")
            : getImageUrl("nav/menuIcon.png")
        } 
        alt="boton de menu"
        onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() =>setMenuOpen(false)}
        >
            <li>
                <a href="#sobremi">Sobre Mi</a>
            </li>
            <li>
                <a href="#Fortalezas">Fortalezas</a>
            </li>
            <li>
                <a href="#proyectos">Proyectos</a>
            </li>
            <li>
                <a href="#Contacto">Contacto</a>
            </li>
        </ul>
    </div>
  </nav>
}
