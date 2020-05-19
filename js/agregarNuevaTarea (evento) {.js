agregarNuevaTarea (evento) {
    if (evento.keyCode === 13) {
               let tarea = this.nombreTarea.value.trim();

        if (tarea.length) {
            localStorage.setItem(tarea, JSON.stringify({tarea, terminada: false}));
            this.nombreTarea.value = '';
            this.cargarTareas();
            alert('La tarea se creó de forma satisfactoria.');
        } else {
            alert('Debe escribir texto para la tarea.')
        }
    }
}


