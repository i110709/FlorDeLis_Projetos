class Animal{
    constructor (nome, tipo){
    this.nome = nome;
    this.tipo = tipo;
}
get nome(){
    return this.nome
}
set nome(newNome){
    this.nome = newNome;
}
get tipo(){
    return this.tipo
}
set tipo(newTipo){
    this.tipo = newTipo;
}

emitirSom(){
    return ("miau")
}
}

class Gato extends Animal{
    constructor(nome){
        super (nome, "Gato");
}
emitirSom(){
    return "rrrrrrr" // GATO RONRONANDO //
}
}

let Binhos = new Gato();
    Binhos.nome = "Bob e Dora";
    console.log(`Nome: ${Binhos.nome};\nTipo: ${Binhos.tipo};\nSom: ${Binhos.emitirSom()}.`);
