"use client";
import Link from "next/link";
import "../stylesheets/Material.css";

const Material = ({ recursos }) => {
  const numRecursos = recursos.length;
  console.log(numRecursos);

  return (
    <nav className="material">
      <div className="recursos-lista">
        {numRecursos > 0 &&
          recursos.map((recurso) => (
            <Link key={recurso.id} href={"/documento/" + recurso.id}>
              <div className="recurso-item">
                <img
                  src={"/" + recurso.imagen}
                  alt={recurso.nombre}
                  className="recurso-imagen"
                />
                <p className="recurso-nombre">{recurso.nombre}</p>
              </div>
            </Link>
          ))
        }
        {numRecursos <= 0 && <p>Nada por aquí todavía...</p>}
      </div>
    </nav>
  );
};

export default Material;
