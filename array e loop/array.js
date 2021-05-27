/*
    Array é usado para guardar conjuntos de informações(variáveis)
    array é iniciado com [] e dentro dele cada item que é string fica entre aspas simples ''
    
*/

    let  videoGame = ['Ps4','Xbox','Switch', '3DS'];
    console.log(videoGame);
/*
  Métodos  e propriedades de um array

    console.log(videoGame.pop())//Remove o último item e retorna ele(Switch)
    console.log(videoGame.push('Nitendo'))//Adiciona  o item um item no final do array
    console.log(videoGame.reverse())// Reverte o array
    console.log(videoGame.length)
*/
    for(let a = 0;a < videoGame.length;a++){
        console.log(videoGame[a])
    }

