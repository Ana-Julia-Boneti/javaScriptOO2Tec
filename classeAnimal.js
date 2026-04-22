class Animal{
    fazerSom(){
        console.log("Som generico de animal ...");
    }
}
class Pessoa{
    fazerSom(){
        console.log("Som generico de Pessoas ...");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log(" AU AU AU AUUUUUUUU 🐩 🐩 🐩")
    }
}
class Gato extends Animal{
    fazerSom(){
        console.log(" MIAU MIAU MIAUUUUUUUUUUUUUUUU GRRR 🐈‍⬛🐈‍⬛🐈‍⬛")
    }
}

class Pato extends Animal{
    fazerSom(){
        console.log(" QUA QUA QUA QUA QUAAA 🦆🦆🦆")
    }
}

class CriancaChorando extends Pessoa{
    fazerSom(){
        console.log("Buááá! Buááá! Buááá! Buááá!👶🏻👶🏻👶🏻 ")
    }
}

class Picolezeiro extends Pessoa{
    fazerSom(){
        console.log("OLHA O SORVETEEEEEEEE!!!!🍦🍦🍦")
    }
}
const meusObjetos = [new Cachorro(), new Gato (), new Pato (), new CriancaChorando (), new Picolezeiro ()];
 for (let i = 0; i < meusObjetos.length; i++) {
            meusObjetos[i].fazerSom();
        }