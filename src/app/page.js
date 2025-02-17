import Image from "next/image";
import { Lexend } from "next/font/google";  // Importar Lexend
import styles from "./page.module.css";
import MenuIzquierda from "./components/MenuIzquierda";
import MenuDerecha from "./components/MenuDerecha";
import MaterialMuestra from "./components/MaterialMuestra";
import lista_documentos from "./components/lista_documentos";

// Importamos Lexend desde Google Fonts
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});



export default function Home() {

  const recursos_b1 = lista_documentos.filter(doc => doc.categoria == "conversacion-b1");
  const recursos_a2 = lista_documentos.filter(doc => doc.categoria == "conversacion-a2");
  const recursos_consejos = lista_documentos.filter(doc => doc.categoria == "consejos");

  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${lexend.variable}`}> 
        <MenuIzquierda className={styles.left}></MenuIzquierda>
        <div className={styles.center}>
          <h1 className={styles.titulo}>Apprends chez Daniel</h1>
          <div className={styles.materiales}>
            <MaterialMuestra label="Ejercicios de Conversación Nivel A2" recursos={recursos_a2} carpeta="conversacion/a2"/>
            <MaterialMuestra label="Ejercicios de Conversación Nivel B1" recursos={recursos_b1} carpeta="conversacion/b1"/>
            <MaterialMuestra label="¿Por dónde empezar?" recursos={recursos_consejos} carpeta="consejos"/>
            <p></p>
          </div>
        </div>
        <MenuDerecha className={styles.right}></MenuDerecha>
      </main>
    </div>
  );
}
