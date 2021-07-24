/*
    Escopo
        Quanco criamos uma função, a mesma possui acesso à todos as variaveis criadas em seu escopo
        e também ao escopo pai. A mesma coisa acontece para funções dentro de funções.
*/
    // let item1 = 1;
    //     function funcao1(){
    //         let item2 = 2;
    //         function funcao2(){
    //             let item3 = 3;
    //         }
    //     }

    //funcao1, tem acesso ao item1 e item2
    //funcao2, tem acesso ao item1, item2, item3 e escopo global.
/*
        Clojures
            A funcao2 possui 4 escopos. O primeiro escopó é o Local, com acesso ao item3. O segundo escopo
            dá acesso ao item2, esse escopo é chamado de Clojure(funcao1)(escopo de função dentro de função).
            O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.

*/
    let item1 = 1;
    function funcao1(){
        let item2 = 2;
        function funcao2(){
            let item3 = 3;
            console.log(item1);
            console.log(item2);
            console.log(item3);
        }
        funcao2();
    }

/*
    Debugging
    
        É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através de próprio
        Visual Studio Code. Se o código possuir qualquer Web Api, o processo deve ser feito no Browser. Plugins podem
        interferir no debug dentro do browser.

*/

/*
    Caso Clássico
        Um dos mais clássicos para a demonstração de Clojures é através de criação de uma função de incremento.
        É como se a função incrementar carregasse uma mochila chamada contagem, onde um referência para as suas variáveis 
        estão contidas na mesma.
*/

    function contagem(){
        let total = 0;
        return function incrementar(){
            total++;
            console.log(total)
        }
    }
  
        const ativarIncrementar = contagem();
        ativarIncrementar();
        ativarIncrementar();
        