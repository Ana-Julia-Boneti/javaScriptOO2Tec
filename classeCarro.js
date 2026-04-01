class Carro{
    constructor(marca, ano, kmRodados){
        this.marca = marca;
        this.ano = ano;
        this.kmRodados = kmRodados;
    }
    
    saudar(){
        console.log(`Olá! O carro é da marca ${this.marca}`);
    }
    Detalhes(){
        console.log (`o carro é um ${this.marca} é de  ${this.ano} e tem ${this.kmRodados}.`);
    }

}
let carro1 = new Carro ("Gol", 2000, "1300 kms Rodados");
carro1.saudar();
carro1.Detalhes()