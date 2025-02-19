// src/app/api/documentos/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {
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

    return new Response(JSON.stringify(lista_documentos), {
        headers: { 'Content-Type': 'application/json' },
    });
}