import Link from "next/link";
import "../stylesheets/MaterialMuestra.css";
import { GoArrowRight } from "react-icons/go";

const Material = ({ label, recursos, carpeta }) => {

  const numRecursos = recursos.length;  
  const recursosLimitados = recursos.slice(0, 3);
  return (
    <nav className="material">
      {numRecursos > 0 && <h3 className="label-material">{label}</h3> }
      <div className="recursos-lista">
        {recursos.length > 3 &&
            recursosLimitados.map((recurso) => (
            <Link href={"/documento/" + recurso.id}>
              <div key={recurso.id} className="recurso-item">
                  <img src={recurso.imagen} alt={recurso.nombre} className="recurso-imagen" />
                  <p className="recurso-nombre">{recurso.nombre}</p>
              </div>
            </Link>
            ))
        }
        {numRecursos > 3 && (
        <Link className="recurso-item see-more-container" href={"/" + carpeta}>
          <p>Ver más</p>
          <GoArrowRight className="recurso-imagen see-more"></GoArrowRight>
        </Link>
        )}
        {numRecursos <= 3 && numRecursos > 0  &&
            recursos.map((recurso) => (
            <Link href={`/documento/${encodeURIComponent(recurso.id)}`}>
              <div key={recurso.id} className="recurso-item">
                  <img src={recurso.imagen} alt={recurso.nombre} className="recurso-imagen" />
                  <p className="recurso-nombre">{recurso.nombre}</p>
              </div>
            </Link>
            ))
        }
        {numRecursos <= 0 &&
            <p>Nada por aquí todavía...</p>
        }
      </div>
    </nav>
  );
};

export default Material;
