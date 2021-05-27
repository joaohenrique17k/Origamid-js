// nomeie 3 propriedades ou métodos de strings
    var cs = 'Cs:go';
    let cross = 'Crossfire';
    const fifa = 'Fifa2021'

    console.log(cs.toUpperCase());
    console.log(cs.toLowerCase());
    console.log(cs.toString());
    console.log(cs.valueOf());

// nomeie 5 propriedades ou métodos de elementos do DOM
const pegar = (l)=>document.querySelector(l);
let btn1 = pegar('.btn1');
let btn2 = pegar('.btn2');
let btn3 = pegar('.btn3');
new Clipboard('.btn');

///className()   /.classList//add()   //tagName()
//Busque na Web um objeto(Método) capaz de interagir com o clipbord,
//clipbord é a parte do seu computador que lida com CTRL + C e CTRL + V