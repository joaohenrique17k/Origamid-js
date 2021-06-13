/*          
    Number  
    É a construtora de números, todo número possui as propriedades e métodos do 
    prototype de Number. Number também possui alguns métodos

*/
 const ano = 2021;
 const preco = new Number(99)
/*
    (método direto no number)
    Number.isNaN() e Number.isInteger()

    isNaN() é um método de Number, ou seja, não faz parte do protótipo.isinteger()
    verifica se é uma integral(não tem valor decimal(numero inteiro))

*/
    console.log(Number.isNaN(NaN))// Retorna true
    console.log(Number.isInteger(20))// Retorna true porque é um int
    console.log(Number.isInteger(20.4))// Retorna false porque é um float

/*  
    .parseFloat() e parseInt()
    parseFloat serve para retornamos um número a partir de uma string. A string
    deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

*/
    parseFloat('99.50'); // Mesma função sem o Number
    Number.parseFloat('99.50'); // 99.5
    Number.parseFloat('100 Reais'); // 100
    Number.parseFloat('R$ 100'); // NaN

    parseInt('99.50', 10); // 99
    parseInt(5.43434355555, 10); // 5
    Number.parseInt('100 Reais', 10); // 100
/*
    .toFixed(decimais)

    Arredonda o número com base no total de casas decimais do argumento
    acima de 50(decimal) ele arredonda para cima 
    abaixo disso é para baixo.
*/
    const preco1 = 2.99;
    preco1.toFixed();// retorna 3

    const carro = 2.40;
    carro.toFixed();//retorna 2

    const valor1 = 1000.455;
    valor1.toFixed(2)

/*
    toString(radix)

    Trasnforma o número em uma string com base no Radix. Use

*/
    console.log(preco1.toString(10));

/*
    toLocaleString(lang, options)


*/
    const preco2 = 59.49;
    preco2.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
    preco2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
    console.log(preco1.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}));//R$  2,99

/*
    Math

    É um objeto nativo q possui propriedades e métodos de expressões matemáticas comuns.
*/
    console.log(Math.PI.toFixed(2))// Math.pi retorna o valor de pi, toFixed(2) deixa apenas 2 casas decimais depois do 3.
    console.log(Math.random())// retorna um número aleatório entre 0 e 1
    console.log(Math.abs(-3))// Transforma um número negativo em positivo
    console.log(Math.ceil(4.8334));// Arredonda para um número inteiro(vai sempre para cima)
    console.log(Math.floor(4.8334))// Arredonda para número inteiro(vai para baixo)
    console.log(Math.max(10,3,4,12,21,3,59))// Pega uma lista de argumentos e retorna o maior
    console.log(Math.min(10,3,4,12,21,3,59))// Pega uma lista de argumentos e retorna o menor
    console.log(Math.random() * 100);//Número aleatório de 0 a 100
    console.log(Math.floor(Math.random() *  10))// Número aleatório exato

    //Número aleatorio entre  72 e 32
    console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32)




