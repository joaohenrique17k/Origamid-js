//Some 500 ao valor do scroll abaixo, atribuindo um novo valor ao scroll
var scroll1 = 1000;
scroll1 += 500;
console.log(scroll1);


//Atribuie true para a variável darCredito,caso o cliente possua carro e casa
//e false ao contrário

let possuiCarro = true;
let possuiCasa = true;
let darCredito;

    if(possuiCarro && possuiCasa)
        darCredito = true;
    else
       darCredito = false;

       console.log(darCredito)