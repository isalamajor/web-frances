"use client";
import Link from "next/link";
import Image from "next/image";
import "../stylesheets/MenuIzquierda.css";

const MenuIzquierda = () => {
  return (
    <div className="menu-izquierda-all">
        <nav className="menu-izquierda">
            
            <h1>Material</h1>
            <Link href="/redacciones" className="menu-link">
            Redacciones
            </Link>
            <Link href="/vocabulario" className="menu-link">
            Vocabulario
            </Link>
            <Link href="/gramatica" className="menu-link">
            Gramática
            </Link>

        </nav>
            
        <div className="logo">
            <Link href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={120} className="img-perfil"/>
            </Link>
        </div>
    </div>
  );
};

export default MenuIzquierda;
