
"use client";
import "../stylesheets/pdfViewer.css";

export default function PDFViewer({ file }) {
    console.log("src: " + file)
    return (
        <div className="viewer-container">
            <embed 
                className="viewer" 
                src={file} 
                type="application/pdf"/>
        </div>
    );
}
  
  