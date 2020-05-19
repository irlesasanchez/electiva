
    var canvas = document.getElementById("myCanvas");
    // Se obtiene el contexto para dibujar en 2 dimensiones:
    var contexto = canvas.getContext("2d");
    // Se crea un objeto Image para representar la imagen que se quiere dibujar 
    // en el canvas:
    var img = new Image();
    // Establece la ruta de la imagen. Puede ser una ruta local o la URL de una imagen 
    //que se halle en Internet:
    img.src = "img/integrante.jpg";
    // Una vez la imagen se halla descargado desde Internet la hace visible en el 
    //canvas a través del método drawImage():
    img.onload = function(){
        contexto.drawImage(img, 0, 0);
    }
