import fs from 'fs';
import path from 'path';

const folderPath = "public/documentos"
const listaDocumentos = [];

// Función para generar el nombre, categoría y descripción
const generarDatosArchivo = (archivo) => {
  const [nombre] = archivo.split('.');
  const partes = nombre.split('_');
  const categoria = partes[0];
  const nombreCapitalizado = nombre.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return {
    archivo,
    nombre: nombreCapitalizado,
    descripcion: `Documento de ${categoria}`,
    imagen: "archivo.png",
    categoria,
  };
};

// Leer los archivos de la carpeta y generar la lista
const generarLista = () => {
  if (!fs.existsSync(folderPath)) {
    console.error('La carpeta "documentos" no existe.');
    return;
  }

  const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.pdf'));
  files.forEach((file, index) => {
    const datosArchivo = generarDatosArchivo(file);
    listaDocumentos.push({
      id: (index + 1).toString(),
      ...datosArchivo,
    });
  });

  // Guardar la lista como JSON
  const outputPath = path.join(__dirname, 'public', 'listaDocumentos.json');
  fs.writeFileSync(outputPath, JSON.stringify(listaDocumentos, null, 2));
  console.log('Lista de documentos generada correctamente.');
};

generarLista();


export default lista_documentos;
