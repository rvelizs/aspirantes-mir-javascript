function suma (num) {
	var sum = 0;
	for (var i = 1; i <= num; i++) {
		sum = sum + i;
	}
	return sum;
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120
