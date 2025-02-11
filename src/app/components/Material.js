import Link from "next/link";
import "../stylesheets/Material.css";

const Material = ({ label, recursos }) => {
  return (
    <nav className="material">
      <h3 className="label-material">{label}</h3>
      <div className="recursos-lista">
        {recursos.map((recurso) => (
          <div key={recurso.id} className="recurso-item">
            <img src={recurso.imagen} alt={recurso.nombre} className="recurso-imagen" />
            <p className="recurso-nombre">{recurso.nombre}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Material;
