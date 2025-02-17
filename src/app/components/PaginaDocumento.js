"use client";
import PDFViewer from "../components/pdfViewer";
import "../stylesheets/PaginaDocumento.css";


export default function PaginaDocumento({archivo, nombre, descripcion}) {
    return(
        <div className="pagina-documento">
            <div className="contenido-pagina-documento">
                <h1 className="titulo-documento">{nombre}</h1> 
                <p>{descripcion}</p>
                <PDFViewer file={"/documentos/" + archivo} className="viewer"/>
            </div>
        </div>
    )
}