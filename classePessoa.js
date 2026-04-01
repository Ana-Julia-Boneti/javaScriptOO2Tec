class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log(`Olá! Meu nome é ${this.nome}!`)
    }
fazerAniversario(){
    this.idade += 1;
    console.log (`Feliz aniversario, agora a ${this.nome} tem ${this.idade} e é ${this.profissao}.`)
    }
}

let pessoa1 = new Pessoa ("Ana", 16, "Babá");
pessoa1.saudar();
pessoa1.fazerAniversario();