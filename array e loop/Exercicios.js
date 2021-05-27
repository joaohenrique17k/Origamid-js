//Crie um array com os anos que o Brasil ganhou a copa
// 1959,1962,1970,1994,2002
let copa = ['1959','1962','1970','1994','2002'];


//Interaja com o array utilizando um loop, para mostrar 
//no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`;

copa.forEach((ano)=> console.log(`O brasil ganhou a copa de ${ano}`))

//Interaja com o loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana','Maça','Pera','Uva','Melância'];
    for(let u = 0;u < frutas.length;u++){
        console.log(frutas[u]);
        if(frutas[u] == 'Pera'){
            break;
        }
    }
    
//Coloque o última fruta do array cima em uma variável
//Sem remover do array

    frutas.forEach((d)=>{
        if(d == 'Melância'){
         let ff = d;
         console.log(ff)
         
        }
    })
