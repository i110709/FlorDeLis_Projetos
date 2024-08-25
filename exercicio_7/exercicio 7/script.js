function multiplicar(num1, num2) {
	if (num1 && num2 >= 0) {
        let resposta = Math.imul(num1, num2);
		return resposta;
	}
    else {
        console.log("o número é < 0");
    }
}

console.log(multiplicar(3,5));