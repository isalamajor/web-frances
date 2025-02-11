import Link from "next/link";
import "../stylesheets/MenuIzquierda.css";

const MenuIzquierda = () => {
  return (
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
  );
};

export default MenuIzquierda;
