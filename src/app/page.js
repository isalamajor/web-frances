"use client";
import Image from "next/image";
import { Lexend } from "next/font/google";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import MenuIzquierda from "./components/MenuIzquierda";
import MenuDerecha from "./components/MenuDerecha";
import MaterialMuestra from "./components/MaterialMuestra";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function Home() {
  const [recursosB1, setRecursosB1] = useState([]);
  const [recursosA2, setRecursosA2] = useState([]);
  const [recursosConsejos, setRecursosConsejos] = useState([]);

  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const response = await fetch('/api/documentos'); // Ruta relativa para evitar problemas de localhost
        const listaDocumentos = await response.json();
        setRecursosB1(listaDocumentos.filter(doc => doc.categoria === "conversacion-b1"));
        setRecursosA2(listaDocumentos.filter(doc => doc.categoria === "conversacion-a2"));
        setRecursosConsejos(listaDocumentos.filter(doc => doc.categoria === "consejos"));
      } catch (error) {
        console.error("Error al obtener documentos:", error);
      }
    };

    fetchDocumentos();
  }, []);

  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${lexend.variable}`}>
        <MenuIzquierda className={styles.left}></MenuIzquierda>
        <div className={styles.center}>
          <h1 className={styles.titulo}>Apprends chez Daniel</h1>
          <div className={styles.materiales}>
            <MaterialMuestra label="Ejercicios de Conversación Nivel A2" recursos={recursosA2} carpeta="conversacion/a2" />
            <MaterialMuestra label="Ejercicios de Conversación Nivel B1" recursos={recursosB1} carpeta="conversacion/b1" />
            <MaterialMuestra label="¿Por dónde empezar?" recursos={recursosConsejos} carpeta="consejos" />
            <p></p>
          </div>
        </div>
        <MenuDerecha className={styles.right}></MenuDerecha>
      </main>
    </div>
  );
}
