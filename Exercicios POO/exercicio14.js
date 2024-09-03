/*14. Crie uma classe Aluno com os seguintes atributos:

nome:
matricula:
curso:
Implemente:
● Construtor com todos os parâmetros
● Métodos get e set para cada atributo*/

class Aluno{
    #nome
    #matricula
    #curso
    constructor(nome,matricula,curso,){
        this.#nome = nome
        this.#matricula = matricula
        this.#curso = curso  
    }
    get nome(){
        return this.#nome
    }
    set nome (newName){
        if (typeof newName === 'number' || typeof newName === 'boolean'){
            throw new Error ("Nome inválido!")
        }
        this.#nome = newName
    }
    get matricula(){
        return this.#matricula
    }
    set matricula(newMatricula){
        if (typeof newMatricula === 'string' || typeof newMatricula === 'boolean'){
            throw new Error ("Matricula inválido!")
        }
        this.#matricula = newMatricula
    }
    get curso(){
        return this.#curso
    }
    set curso(newCurso){
        this.#curso = newCurso
    }
    
}
let aluninho = new Aluno ("Carol",8035,"Info")
console.log(aluninho)