function generarTablas() {
    let inputValor = document.getElementById("numero").value;
    let contenedor = document.getElementById("contenedor");
    
    if (inputValor === "") {
        contenedor.innerHTML = '<div class="mensaje-inicial">¡Por favor ingresa un número primero! (╥﹏╥)</div>';
        return; 
    }

    let num = parseInt(inputValor);
    let contenido = "";
    
    for (let i = 1; i <= 10; i++) {
        contenido += `<div class="fila">${num} x ${i} = ${num * i}</div>`;
    }
    
    contenedor.innerHTML = contenido;
}