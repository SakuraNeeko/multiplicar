function generarTablas() {
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
    
    for (let i = 1; i <= 10; i++) {
        contenido += `<div class="fila">3 x ${i} = ${3 * i}</div>`;
    }
    
    contenedor.innerHTML = "<h1>PROBANDO</h1>";
}
