import path from 'path';
import fs from 'fs';

export function getStaticProps() {
  const folderPath = path.join(process.cwd(), 'public', 'documentos');
  const lista_documentos = [];

  // Función para generar el nombre, categoría y descripción
  const generarDatosArchivo = (archivo) => {
    const [nombre] = archivo.split('.');
    const partes = nombre.split('_');
    const categoria = partes[0];
    const nombreCapitalizado = nombre.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return {
      archivo,
      nombre: nombreCapitalizado,
      descripcion: `Documento de ${categoria}`,
      imagen: 'archivo.png',
      categoria,
    };
  };

  // Verificar si la carpeta existe
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath).filter((file) => file.endsWith('.pdf'));
    files.forEach((file, index) => {
      const datosArchivo = generarDatosArchivo(file);
      lista_documentos.push({
        id: (index + 1).toString(),
        ...datosArchivo,
      });
    });
  } else {
    console.error('La carpeta "documentos" no existe.');
  }

  // Devolver la lista como props
  return {
    props: {
      lista_documentos,
    },
  };
}

export default function ListaDocumentos({ lista_documentos }) {
  return (
    <div>
      <h1>Lista de Documentos</h1>
      <ul>
        {lista_documentos.map((doc) => (
          <li key={doc.id}>
            <h3>{doc.nombre}</h3>
            <p>{doc.descripcion}</p>
            <p>Categoría: {doc.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
