function MenorNumero(array) {
    return Math.min(...array);
}
const numeros = [30, 5, 8, 20, 2];
const menorNumero = MenorNumero(numeros);
console.log(menorNumero); 
