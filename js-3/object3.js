let receta = {}

receta.nombre = "Sandwich";

receta.ingredientes = [
    {
        nombre: "Pan",
        cantidad: 2,
    },
    {
        nombre: "Queso",
        cantidad: 1,
    },
];

// Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer “Pan”.
console.log(receta.ingredientes[0].nombre);

// Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let totalCantidades = 0;
for(let i = 0; i < receta.ingredientes.length; i++){
    totalCantidades += receta.ingredientes[i].cantidad;
}
console.log(totalCantidades);

/*
let llaves = Object.keys(receta);
for(let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log(receta[llave]);
}
*/