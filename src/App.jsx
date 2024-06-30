import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Fortalezas } from "./components/Fortalezas/Fortalezas";
import { Proyectos } from "./components/Proyectos/Proyectos";
import {Contacto} from "./components/Contacto/Contacto";


function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Fortalezas/>
    <Proyectos/>
    <Contacto/>
  </div>
}

export default App
