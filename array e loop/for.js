/*
    Forma de fazer algo repetidamente
*/
    //LOOP são sempre três partes separados por ponto e virgula ;
    for(let i = 0;i < 10;i++){
        console.log(i);//Retorna do 0 até o 9
    }

    let r = 0;
    while(r < 10){
        console.log(r)
        r++;
    }



   
    let videoGame = ['ps4','xbox','nitendo','3DS'];
  
    for(let a = 0;a < videoGame.length;a++){
    console.log(videoGame[a])
}

/*  BREAK
    O loop irá parar caso alguma condição ocorra
    Break interrompe uma condição caso ela seja verdade


*/

for(let a = 0;a < videoGame.length;a++){
    console.log(videoGame[a])
    if(videoGame[a] === 'ps4'){
        break;
    }
}

/*
    forEach  
        ForEach é um método de array que executa uma função para cada item do array.
        É uma forma mais simples de utilizarmos loops com arrays (ou array-likes = Objetos que se parecem com arrays)
        Parâmetros item,index,array
        item = Valor do array
        index = Valor de cada array
        array = array completo
        O argumento é utilizado dinamicamente


*/
 let comida = ['Arroz','Feijão','Carne','Salada'];

 comida.forEach(function(item){
        console.log(item)
 })

 /* 
    Cuidado com a Sintaxe 

 */
    let  n = 0;
    let l = 50;
    for(;n < l;){
        console.log(n);
        n++;
    }