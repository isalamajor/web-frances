
"use client";
import Image from "next/image";
import { Lexend } from "next/font/google"; 
import styles from "../../page.module.css";
import MenuIzquierda from "../../components/MenuIzquierda";
import MenuDerecha from "../../components/MenuDerecha";
import PaginaDocumento from "../../components/PaginaDocumento";
import { useParams } from 'next/navigation';
import lista_documentos from "../../components/lista_documentos";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function Home() {

  const { id } = useParams();
  const id_documento = decodeURIComponent(id);
  const documento = lista_documentos.find(documento => documento.id === id);
  console.log(id);
  console.log(id_documento);
  console.log(documento);

  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${lexend.variable}`}> 
        <MenuIzquierda className={styles.left}></MenuIzquierda>
        <div className={styles.center}>
          <PaginaDocumento
          archivo={documento.archivo}
          nombre={documento.nombre}
          descripcion={documento.descripcion}
          />
        </div>
        <MenuDerecha className={styles.right}></MenuDerecha>
      </main>
    </div>
  );
}