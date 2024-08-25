function somarNumeros(array) {
    let soma = 0;
    for (const numero of array) {
        soma += numero;
    }
    return soma;
}

const numeros = [10, 20, 30, 40];
const resultado = somarNumeros(numeros);
console.log(resultado); 

