"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../stylesheets/MenuDerecha.css";
import Recomendaciones from "./Recomendaciones";
import { motion } from "framer-motion";

const MenuDerecha = () => {
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <div className="menu-derecha">
      <nav className="principal-derecha">
        {/* Imagen del perfil */}
        <Image src="/profile.webp" alt="Logo" width={120} height={120} className="img-perfil" />
        
        {/* Nombre con clic para expandir descripción */}
        <h2
          onClick={() => setOpenDescription(!openDescription)}
          style={{ cursor: 'pointer' }}
          className="nombre-profesor"
        >
          Daniel González
        </h2>
        
        {/* Descripción expandible con una transición suave */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: openDescription ? 1 : 0, y: openDescription ? 0 : -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="descripcion"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, sapien id gravida dictum, 
            purus lorem convallis sapien, vitae laoreet ligula tortor ac erat. Suspendisse potenti. Sed convallis 
            orci quis ex pharetra, in volutpat lorem varius.
          </p>
        </motion.div>
      </nav>

      <div className="recomendaciones">
        <h3>Recursos recomendados</h3>
        <Recomendaciones />
      </div>
    </div>
  );
};

export default MenuDerecha;
