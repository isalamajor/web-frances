import path from 'path';
import fs from 'fs';

export function generarListaDocumentos() {
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

  return lista_documentos;
}

// Exporta la lista generada para ser usada en otras partes de tu aplicación
const lista_documentos = generarListaDocumentos();
export default lista_documentos;
