import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contacto.module.css";

export const Contacto = () => {
  return(
     <footer id="Contacto" className={styles.contenedor}>
        <div className={styles.texto}>
            <h2>Contacto</h2>
            <p>Siéntete libre de contactarme!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("Contacto/email.png")} alt="Email icon"></img>
                <a href="mailto:andreasofiavaldezordonez@gmail.com">andreasofiavaldezordonez@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("Contacto/github.png")} alt="github icon"></img>
                <a href="https://github.com/AndreaSofiaValdez">github.com/AndreaSofiaValdez</a>
            </li>
        </ul>
     </footer>
    );
}
