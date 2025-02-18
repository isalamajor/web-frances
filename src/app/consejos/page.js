"use client";

const categoria = "consejos";

import Image from "next/image";
import { Lexend } from "next/font/google";
import styles from "../page.module.css";
import MenuIzquierda from "../components/MenuIzquierda";
import MenuDerecha from "../components/MenuDerecha";
import Material from "../components/Material";
import lista_documentos from "../components/lista_documentos";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const recursos = lista_documentos.filter(doc => doc.categoria == categoria )

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${lexend.variable}`}> 
        <MenuIzquierda className={styles.left}></MenuIzquierda>
        <div className={styles.center}>
          <h1 className={styles.titulo}>Conseils</h1>
          <div className={styles.materiales}>
            <Material label="Nuevo" recursos={recursos}/>
          </div>
        </div>
        <MenuDerecha className={styles.right}></MenuDerecha>
      </main>
    </div>
  );
}