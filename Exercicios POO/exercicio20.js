class Personagem {
    constructor(nome, pontosDeVida, forca) {
        if (this.constructor === Personagem) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this._nome = nome;
        this._pontosDeVida = pontosDeVida;
        this._forca = forca;
        this._nivel = 1;
        this._experiencia = 0;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }

    get pontosDeVida() { return this._pontosDeVida; }
    set pontosDeVida(pontosDeVida) { this._pontosDeVida = pontosDeVida; }

    get forca() { return this._forca; }
    set forca(forca) { this._forca = forca; }

    get nivel() { return this._nivel; }
    set nivel(nivel) { this._nivel = nivel; }

    get experiencia() { return this._experiencia; }
    set experiencia(experiencia) {
        this._experiencia = experiencia;
        this.verificarNivel();
    }

    verificarNivel() {
        while (this._experiencia >= this._nivel * 10) {
            this._experiencia -= this._nivel * 10;
            this._nivel++;
            this._forca += 2; 
            this._pontosDeVida += 5; 
            console.log(`${this._nome} subiu para o nível ${this._nivel}!`);
        }
    }

    atacar(alvo) {
        throw new Error("Método atacar() deve ser implementado.");
    }

    defender(dano) {
        throw new Error("Método defender() deve ser implementado.");
    }
}

class Guerreiro extends Personagem {
    constructor(nome, pontosDeVida, forca) {
        super(nome, pontosDeVida, forca);
    }

    atacar(alvo) {
        console.log(`${this._nome} ataca ${alvo.nome} com força ${this._forca}.`);
        alvo.defender(this._forca);
    }

    defender(dano) {
        const danoReduzido = Math.max(dano - this._forca / 2, 0);
        this._pontosDeVida -= danoReduzido;
        console.log(`${this._nome} defende e reduz o dano para ${danoReduzido}. Vida restante: ${this._pontosDeVida}.`);
    }
}

class Mago extends Personagem {
    constructor(nome, pontosDeVida, forca) {
        super(nome, pontosDeVida, forca);
        this._mana = 100;
    }

    get mana() { return this._mana; }
    set mana(mana) { this._mana = mana; }

    atacar(alvo) {
        console.log(`${this._nome} ataca ${alvo.nome} com um golpe de força ${this._forca}.`);
        alvo.defender(this._forca);
    }

    defender(dano) {
        this._pontosDeVida -= dano;
        console.log(`${this._nome} defende. Vida restante: ${this._pontosDeVida}.`);
    }

    lancarFeitico(alvo) {
        if (this._mana >= 20) {
            console.log(`${this._nome} lança um feitiço poderoso em ${alvo.nome}.`);
            alvo.defender(this._forca * 2);
            this._mana -= 20;
        } else {
            console.log(`${this._nome} não tem mana suficiente para lançar um feitiço.`);
        }
    }
}

class Item {
    constructor(nome, tipo, valor) {
        this._nome = nome;
        this._tipo = tipo; 
        this._valor = valor; 
    }

    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }

    get tipo() { return this._tipo; }
    set tipo(tipo) { this._tipo = tipo; }

    get valor() { return this._valor; }
    set valor(valor) { this._valor = valor; }

    aplicarEfeito(personagem) {
        if (this._tipo === "arma") {
            personagem.forca += this._valor;
            console.log(`${personagem.nome} usa ${this._nome} e sua força aumenta para ${personagem.forca}.`);
        } else if (this._tipo === "poção") {
            personagem.pontosDeVida += this._valor;
            console.log(`${personagem.nome} usa ${this._nome} e sua vida aumenta para ${personagem.pontosDeVida}.`);
        }
    }
}

class Batalha {
    constructor(personagem1, personagem2) {
        this._personagem1 = personagem1;
        this._personagem2 = personagem2;
    }

    iniciar() {
        console.log(`A batalha entre ${this._personagem1.nome} e ${this._personagem2.nome} começa!`);
        while (this._personagem1.pontosDeVida > 0 && this._personagem2.pontosDeVida > 0) {
            this._personagem1.atacar(this._personagem2);
            if (this._personagem2.pontosDeVida <= 0) {
                console.log(`${this._personagem2.nome} foi derrotado!`);
                break;
            }

            this._personagem2.atacar(this._personagem1);
            if (this._personagem1.pontosDeVida <= 0) {
                console.log(`${this._personagem1.nome} foi derrotado!`);
                break;
            }
        }
    }
}

const guerreiro = new Guerreiro('Maria', 100, 20);
const mago = new Mago('Dorinha', 80, 15);
const espada = new Item('Espada Longa', 'arma', 10);

espada.aplicarEfeito(guerreiro);

const batalha = new Batalha(guerreiro, mago);
batalha.iniciar();
