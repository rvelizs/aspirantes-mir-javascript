let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    hobbies: ["programar", "squash", "piano"],
    estatura: 1.8,
    saluda: function () {
        console.log("Hola, me llamo " + this.nombre);
    }
}

pedro.saluda();

let llaves = Object.keys(pedro);
for(let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log(pedro[llave]);
}