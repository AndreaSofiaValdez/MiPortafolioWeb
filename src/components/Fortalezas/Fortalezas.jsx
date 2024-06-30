import React from 'react';
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Fortalezas.module.css";

export const Fortalezas = () => {
  return (
    <section className={styles.container} id="Fortalezas">
    <h2 className={styles.titulo}>Fortalezas</h2>
    <div className={styles.contenido}>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImagenContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
        </div>
        <ul></ul>
      </div>
    </section>
);
}


