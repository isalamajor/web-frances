// src/app/components/lista_documentos.js
import fs from 'fs';
import path from 'path';

const getDocumentos = () => {
    const documentosPath = path.join(process.cwd(), 'public', 'documentos');
    const archivos = fs.readdirSync(documentosPath);

    const lista_documentos = archivos.map((archivo, index) => {
        const nombreArchivo = archivo.replace(/_/g, ' ').replace('.pdf', '');
        const categoria = archivo.split('_')[0];
        return {
            id: (index + 1).toString(),
            archivo: archivo,
            nombre: nombreArchivo,
            descripcion: `Descripción de ${nombreArchivo}`,
            imagen: "archivo.png",
            categoria: categoria
        };
    });

    return lista_documentos;
};

const lista_documentos = getDocumentos();

export default lista_documentos;