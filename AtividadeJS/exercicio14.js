function Bissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log("É BISSEXTO!");
    } else {
        console.log("NÃO É BISSEXTO!");
    }
}

const ano = 1999;
Bissexto(ano);
