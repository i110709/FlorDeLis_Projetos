function filtrarPalavras(palavra, array) {
    const palavrasFiltradas = array.filter(item => item.includes(palavra));
    console.log(palavrasFiltradas);
}
const palavra = 'ro';
const arrayDeStrings = ['roxo', 'laranja', 'verde', 'lilás', 'rosa'];
filtrarPalavras(palavra, arrayDeStrings);