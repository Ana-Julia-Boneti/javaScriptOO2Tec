class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calcularMedia() {
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }
        return soma / this.notas.length;
    }

    obterStatus(){
        const media = this.calcularMedia()

        if(media >=7 ){
            return "Aprovado"
        }else if (media >= 5){
            return "Recuperação"
        } else {
            return "Reprovado"
        }
        
    }

    exibirRelatorio(){
        console.log(` Relatorio do Aluno ${this.nome}`);
        console.log(` Matricula ${this.matricula}`);
         console.log(`Media final ${this.calcularMedia()}`);
        console.log(`Status ${this.obterStatus()}`);
    }
}
let Aluno1 = new Aluno("Ana", 5550, [8.0, 7.3, 9.0]);
console.log(Aluno1.calcularMedia())
console.log(Aluno1.obterStatus())