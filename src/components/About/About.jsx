import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="sobremi">
    <h2 className={styles.titulo}>SOBRE MI</h2>
    <div className={styles.contenido}>
      <img src={getImageUrl("About/chicaprogramando.png")} alt="chica en su computadora con audifonos"
       className={styles.aboutImagen}></img>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img className={styles.aboutImagenIcono} src={getImageUrl("About/programming.png")} alt="simbolo de computadora con etiquetas html"></img>
        <div className={styles.aboutItemText}>
          <h3>Acerca de Mi</h3>
          <p>Soy Andrea Sofia Valdez Ordoñez, egresada de la Universidad Católica de Honduras con un título en Ingeniería en Ciencias de la Computación.
            Desde temprana edad, he sentido una profunda fascinación por las computadoras.
            Esta pasión nació al observar cómo la tecnología evolucionaba a lo largo del tiempo,
            y con ello, mi deseo de entender y dominar el funcionamiento de todo lo que veía en pantalla.
         </p>
        </div>
        </li>

        <li className={styles.aboutItem}>
          <img className={styles.aboutImagenIcono} src={getImageUrl("About/programming.png")} alt="simbolo de computadora con etiquetas html"></img>
        <div className={styles.aboutItemText}>
          <h3>Motivación</h3>
          <p>La elección de esta carrera fue impulsada por mi curiosidad innata y mi entusiasmo por la tecnología.
             Desde pequeña, me intrigaba cómo funcionaban las computadoras, y este interés creció junto con el avance tecnológico que iba surgiendo durante todos esos años.
            Pronto comprendí que el futuro sería dominado por la digitalización, y que ser parte de esta evolución tecnológica sería fundamental no solo a nivel personal,
            sino también para contribuir al desarrollo de mi país que aun queda corto con todo lo relacionado a la tecnología.
         </p>
        </div>
        </li>

        <li className={styles.aboutItem}>
          <img className={styles.aboutImagenIcono} src={getImageUrl("About/programming.png")} alt="simbolo de computadora con etiquetas html"></img>
        <div className={styles.aboutItemText}>
          <h3>Visión</h3>
          <p>Veo la Ingeniería en Ciencias de la Computación como una disciplina en constante evolución y aprendizaje.
             Creo firmemente que principalmente en Honduras un pais del tercer mundo,
             Necesita más profesionales capacitados en este campo para enfrentar los desafíos del futuro digital.
             Estoy comprometida en ser parte de ese desarrollo y con el crecimiento continuo en esta área.
         </p>
        </div>
        </li>
      </ul>
    </div>
  </section>
}
