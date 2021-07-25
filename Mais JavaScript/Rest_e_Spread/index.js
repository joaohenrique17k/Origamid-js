/*
    Parâmetros

        Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a 
        falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não 
        sejam declarados.
*/

    function perimetroForma(lado, totalLados){
        return lado * totalLados
    }

    perimetroForma(10, 4) //40
    perimetroForma(10) //NaN

    //podemos definir um valor padrão diretamente na função para caso não seja passado o segundo
    //paramêtro ele posssa executar a função sem dar (NaN) 

    // function perimetroForma(lado, totalLados = 4){
    //     return lado * totalLados
    // }
/*
    Arguments

        A palavra chave arguments é um objeto Array-like criado dentro da função. Esse 
        objeto contém os valores dos argumentos
*/ 
    function somar(n1,n2){
        console.log(arguments) // Arguments { 0: 10, 1: 20, … }
        return n1 + n2;
    }
    somar(10,20)

/*
    Parâmetro Rest

     É possível declararmos uma parâmetro utilizando ... na frente do mesmo.
      Assim todos os argumentos que passarmos na ativação da função, ficarão
       dentro do parâmetro. 

       Só é possível ter um único parâmetro rest e ele deve ser o último.
*/

    function anunciarGanhadores(...ganhadores) {
        ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou.')
        });
    }
    
    anunciarGanhadores('Pedro', 'Marta', 'Maria');

/*
    Rest vs Arguments

        Apesar de parecidos o parâmetro rest e a palavra arguments possuem 
        grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.

*/

/*
    Operador Spread

        Assim como o rest, o operador Spread também utiliza os ... para ser 
        ativado. O spread irá distribuir um item iterável, um por um.
*/

    const series = ['doctor Who','Vikings']
    const abc = ['a', 'b', 'c']

    const aleatorio = [...series, 'chocolate', ...abc] 
    console.log(aleatorio)// Pega os itens dos dois arrays e joga para o array 'aleatorio'.

/*
    Spread Argument

        O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.    
*/

    const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

    const listaNumeros = [1,13,21,12,55,2,3,43];
    const numeroMaximoSpread = Math.max(...listaNumeros);

/*
    Transformar em Array

        É possível transformar itens iteráveis em uma array real com o spread.
*/

    const botoes = document.querySelectorAll('button');
    const newArraybotoes = [...botoes];

    console.log(newArraybotoes)
