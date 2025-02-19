const lista_documentos = [
    // Consejos
    { id: '1', archivo: "consejos_1.pdf", nombre: "Consejos 1", descripcion: "Primer documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '2', archivo: "consejos_2.pdf", nombre: "Consejos 2", descripcion: "Segundo documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '3', archivo: "consejos_3.pdf", nombre: "Consejos 3", descripcion: "Tercer documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '4', archivo: "consejos_4.pdf", nombre: "Consejos 4", descripcion: "Cuarto documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '5', archivo: "consejos_5.pdf", nombre: "Consejos 5", descripcion: "Quinto documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '6', archivo: "consejos_6.pdf", nombre: "Consejos 6", descripcion: "Sexto documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '7', archivo: "consejos_7.pdf", nombre: "Consejos 7", descripcion: "Séptimo documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '8', archivo: "consejos_8.pdf", nombre: "Consejos 8", descripcion: "Octavo documento de consejos", imagen: "archivo.png", categoria: 'consejos' },
    { id: '9', archivo: "consejos_9.pdf", nombre: "Consejos 9", descripcion: "Noveno documento de consejos", imagen: "archivo.png", categoria: 'consejos' },

    // Gramática
    { id: '10', archivo: "gramatica_1.pdf", nombre: "Gramática 1", descripcion: "Documento de gramática nivel básico", imagen: "archivo.png", categoria: 'gramatica' },
    { id: '11', archivo: "gramatica_2.pdf", nombre: "Gramática 2", descripcion: "Documento de gramática nivel intermedio", imagen: "archivo.png", categoria: 'gramatica' },
    { id: '12', archivo: "gramatica_3.pdf", nombre: "Gramática 3", descripcion: "Documento de gramática nivel avanzado", imagen: "archivo.png", categoria: 'gramatica' },
    { id: '13', archivo: "gramatica_4.pdf", nombre: "Gramática 4", descripcion: "Ejercicios prácticos de gramática", imagen: "archivo.png", categoria: 'gramatica' },
    { id: '14', archivo: "gramatica_5.pdf", nombre: "Gramática 5", descripcion: "Teoría y ejemplos de gramática", imagen: "archivo.png", categoria: 'gramatica' },
    { id: '15', archivo: "gramatica_6.pdf", nombre: "Gramática 6", descripcion: "Gramática avanzada con ejercicios", imagen: "archivo.png", categoria: 'gramatica' },
    { id: '16', archivo: "gramatica_7.pdf", nombre: "Gramática 7", descripcion: "Gramática aplicada a la escritura", imagen: "archivo.png", categoria: 'gramatica' },

    // Vocabulario
    { id: '17', archivo: "vocabulario_1.pdf", nombre: "Vocabulario 1", descripcion: "Palabras y expresiones básicas", imagen: "archivo.png", categoria: 'vocabulario' },
    { id: '18', archivo: "vocabulario_2.pdf", nombre: "Vocabulario 2", descripcion: "Vocabulario temático de viajes", imagen: "archivo.png", categoria: 'vocabulario' },
    { id: '19', archivo: "vocabulario_3.pdf", nombre: "Vocabulario 3", descripcion: "Términos comunes en negocios", imagen: "archivo.png", categoria: 'vocabulario' },
    { id: '20', archivo: "vocabulario_4.pdf", nombre: "Vocabulario 4", descripcion: "Adjetivos y descripciones", imagen: "archivo.png", categoria: 'vocabulario' },
    { id: '21', archivo: "vocabulario_5.pdf", nombre: "Vocabulario 5", descripcion: "Verbos y conjugaciones", imagen: "archivo.png", categoria: 'vocabulario' },
    { id: '22', archivo: "vocabulario_6.pdf", nombre: "Vocabulario 6", descripcion: "Expresiones idiomáticas", imagen: "archivo.png", categoria: 'vocabulario' },
    
    // Conversación A1
    { id: '10', archivo: "conversacion_a1_1.pdf", nombre: "Conversación A1 - 1", descripcion: "Conversación nivel A1", imagen: "archivo.png", categoria: 'conversacion-a1' },
    { id: '11', archivo: "conversacion_a1_2.pdf", nombre: "Conversación A1 - 2", descripcion: "Conversación nivel A1", imagen: "archivo.png", categoria: 'conversacion-a1' },
    { id: '12', archivo: "conversacion_a1_3.pdf", nombre: "Conversación A1 - 3", descripcion: "Conversación nivel A1", imagen: "archivo.png", categoria: 'conversacion-a1' },
    { id: '13', archivo: "conversacion_a1_4.pdf", nombre: "Conversación A1 - 4", descripcion: "Conversación nivel A1", imagen: "archivo.png", categoria: 'conversacion-a1' },
    { id: '14', archivo: "conversacion_a1_5.pdf", nombre: "Conversación A1 - 5", descripcion: "Conversación nivel A1", imagen: "archivo.png", categoria: 'conversacion-a1' },

    // Conversación A2
    { id: '15', archivo: "conversacion_a2_1.pdf", nombre: "Conversación A2 - 1", descripcion: "Conversación nivel A2", imagen: "archivo.png", categoria: 'conversacion-a2' },
    { id: '16', archivo: "conversacion_a2_2.pdf", nombre: "Conversación A2 - 2", descripcion: "Conversación nivel A2", imagen: "archivo.png", categoria: 'conversacion-a2' },
    { id: '17', archivo: "conversacion_a2_3.pdf", nombre: "Conversación A2 - 3", descripcion: "Conversación nivel A2", imagen: "archivo.png", categoria: 'conversacion-a2' },
    { id: '18', archivo: "conversacion_a2_4.pdf", nombre: "Conversación A2 - 4", descripcion: "Conversación nivel A2", imagen: "archivo.png", categoria: 'conversacion-a2' },
    { id: '19', archivo: "conversacion_a2_5.pdf", nombre: "Conversación A2 - 5", descripcion: "Conversación nivel A2", imagen: "archivo.png", categoria: 'conversacion-a2' },
    { id: '20', archivo: "conversacion_a2_6.pdf", nombre: "Conversación A2 - 6", descripcion: "Conversación nivel A2", imagen: "archivo.png", categoria: 'conversacion-a2' },

    // Conversación B1
    { id: '21', archivo: "conversacion_b1_1.pdf", nombre: "Conversación B1 - 1", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '22', archivo: "conversacion_b1_2.pdf", nombre: "Conversación B1 - 2", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '23', archivo: "conversacion_b1_3.pdf", nombre: "Conversación B1 - 3", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '24', archivo: "conversacion_b1_4.pdf", nombre: "Conversación B1 - 4", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '25', archivo: "conversacion_b1_5.pdf", nombre: "Conversación B1 - 5", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '26', archivo: "conversacion_b1_6.pdf", nombre: "Conversación B1 - 6", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '27', archivo: "conversacion_b1_7.pdf", nombre: "Conversación B1 - 7", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },
    { id: '28', archivo: "conversacion_b1_8.pdf", nombre: "Conversación B1 - 8", descripcion: "Conversación nivel B1", imagen: "archivo.png", categoria: 'conversacion-b1' },

    // Conversación B2
    { id: '29', archivo: "conversacion_b2_1.pdf", nombre: "Conversación B2 - 1", descripcion: "Conversación nivel B2", imagen: "archivo.png", categoria: 'conversacion-b2' },
    { id: '30', archivo: "conversacion_b2_2.pdf", nombre: "Conversación B2 - 2", descripcion: "Conversación nivel B2", imagen: "archivo.png", categoria: 'conversacion-b2' },
    { id: '31', archivo: "conversacion_b2_3.pdf", nombre: "Conversación B2 - 3", descripcion: "Conversación nivel B2", imagen: "archivo.png", categoria: 'conversacion-b2' },
    { id: '32', archivo: "conversacion_b2_4.pdf", nombre: "Conversación B2 - 4", descripcion: "Conversación nivel B2", imagen: "archivo.png", categoria: 'conversacion-b2' },
    { id: '33', archivo: "conversacion_b2_5.pdf", nombre: "Conversación B2 - 5", descripcion: "Conversación nivel B2", imagen: "archivo.png", categoria: 'conversacion-b2' }
];

export default lista_documentos;
