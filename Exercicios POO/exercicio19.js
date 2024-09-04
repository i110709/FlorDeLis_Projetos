class Veiculo {
    constructor(placa, modelo, capacidade) {
        this.placa = placa;
        this.modelo = modelo;
        this.capacidade = capacidade;
        this.lotacaoAtual = 0;
    }

    getPlaca() {
        return this.placa;
    }

    setPlaca(placa) {
        this.placa = placa;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    getCapacidade() {
        return this.capacidade;
    }

    setCapacidade(capacidade) {
        this.capacidade = capacidade;
    }

    verificarLotacao() {
        return this.lotacaoAtual;
    }
    adicionarPassageiros(numPassageiros) {
        if (this.lotacaoAtual + numPassageiros > this.capacidade) {
            console.log('Capacidade excedida! Não é possível adicionar mais passageiros.');
        } else {
            this.lotacaoAtual += numPassageiros;
            console.log(` Passageiros adicionados. Lotação atual: ${this.lotacaoAtual}`);
        }
    }
 removerPassageiros(numPassageiros) {
        if (this.lotacaoAtual - numPassageiros < 0) {
            console.log('Não há passageiros suficientes para remover.');
        } else {
            this.lotacaoAtual -= numPassageiros;
            console.log(` Passageiros removidos. Lotação atual: ${this.lotacaoAtual}`);
        }

    }
}
class Onibus extends Veiculo {
    constructor(placa, modelo, capacidade, linha) {
        super(placa, modelo, capacidade);
        this.linha = linha;
    }

    getLinha() {
        return this.linha;
    }

    setLinha(linha) {
        this.linha = linha;
    }
}

class Metro extends Veiculo {
    constructor(placa, modelo, capacidade, numeroDeVagoes) {
        super(placa, modelo, capacidade);
        this.numeroDeVagoes = numeroDeVagoes;
    }

    numeroDeVagoes
    getNumeroDeVagoes() {
        return this.numeroDeVagoes;
    }

    setNumeroDeVagoes(numeroDeVagoes) {
        this.numeroDeVagoes = numeroDeVagoes;
    }
}

class Bilhete {
    constructor(codigo, saldo) {
        this.codigo = codigo;
        this.saldo = saldo;
    }

    getCodigo() {
        return this.codigo;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
    recarregar(saldoAdicional) {
        this.saldo += saldoAdicional;
        console.log(` Saldo recarregado. Novo saldo: ${this.saldo}`);
    }
}

let onibus = new Onibus('ABC-1234', 'Mercedes', 40, 'Linha 10');
let metro = new Metro('XYZ-5678', 'Siemens', 200, 8);

let bilhete = new Bilhete('12345', 50);

console.log('Capacidade do ônibus:', onibus.getCapacidade());
onibus.adicionarPassageiros(30);
onibus.adicionarPassageiros(15);
onibus.removerPassageiros(10);

console.log('Saldo do bilhete:', bilhete.getSaldo());
bilhete.recarregar(20);

console.log('Capacidade do metrô:', metro.getCapacidade());
metro.adicionarPassageiros(150);