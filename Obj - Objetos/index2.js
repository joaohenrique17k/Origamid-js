/*
    Object.getOwnPropertyDescriptors(obj)

    Lista todos os métodos e propriedades de um objeto, com as suas devidas
    configurações

*/

    console.log(Object.getOwnPropertyDescriptors(Array))
    //Lista todos os métodos e propriedades do Array

    console.log(Object.getOwnPropertyDescriptors(Array.prototype))
    //Lista todos os métodos e propriedades do Array prototype

    console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'))
    //Retorna uma unica propriedade do window a innerHeight

    /*
        Object.keys(obj), Object.values(obj) Object.entries(obj)

       Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. 
       Object.values(obj) retorna uma array com os valores do objeto. 
       Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
     */

    const estojo = {
        cor:'Amarelo',
        Qlapis:10,
        borracha:1,
    }

    console.log(Object.keys(estojo))// Retorna um array com todos os propriedades do objeto estojo
    //[ "cor", "Qlapis", "borracha" ]

    console.log(Object.values(estojo)) // Retorna um array com todos os valores do objeto estojo
    //[ "Amarelo", 10, 1 ]

    console.log(Object.entries(estojo)) // retorna um array para cada valor e propriedade do objeto estojo
  /*Array(3) [ (2) […], (2) […], (2) […] ]
    0: Array [ "cor", "Amarelo" ]
    1: Array [ "Qlapis", 10 ]
    2: Array [ "borracha", 1 ]
    length: 3
    */

/*
    Object.getOwnPropertyNames(Obj)

    Retorna um array com todas as propriedades diretas do objeto.
*/
    console.log(Object.getOwnPropertyNames(Array)) //  Retorna um array com cada propriedade direta do array
    //sem envolver as do prototipo [ "isArray", "from", "of", "prototype", "length", "name" ]
 
    console.log(Object.getOwnPropertyNames(Array.prototype))// Retorna um array com cada propriedade do array prototipo
    //[ "length", "toString", "toLocaleString", "join", "reverse", "sort", "push", "pop", "shift", "unshift", … ]

    const frutas = ['Banana'];
    console.log(Object.getPrototypeOf(frutas)) // Retorna o prototipo do array

   const frutas1 = ['Banana','uva']
    const frutas2 = ['Banana','uva']

    console.log(Object.is(frutas1, frutas2))// Compara Frutas1 com frutas2 e retorna false porque eles não são iguais

    const frutas3 = frutas2;

    console.log(Object.is(frutas3, frutas2)) // Retorna true

/*
    Object.freeze(), Object.seal(), Object.preventExtensions()

    Object.freeze() impede qualquer mudança nas propriedades. 
    Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. 
    Object.preventExtensions() previne a adição de novas propriedades.
*/
    const animais = {
        nome:'macaca',
        altura:1.80,
    }
    Object.freeze(animais)//Bloqueia qualquer mudança nas propriedades
    Object.seal(animais) //Previne a adição de novas propriedades mas deixa editar as já existentes. não permite exclusão de existentes
    Object.preventExtensions(animais)//Previne a adição de novas propriedades mas deixa exclir antigas 

    console.log(Object.isFrozen(animais))// Retorna true pois Animais está com freeze
    

/* Propriedade e métodos do protótipo 

    Já que tudo em Javascript é objeto, as propriedades abaixo estão disponíveis em todos
    os objetos criados a partir de funções construtoras {}.constuctor retorna uma função construtora 
    de objeto.
*/

    const cores = ['Branco','Preto'];
    cores.constructor;//Array

    const letras = "A,B,C,D,E,F,G";
    letras.constructor;

/*
    {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')

    Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto
    e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
*/

    const celular = ['Samsung','Motorola'];

    console.log(celular.hasOwnProperty('map')) // Retorna false pois não existe map diretamente em array como vimos na linha 51.
    console.log(Array.prototype.hasOwnProperty('map'))// Retorna true pois em Array.prototype existe 'map'.


    console.log(Array.prototype.propertyIsEnumerable('map'));// False
    console.log(window.propertyIsEnumerable('innerHeight'))// True

/*
    {}.isPrototypeOf(Valor)

    Verifica se é o protótipo do valor passado.
*/
    const teclado = ['Kumara'];

    console.log(Array.prototype.isPrototypeOf(teclado))// True

/*
    {}.toString

    Retorna o tipo do Objeto. O problema é toString() ser um função dos protótipos de Array, String e mais.
    Por isso é comum utilizarmos a função diretop do 
    Object.prototype.toString.call(valor)

*/
    const bebidas = ['Café','Toddy'];
    

    console.log(bebidas.toString())// Retorna uma string: Café,Toddy 

    console.log(carro.toString())// Retorna object Object

    console.log(Object.prototype.toString.call(bebidas))// Retorna Object Array

    const frutas = ['Banana', 'Uva'];
    
// frutas.toString(); // 'Banana,Uva'
// typeof frutas; // object
// Object.prototype.toString.call(frutas); // [object Array]

// const frase = 'Uma String';
// frase.toString(); // 'Uma String'
// typeof frase; // string
// Object.prototype.toString.call(frase); // [object String]

// const carro = {marca: 'Ford'};
// carro.toString(); // [object Object]
// typeof carro; // object
// Object.prototype.toString.call(carro); // [object Object]

// const li = document.querySelectorAll('li');
// typeof li; // object
// Object.prototype.toString.call(li); // [object NodeList]

