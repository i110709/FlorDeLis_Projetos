class ContaCorrente{
    #saldo
    #numeroDaConta
    constructor(numeroDaConta, saldo){
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }

    get saldo(){
        return this.saldo;
    }

    set saldo(newSaldo){
         this.saldo = newSaldo;
    }

    depositar(valorDepositado){
       this.saldo = this.saldo + valorDepositado
    }
     sacar(valorSacado){
       this.saldo = this.saldo - valorSacado
    }

    toString(){
        return (`Conta: ${this.numeroDaConta}\nSaldo: R$${this.saldo}`)
    }
}


    let contaLeh = new ContaCorrente(134, 3000);
    contaLeh.depositar(1000)
    contaLeh.sacar(250)
    
    console.log(contaLeh.toString())