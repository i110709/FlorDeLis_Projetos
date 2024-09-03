class Pessoa{
    constructor(nome,idade,altura){
       this.nome = nome
       this.idade = idade
       this.altura = altura
    }
    toString(){
        return`${this.nome} (${this.idade}anos, ${this.altura}m)`;
    }
}
let pessoa = new Pessoa("Isadora", 17, 1.60)
console.log(pessoa.toString())
