import React from 'react'
import styles from "./Hero.module.css";
import { getVideoUrl } from '../../utils';


export const Hero = () => {
    return (
      <section>
        <div className={styles.hero}>
          <div className={styles.mask}>
            <video className={styles.video} muted autoPlay loop src={getVideoUrl("Hero/Fondo.mp4")} type="video/mp4">
            </video>
          </div>
          <div className={styles.contenido}>
            <h1>Hola, Soy Andrea Valdez</h1>
            <p>Soy Ingeniera en Ciencias de la Computación!</p>
            <div>
              <a className={styles.btnHero} href="mailto:andreasofiavaldezordonez@gmail.com">CONTACTO</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
