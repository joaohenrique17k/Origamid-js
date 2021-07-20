// FUNCTION EXPRESSION

/*
    Function Declaration
    
            São duas formas mais comuns de declararmos uma função. A que utililizamos até o momento é 
        chamado de Function Declaration.

*/
    function somar(a, b){
        return a + b;
    }
    console.log(somar(10, 30))// Retorna 40

/*
    Function Expression
        
            É croada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função
        pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

*/

    const subtrair = function(a, b){
        return a - b;
    }
    console.log(subtrair(30,10)) // Retorna 20
/*
    Hosting 
            Fuction Declaration são completamnete definidas no momento do hoisting, Já function expressions apenas serão definidas
        no momento de execução. Por isso a ordem da declaração de um FE possui importância.
*/
    somar1(4,2); // 6
    //dividir1(4,2); // Erro

    function somar1(a,b) {
        return a + b;
    }
    const dividir1 = function(a,b) {
        return a / b;
    }
/*
    Arrow Functuon 
        Podemos criar utilizando arrow functions

*/
    const somar3 = (a,b) => a + b;
    console.log(somar3(100,200)) // Return 300

    const quadrado = a => a * a;
    
/*
    Estrutura / Preferência

     Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression 
    força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

 */
    // Declarada como método de window
    // vaza o escopo de bloco, como se
    // fosse criada utilizando var
    function somar4(a,b) {
        return a + b;
    }
    const dividir4 = (a,b) => a / b;
    
    somar4(4,2);
    dividir4(4,2);
  
/*
    IIFE - Immediately Invoked Function Expression

        Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum 
        utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.


        var instrumento = 'Violão';

        (function() {
        // código isolado do escopo global
        var instrumento = 'Guitarra';
        console.log(instrumento); // Guitarra
        })();

        console.log(instrumento); // Violão

*/
function callback(){
    console.log('ssss')
}