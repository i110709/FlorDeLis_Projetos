
function obterPrimeiroEUltimoElemento(arr) {
    if (arr.length === 0) {return [];}
    return [arr[0], arr[arr.length - 1]];
}
console.log(obterPrimeiroEUltimoElemento([1, 2, 3, 4, 5])); 
console.log(obterPrimeiroEUltimoElemento(['a', 'b', 'c'])); 
console.log(obterPrimeiroEUltimoElemento([42])); 
console.log(obterPrimeiroEUltimoElemento([]));
