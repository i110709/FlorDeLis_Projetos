function inverso(valor) {
	if (typeof valor === 'number') {
		return valor * (-1);
	} else if (typeof valor === 'boolean') {
		return !valor;
	} else {
		return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
	}
}
console.log (inverso("5"))