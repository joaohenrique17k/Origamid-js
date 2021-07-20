/*
    Subclasses
            É possível criarmos uma subclasse, esta irá ter acesso aos métodos de classe à qual ela 
        estendeu através do seu protótipo.
*/
    class Veiculo {
         constructor(rodas){
             this.rodas = rodas
         }
         acelerar(){
             console.log('Acelerou');
         }
    }


    class Minhamoto extends Veiculo{
        empinar(){
            console.log(`Empinou com ${this.rodas} rodas`)
        }
    }

    const motona = new Minhamoto(2);

/*
    Métodos 
        Podemos escrever por cima de um método herdado
*/
    class Veiculo1 {
        constructor(rodas){
            this.rodas = rodas
        }
        acelerar(){
            console.log('Acelerou');
        }
    }


    class Minhamoto1 extends Veiculo{
    acelerar(){
        return 'escrevendo por cima'
    }
    empinar(){
        console.log(`Empinou com ${this.rodas} rodas`)
    }
    }

    const motona1 = new Minhamoto1(2);
    const carrao = new Veiculo1(4)

    console.log(carrao.acelerar())// Retorna Acelerou
    console.log(motona1.acelerar()) // Retorna escrevendo por cima

/*
    Super 
        É possível utilizar a palavra chama (super) para falarmos com a classe que pai e acessarmos os 
        seus métodos e propriedades.
*/
    class Bike{
        constructor(rodas){
            this.rodas = rodas;
        }
        empinar(){
            console.log('empinou')
        }
    }

    class TriciculoA extends Bike{
        empinar(){
            super.empinar();
            console.log('a bike')
        }
    }

    const triciculo = new TriciculoA(3); 
    console.log(triciculo.empinar()) //Retorna "empinou" vindo da class Bike e dps retornou "a bike" da class TriciculoA

/*
    Super e Constructor
        Podemos utilizar o super para estendermos o método constuctor.
*/
    class Numeros {
        constructor(um, dois){
            this.um = um;
            this.dois = dois;
        }
    }

    class Numeral extends Numeros{
        constructor(um,dois,tres){
            super(um, dois);
            this.tres = tres;
        }
    }

    const numeracao = new Numeral(1, 2, 3)