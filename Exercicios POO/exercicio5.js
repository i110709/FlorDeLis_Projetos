class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    get dia() {
        return this._dia;
    }

    set dia(newDay) {
        if (newDay < 1 || newDay > 31) {
            throw new Error("Dia inválido");
        }
        this._dia = newDay;
    }

    get mes() {
        return this._mes;
    }

    set mes(newMes) {
        if (newMes < 1 || newMes > 12) {
            throw new Error("Mês inválido");
        }
        this._mes = newMes;
    }

    get ano() {
        return this._ano;
    }

    set ano(newYear) {
        if (newYear < 1) {
            throw new Error("Ano inválido");
        }
        this._ano = newYear;
    }

    toString() {
        return `${this.dia.toString().padStart(2, '0')}/${this.mes.toString().padStart(2, '0')}/${this.ano}`;
    }
}

let data = new Data(12, 2, 2007);
console.log(data.toString()); 

