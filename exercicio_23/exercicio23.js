 
function removerVogais(frase) {
    let fraseSemVogais = [];
    for (let i = 0; i < frase.length; i++) {
        if (!(frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u" ||
              frase[i] === "A" || frase[i] === "E" || frase[i] === "I" || frase[i] === "O" || frase[i] === "U")) {
            fraseSemVogais.push(frase[i]);
        }
    }
    return fraseSemVogais.join("");
}
let frase = "Java é melhor que Python ps. opnião de Kaylane";
let resultado = removerVogais(frase);
console.log(resultado);