function sum (x) {
    let resultado = 0;
    for (let i = 0; i < x.length; i++) {
        resultado += x[i];   
    }
    return resultado;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0