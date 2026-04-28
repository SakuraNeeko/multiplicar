function generarTablas() {
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
    
    for (let i = 1; i <= 10; i++) {
        contenido += `<div class="fila">5 x ${i} = ${5 * i}</div>`;
    }
    
    contenedor.innerHTML = "<h1>PROBANDO</h1>";
}
