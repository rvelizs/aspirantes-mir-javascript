function max (x) {
    let maximo = x[0];
    for (let i = 1; i < x.length; i++) {
        if(x[i] > maximo){
            maximo = x[i];
        }
    }
    return maximo;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined