import Link from "next/link";
import "../stylesheets/Material.css";

const Material = ({ label, recursos }) => {
    
  const recursosLimitados = recursos.slice(0, 3);
  return (
    <nav className="material">
      <h3 className="label-material">{label}</h3>
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
        {recursos.length > 3 && (
        <div className="recurso-item showmore">
            <img src="showmore" alt="Show more" className="recurso-imagen" />
        </div>
        )}
        {recursos.length <= 3 &&
            recursos.map((recurso) => (
            <Link href={`/documento/${encodeURIComponent(recurso.id)}`}>
              <div key={recurso.id} className="recurso-item">
                  <img src={recurso.imagen} alt={recurso.nombre} className="recurso-imagen" />
                  <p className="recurso-nombre">{recurso.nombre}</p>
              </div>
            </Link>
            ))
        }
      </div>
    </nav>
  );
};

export default Material;
