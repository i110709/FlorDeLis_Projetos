function receberNomeDoMes(numero){
const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

if (numero >= 1 && numero <= 12) {return meses[numero - 1];} 
}

console.log(receberNomeDoMes(8)); 
