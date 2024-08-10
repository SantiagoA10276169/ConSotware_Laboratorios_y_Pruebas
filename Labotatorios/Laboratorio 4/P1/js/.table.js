const numero = parseInt(prompt("Ingresa un número:"));

if (isNaN(numero)) {
    console.error("Debes ingresar un número válido.");
} else {
    const tableBody = document.getElementById('table-body');

    for (let i = 1; i <= numero; i++) {
        const cuadrado = i * i;
        const cubo = i * i * i;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${i}</td><td>${cuadrado}</td><td>${cubo}</td>`;
        tableBody.appendChild(row);
    }

    console.log(`Se ha generado una tabla del 1 al ${numero} con sus cuadrados y cubos.`);
}
