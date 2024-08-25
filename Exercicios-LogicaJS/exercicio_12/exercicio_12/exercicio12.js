function objetoArray(objeto) {
	const arraysDeArray = [];
	for (const chave in objeto) {
		const parChaveValor = [chave, objeto[chave]];
		arraysDeArray.push(parChaveValor)
	}
	return arraysDeArray;
}
const meuObjeto = { nome: "Kaylane", idade: 17, cidade: 'Recife' };
const resultado = objetoArray(meuObjeto);
console.log(resultado);
