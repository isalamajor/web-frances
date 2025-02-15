import Image from "next/image";
import Link from "next/link";
import "../stylesheets/MenuDerecha.css";

const MenuDerecha = () => {
  return (
    <div className="menu-derecha">
        <nav className="pricipal-derecha">
            {/* Imagen del logo */}
            <Image src="/profile.webp" alt="Logo" width={120} height={120} className="img-perfil" />
            <h2>Isabel Hernandez</h2>
        </nav>
    <div className="recomendaciones">
        <h3>Recursos recomendados</h3>
    </div>
    </div>
  );
};

export default MenuDerecha;
