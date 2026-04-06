class ContaBancaria{
    #saldo = 0;

    constructor(titular){
        this.titular;
    }

    depositar(valor){
        if(valor){
            this.#saldo += valor;
            console.log(`Deposito de ${valor} feito.`);
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito`);
        }else{
            console.log("saldo insuficiente ou valor in");
        }
    }

    exibirsaldo(){
        return `Ola, seu saldo é ${this.#saldo}`;
    }
}

const conta1 = new ContaBancaria("Ana, o Huno");
conta1.depositar(10000);
conta1.depositar(10000);
conta1.depositar(10000);
conta1.depositar(10000);
conta1.depositar(10000);
conta1.sacar(400);
conta1.sacar(60);
conta1.sacar(4000);
console.log (conta1.exibirsaldo())