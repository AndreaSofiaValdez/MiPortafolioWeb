import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./ProyectoCard.module.css";

export const ProyectoCard = ({proyecto: {title,imageSrc,description,skills,source}}) => {
  return  (
  <div className={styles.contenedor}>
  <img src={getImageUrl(imageSrc)} alt={`Imagen de ${title}`} 
    className={styles.imagen}
  />
 <h3 className={styles.titulo}>{title}</h3>
 <p className={styles.description}>{description}</p>
 <ul className={styles.skills}>{
     skills.map((skill, id)=> {
        return(
         <li key={id}className={styles.skill}>{skill}</li>
        );
        })}
 </ul>
 <div className={styles.links}>
     <a className={styles.link} href={source}>Repositorio</a>
 </div>
</div>
  )
}
