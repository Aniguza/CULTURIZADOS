// data.js
const eventos = [
    {
        id: 1,
        titulo: "Noche Mali: Los chapis",
        fecha: "10/06/2025",
        lugar: "Explanada parque infantil Piura",
        imagen: "../img/event-1.png",
        estado: "finalizado",
        descuento: "20%",
        descripcion: "Los Chapis, colectivo artístico multidisciplinario, toma el escenario con una propuesta provocadora: visuales digitales inspirados en símbolos afrodescendientes, beats electrónicos fusionados con zapateo criollo, y una intervención en vivo que dialoga con las obras permanentes del museo. La noche se entrelaza con testimonios performáticos sobre identidad, memoria y territorio.",
        quiz: [
            {
                pregunta: "¿Qué elementos combina el colectivo Los Chapis en su presentación?",
                opciones: {
                    A: "Pintura y cerámica precolombina",
                    B: "Zapateo criollo y beats electrónicos",
                    C: "Cumbia y reggaetón",
                    D: "Danza folclórica y marinera norteña"
                },
                respuesta: "B"
            },
            {
                pregunta: "¿Qué tema principal se aborda en la intervención de Los Chapis?",
                opciones: {
                    A: "La independencia del Perú",
                    B: "La conquista española",
                    C: "Identidad, memoria y territorio",
                    D: "Mitología incaica"
                },
                respuesta: "C"
            }
        ],
        reseñas: [
            { nombre: "Juan", fecha: "20 feb. 2025", estrellas: 5, comentario: "Fue un gran evento, muy entretenido" },
            { nombre: "Ana", fecha: "18 feb. 2025", estrellas: 4, comentario: "Me encantó, pero el lugar estaba muy lleno" }
        ],
        qr: "../img/QR1.png"
    },
    {
        id: 2,
        titulo: "Piurarde",
        fecha: "05/07/2025",
        lugar: "Jr. Arequipa 327 (local del APRA)",
        imagen: "../img/evento2.jpg",
        estado: "activo",
        descuento: "20%",
        descripcion: "Evento musical celebrado en Piura desde el 2024, es un punto de encuentro entre géneros como el rock, metal, punk, reggae y más. Aquí puedes disfrutar y conocer a distintas bandas con música propia que te harán vibrar con sus ritmos.",
        quiz: [
            {
                pregunta: "¿Cuál fue la fecha de la primera edición de Piurarde?",
                opciones: {
                    A: "6 de julio",
                    B: "2 de julio",
                    C: "8 de julio",
                    D: "5 de julio"
                },
                respuesta: "A"
            },
            {
                pregunta: "¿Qué personaje histórico se mostraba en el flyer de la 3era edición?",
                opciones: {
                    A: "La pola",
                    B: "Miguel Grau",
                    C: "Ignacio Merino",
                    D: "Cayetano Heredia"
                },
                respuesta: "B"
            },
            {
                pregunta: "¿Cuál es la banda que más veces ha tocado en Piurarde?",
                opciones: {
                    A: "Páramo",
                    B: "Suitboyz",
                    C: "Cállate lola",
                    D: "Krokodosis"
                },
                respuesta: "B"
            },
            {
                pregunta: "¿Cuándo se realizó la tercera edición de Piurarde?",
                opciones: {
                    A: "7 de noviembre 2024",
                    B: "17 de noviembre 2024",
                    C: "7 de diciembre 2024",
                    D: "17 de diciembre 2024"
                },
                respuesta: "C"
            },
            {
                pregunta: "¿Cómo se llama el baterista de la banda Suitboyz? ",
                opciones: {
                    A: "Josué Guevara",
                    B: "Paolo Rimarachín",
                    C: "Franco Vargas",
                    D: "Dave Augusto"
                },
                respuesta: "A"
            }
        ],
        reseñas: [
            { nombre: "Luis", fecha: "30 jun. 2025", estrellas: 4, comentario: "He asistido a un evento similar, una gran experiencia" },
        ],
        qr: "../img/QR2.png"
    }
];
