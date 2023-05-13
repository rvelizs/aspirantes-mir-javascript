function join (x) {
    let cadena = "";
    for(let i = 0; i < x.length; i++) {
        cadena = cadena + x[i] + " ";
    }
    return cadena;
}

console.log(join(["Hola", "que", "tal"])) // "hola que tal "
console.log(join(["Hola", 24, "que", "tal"])) // "hola que tal "