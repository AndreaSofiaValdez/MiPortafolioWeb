import React from 'react';
import proyectos from "../../data/proyectos.json";
import { ProyectoCard } from './ProyectoCard';
import styles from "./Proyectos.module.css";

export const Proyectos = () => {
  return (
    <section className={styles.contenedor}>
      <h2 className={styles.titulo}>Proyectos</h2>
      <div className={styles.proyectos}>{
          proyectos.map((proyecto,id)=> {
            return <ProyectoCard key={id} proyecto={proyecto}/>
          })}
      </div>
    </section>    
  );
  
}
