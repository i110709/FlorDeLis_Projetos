function filtrarArray(array) {
    return array.filter(item => typeof item === "number");
}

const meuArray = ['JavaScript', 1, 'Hello World!', 4, 10, '3'];
const resultado = filtrarArray(meuArray);
console.log(resultado);