function maxIndex (x) {
    if (x.length === 0) {
        return -1;
    }

    let indiceMayor = 0;
    let maximo = x[0];

    for(let i = 1; i < x.length; i++) {
        if (x[i] > maximo) {
            maximo = x[i];
            indiceMayor = i;
        }
    }
    return indiceMayor;
}






console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0

console.log(maxIndex([])) // -1