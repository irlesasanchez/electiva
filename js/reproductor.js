/**
 * Representa la clase del reproductor de vídeo.
 */
class Reproductor {
    /**
     * Crea un nuevo objeto de la clase reproductor y asocia variables para 
     * los componentes que integran el documento HTML.
     */
    constructor() {
        /**
         * Obtiene acceso al elemento vídeo.
         */
        this.ucc = document.getElementById('ucc');
        /**
         * Oculta el elemento video.
         */
        this.ucc.style.display = 'none';

        // Obtiene acceso a los botones de Reproducrir, Detener y Pausar:
        this.btnReproducir = document.getElementById('reproducir');
        this.btnDetener = document.getElementById('detener');
        this.btnPausar = document.getElementById('pausar');

        // Obtiene acceso al elemento canvasReproductor:
        this.canvasReproductor = document.getElementById('canvasReproductor');

        // Variable para llevar rastro del ID intervalo que permite dibujar el vídeo 
        // sobre el canvas:
        this.idTemporizador;

        // Invoca a la función para asociar funciones a los eventos click 
        // de los botones:
        this.agregarEventListeners();
    }

    /**
     * Asocia funciones a los eventos de click sobre los botones Reproductir,
     * Detener y Pausar.
     */
    agregarEventListeners() {
        this.btnReproducir.addEventListener('click', this.reproducir.bind(this));
        this.btnDetener.addEventListener('click', this.detener.bind(this));
        this.btnPausar.addEventListener('click', this.pausar.bind(this));
    }

    /**
     * Inicia la reproduccción del vídeo.
     */
    reproducir() {
        // Inicia la reproductir por medio del método play() del elemento video.
        this.ucc.play();

        // Desabilita el botón de reproducir:
        this.btnReproducir.disabled = true;
        
        // Deshabilita los botones de pausar y detener:
        this.btnPausar.disabled = false;
        this.btnDetener.disabled = false;

        // Si el vídeo ha finalizado o se encuentra en pausa:
        if (this.ucc.ended  || this.ucc.paused) {
            return false;
        }

        // Obtiene acceso al contexto del canvas para poder dibujar la imagen
        // del vídeo:
        let contexto = this.canvasReproductor.getContext('2d');

        // Dibuja la imagen (canvas) actual sobre el elemento canvas:
        contexto.drawImage(this.ucc, 0, 0, 480, 360);

        // Crea un intervalo para dibujar una imagen (frame) del vídeo
        // cada 20 milisegundos:
        this.idTemporizador = setTimeout(this.reproducir.bind(this), 20);
    }

    /**
     * Detiene la reproducción del vídeo.
     */
    detener () {
        // Termina con el intervalo de dibujo (creado en el método reproducir()) de imágenes (frames) del vídeo:
        clearTimeout(this.idTemporizador);

        // Pausa la reproducción:
        this.ucc.pause();

        // Deja el tiempo actual de reproducción en 0:
        this.ucc.currentTime = 0;

        // Habilita el botón reproducir:
        this.btnReproducir.disabled = false;

        // Deshabilita los botones de pausar y detener:
        this.btnPausar.disabled = true;
        this.btnDetener.disabled = true;
    }

    pausar () {
        // Pausa el vídeo:
        this.ucc.pause();

        // Termina con el intervalo de dibujo (creado en el método reproducir()) de imágenes (frames) del vídeo:
        clearTimeout(this.idTemporizador);

        // Habilita el botón de reproducir:
        this.btnReproducir.disabled = false;

        // Deshabilita los botones de pausa y detención:
        this.btnPausar.disabled = true;
        this.btnDetener.disabled = true;
    }
}

// Crea un objeto del reproductor:
new Reproductor();