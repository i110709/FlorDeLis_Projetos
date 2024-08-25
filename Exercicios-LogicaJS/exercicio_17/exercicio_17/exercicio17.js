function calculandoMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}
const valores = [13, 24, 32, 46, 55];
const media = calculandoMedia(valores);
console.log(media); 