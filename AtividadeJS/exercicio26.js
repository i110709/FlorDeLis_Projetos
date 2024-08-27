function segundoMaior(numeros) {
    let ordenado = numeros.sort((a, b) => b - a);
    return ordenado[1];
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6])); 
