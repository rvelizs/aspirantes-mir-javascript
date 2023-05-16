let persona = {
    nombre: "Pedro Perez",
    edad: 30,
    ciudad: "CDMX",
    profesion: "Ingeniero",
    hobbies: ["programar", "squash", "piano"],
}

function presentacion (persona) {
    let mensaje = "Hola, me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
    return mensaje;
}

// Imprime en la consola el objeto "persona" completo.
let llaves = Object.keys(persona);
for(let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log(persona[llave]);
}

// Imprime en la consola el valor de la variable "mensaje".
console.log("Mensaje: " + presentacion(persona));

// Imprime en la consola la propiedad "hobbies" del objeto "persona".
// Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
console.log("Hobbies: ");
for(let i = 0; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i]);
}
