function filtrarPorDigitos(array, quantidadeDigitos) {
    function contarDigitos(numero) {
        return String(Math.abs(numero)).length;
    }
    const resultado = array.filter(numero => contarDigitos(numero) === quantidadeDigitos);

    return resultado;
}
const array = [1, 23, 46, 780, 1345];
const quantidadeDigitos = 2;
const resultado = filtrarPorDigitos(array, quantidadeDigitos);
console.log(resultado);