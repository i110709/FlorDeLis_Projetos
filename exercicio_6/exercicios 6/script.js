function estaEntre(numero, minimo, maximo, inclusivo = false) {
	if (inclusivo === true) {
		return numero >= minimo && numero <= maximo;
	} else {
		return numero > minimo && numero < maximo;
	}
}

console.log(estaEntre(10, 50, 100))