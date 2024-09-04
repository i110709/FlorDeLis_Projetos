class Endereco{
#rua
#numero
#complemento
#bairro
#cidade
#estado
#cep
    constructor(rua, numero, complemento, bairro, cidade, estado, cep){
        this.#rua = rua
        this.#numero = numero
        this.#complemento = complemento
        this.#bairro = bairro
        this.#cidade = cidade
        this.#estado = estado
        this.#cep = cep
}
get #rua(){
    return this.#rua;
}
set #rua(novaRua){
    this.#rua=novaRua
}
get #numero(){
    return this.#numero;
}
set #numero(novoNumero){
    this.#numero = novoNumero;
}
get #complemento(){
    return this.#complemento;    
} 
set #complemento(novoComplemento){
    this.#complemento = novoComplemento
}
get #bairro(){
    return this.#bairro;
}
set #bairro(novoBairro){
    this.#bairro = novoBairro;
}
get #cidade(){
    return this.#cidade;
}
set #cidade(novaCidade){
    this.#cidade = novaCidade;
}
get #estado(){
    return this.#estado;
}
set #estado(novoEstado){
    this.#estado = novoEstado;
}
get #cep(){
    return this.#cep;
}
set #cep(novoCep){
    this.#cep= novoCep;
}
}

let enderecoA = new Endereco();
enderecoA.rua = "Lilas";
enderecoA.numero = "76"
enderecoA.complemento = "Casa"
enderecoA.bairro = "Madalena"
enderecoA.cidade = "Recife"
enderecoA.estado = "Pernambuco"
enderecoA.cep = "26260-420"