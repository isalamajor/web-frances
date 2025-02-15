import Image from "next/image";
import { Lexend } from "next/font/google";  // Importar Lexend
import styles from "./page.module.css";
import MenuIzquierda from "./components/MenuIzquierda";
import MenuDerecha from "./components/MenuDerecha";
import Material from "./components/Material";
import lista_documentos from "./components/lista_documentos";

// Importamos Lexend desde Google Fonts
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const recursos = [
  {
    id: 1,
    nombre: "Recurso 1",
    imagen: "/archivo.png", 
  },
  {
    id: 2,
    nombre: "Recurso 2",
    imagen: "/archivo.png", 
  },
  {
    id: 3,
    nombre: "Recurso 3",
    imagen: "/archivo.png", 
  },
  {
    id: 4,
    nombre: "Recurso 4",
    imagen: "/archivo.png", 
  },
  {
    id: 5,
    nombre: "Recurso 5",
    imagen: "/archivo.png", 
  },
];

const recursosB1 = [
  {
    id: 1,
    nombre: "Recurso b1 A",
    imagen: "/archivo.png", 
  },
  {
    id: 2,
    nombre: "Recurso b1 B",
    imagen: "/archivo.png", 
  },
  {
    id: 3,
    nombre: "Recurso b1 C",
    imagen: "/archivo.png", 
  },
];


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${lexend.variable}`}> 
        <MenuIzquierda className={styles.left}></MenuIzquierda>
        <div className={styles.center}>
          <h1 className={styles.titulo}>Apprends chez Daniel</h1>
          <div className={styles.materiales}>
            <Material label="Nuevo" recursos={lista_documentos}/>
            <Material label="Nivel B1" recursos={lista_documentos}/>
          </div>
        </div>
        <MenuDerecha className={styles.right}></MenuDerecha>
      </main>
    </div>
  );
}
