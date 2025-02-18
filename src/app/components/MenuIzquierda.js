"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "../stylesheets/MenuIzquierda.css";

const MenuIzquierda = () => {
  const [openConversation, setOpenConversation] = useState(false);

  return (
    <div className="menu-izquierda-all">
      <nav className="menu-izquierda">
        <h1>Material</h1>

        <Link href="/gramatica" className="menu-link">Grammaire</Link>
        <Link href="/vocabulario" className="menu-link">Vocabulaire</Link>
        <Link href="/consejos" className="menu-link">Conseils</Link>

        
        <div
          className="menu-link"
          onClick={() => setOpenConversation(!openConversation)}
        >
          Conversation {openConversation ? "◣" : "◢"}
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: openConversation ? "auto" : 0, opacity: openConversation ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="submenu"
          style={{ overflow: "hidden" }} 
        >
          <Link href="/conversacion/a1" className="menu-link">A1</Link>
          <Link href="/conversacion/a2" className="menu-link">A2</Link>
          <Link href="/conversacion/b1" className="menu-link">B1</Link>
          <Link href="/conversacion/b2" className="menu-link">B2</Link>
        </motion.div>
      </nav>

      <div className="logo">
        <Link href="/" className="ref-logo">
          <Image src="/logo.png" alt="Logo" width={120} height={120} className="img-logo" />
        </Link>
      </div>
    </div>
  );
};

export default MenuIzquierda;
