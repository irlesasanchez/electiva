var canvas = document.getElementById("figuras");
// Se obtiene el contexto para dibujar en 2 dimensiones:
var contexto = canvas.getContext("2d");
// Se restablece el color del borde
contexto.strokeStyle = "blue";

// Se inicia dibujando el contorno del rectangulo
contexto.beginPath();
// Establece las coordenadad 20 en eje  y 20 en eje, estableciendo tambien el alto y ancho.
contexto.rect(20, 20, 350, 400);
// Cierra el dibujo para este caso del rectangulo.
contexto.stroke();
// se asigna el tipo de fuente y tamaño
contexto.font = "20px Arial";
// Se asigna el texto en la posición que considere segun eje x y y, para este caso sobre el rectangulo.
contexto.fillText("Rectángulo", 30, 50);

// Para este caso se inicia dibujando el contorno del circulo
contexto.beginPath();
// Se tablece las coordenadas con la función arc, si visualiza va de 0 grados a 2 pi, completando los 360 grados.
contexto.arc(100, 575, 80, 0, 2 * Math.PI);
// Cierra el dibujo para este caso el circulo.
contexto.stroke();
// se asigna el tipo de fuente y tamaño
contexto.font = "20px Arial";
// Se asigna el texto en la posición que considere segun eje x y y, para este caso sobre el rectangulo.
contexto.fillText("Circulo", 30, 550);

// Se inicia dibujando el contorno del triangulo
contexto.beginPath();
// Se asigna color de relleno para el triangulo
contexto.fillStyle = 'red';
// mueve un punto especifico segun posición X y Y
contexto.moveTo(475,200);
// Adiciona un nuevo punto y crea una línea a ese punto
contexto.lineTo(700,75);
// Adiciona un nuevo punto y crea una línea a ese punto
contexto.lineTo(700,300);
// Cierra el trazo realizado
contexto.closePath();
// Se asigna relleno para el triangulo
contexto.fill();
// Se asigna color al texto
contexto.fillStyle = 'black';
// Se ubica el texto para el triangulo
contexto.fillText("Triangulo", 580, 180);

// Dibuja un hexágono:
const LADOS = 6;
let radio = 100;
// Calcula el punto (nodo) inicial del héxagono. Se usa el ancho y alto del 
// canvas para determinar el punto inicial de dibujo:
let x = canvas.width / 2 + 100;
let y = canvas.height / 2 + 100;
// Establece el color de relleno para el hexágono:
contexto.fillStyle = "yellow";
let radianes = Math.PI / 180 * 60;
contexto.beginPath();
// Crea los demás puntos (nodos) para el hexágono:
// Por cada iteración se cambia x e y según la fórmula de coseno y seno.
for(let i = 0; i < LADOS; ++i){
    x += radio * Math.cos(radianes * i);
    y += radio * Math.sin(radianes * i);
    contexto.lineTo(x, y);
}
// Cierra el camino (path) de dibujo para finalmente
// dibujar el héxagono:
contexto.closePath();
contexto.fill();
// Se asigna color al texto
contexto.fillStyle = 'black';
// Se ubica el texto para el hexagono
contexto.fillText("Hexagono", 480, 580);

