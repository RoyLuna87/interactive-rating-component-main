function cambiarColor(IdSelector) {
    // Obtén todos los elementos con la clase 'circulo'
    let circulos = document.getElementsByClassName('circulo');

    // Itera sobre todos los círculos
    for (let i = 0; i < circulos.length; i++) {
        let circle = circulos[i];
        
        // change color of circle selected
        if (circle.id === IdSelector) {
            // Cambia el color del círculo seleccionado
            circle.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--Light-Grey');
            circle.style.color = getComputedStyle(document.documentElement).getPropertyValue('--White');   
        } else {
            // Restore default color
            circle.style.backgroundColor = ''; 
            circle.style.color = ''; 
        }
    }
}

function number(IdNumber){
    var respuesta = `You selected ${IdNumber} out of 5`;    
    console.log(respuesta);

    localStorage.setItem('respuesta', respuesta);
   
}


