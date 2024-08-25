function calcularTotalDespesas(produtos) {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
}
const despesas = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
];
const total = calcularTotalDespesas(despesas);
console.log(total); 
