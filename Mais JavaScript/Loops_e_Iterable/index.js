/*
    Iterable

        São objetos que possuem o método [Symbol.iterator], geralmente no 
        protótipo, é dentro dele que a função que lida com a iteração será 
        definida. Ex: Array, String, NodeList, boa parte das Array-Like e
         outros.

*/
    const frutas = ['Banana', 'Morango', 'Uva'];
    const frase = 'Isso é JavaScript';

    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(({headers}) => console.log(headers));
/*
    for...of

        É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.
*/

    for(const i of frutas){
        console.log(i)// Banana, morango, uva
    }

/*
    Spread e for...of

        Com o for loop podemos manipular cada um dos elementos do objeto iterável
*/

    const btns =  document.querySelectorAll('button');

    for(let i of btns){
        i.style.background = 'blue';
        i.style.color = 'white';
        i.style.borderRadius = '3px'
        i.style.border = 'none';
    }

    console.log(...btns);

/*
    Apenas Iteráveis

        O for...of não irá funcionar em um objeto comum que não seja iterável.
*/
    const carro = {
        marca: 'Honda',
        ano: 2018,
    }
    
    // Erro, não é Iterável
    // for(const propriedade of carro) {
    //     console.log(propriedade);
    // }

/* 
    for...in

        Este loop irá retornar a chave (key) de todas as propriedades enumeráveis 
        (que não sejam símbolos) de um objeto.

*/

    
    for(const propriedade in carro) {
        console.log(carro[propriedade]);
    }
/*
    Arrays e for...in

        Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.
*/


    for(const index in frutas) {
    console.log(index);
    }

    for(const index in frutas) {
    console.log(frutas[index]);
    }

/*
    Chave e Valor

        Utilizando o for...in podemos retornar todas as chaves e 
        valores de propriedades enumeráveis.
*/
    const btn = document.querySelector('button')
    const btnStyle = window.getComputedStyle(btn);

    for(let style in btnStyle){
        console.log(`${style}: ${btnStyle[style]}`)
    }