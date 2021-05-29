/*
        Escopo de Função

        Variáveis declaradas dentro da função não são acessadas fora das mesmas
        (Escopo serve para evitatar conflitos internos ente os nomes)

*/

function mostrarCarro(){
   let carro = 'Fusca';
    console.log(carro)
}

mostrarCarro(); //Retorna no console "Fusca"
console.log(carro)// Erro, caro is not defined


/*
    Escopo global(Erro);

    Não declarar uma variavel com var, let e const pode gerar um erro em que essa mesma "variável" que pode ser 
    acessada em qualquer lugar do seu código.

    Podemos resolver isso declarando no começo do código: 'use strict'

*/
 
    function mostrarCarro(){
        carro = 'Fusca';
        console.log(carro)// Retorna "Fusca"
        //ESCOPO DE FUNÇÃO
    }
    
    mostrarCarro(); 
    console.log(carro)// // Retorna "Fusca"


/*
        ESCOPO BLOCO

        Variáveis declaras com var dentro do escopo de bloco vazam para o escopo geral.Por isso 
        devemos usar let ou const.

        Escopo de bloco = tudo que usa chaves {} menos funções ex:if,while, etc.
*/
    let casa  = true;

    if(casa){
        var cor = "azul";
        console.log(cor);// Retorna azul
    }
    console.log(cor)//Aqui também retorna azul(A informação vazou do escopo de bloco).
    

    //Sempre usar Let e Const

    //Usando var no for  o resultado acaba vazando, primeiro ele executa a condição e dps o valor todo pode ser usado fora
    for (var  j  = 0; j < 10; j++) {
        console.log(`ksksksksksksk${j}`)//repete dez vezes do  0 ao 9
        
    }
    console.log(j) // retorna 10

    //por isso devemos usar let ou const

/*
            CONST

            Evita redeclaração e impede a modificação da variável(mantém o escopo no bloco)
            impede a declaração com um valor não definido
            */
    
    const nome = 'João'/
    nome = 'Henrique' //Erro, tentou modificar o valor;
    const semana; // erro, declarou sem valor.

/*
            LET 

            Evita a redeclaração mas permite modificar o seu valor.(não vaza o escopo de bloco)
*/
    let ano;
    ano = 2021;
    ano++;//2022;
    console.log(ano)//2022

    let ano = 2023//erro, redeclarou a variável