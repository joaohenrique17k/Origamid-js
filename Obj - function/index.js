/*
    Function

    toda função é criada com o construtor function e por isso
    herda prorpiedades e métodos.

*/
function soma(n1,n2){
    return n1 + n2;
}
console.log(soma(1,2))// 3
console.log(soma.length)// Retorna dois que é a quantidade de parâmentros
console.log(soma.name)// Retorna o nome da soma

/*
    Function call
    
    function.call(this,arg1, agr2,...) executa a função
    sendo possível passarmos uma nova refêrencia ao this da mesma
*/

    const carro = {
        marca: 'Ford',
        ano:2018
    }

    function descriçaoCarro() {
        console.log(this.marca + ' ' + this.ano);
    }

    descriçaoCarro.call({marca: 'Honda', ano:2021})

/*
    This

    O valor de this faz referência ao objeto criado durante a construção do objeto
    constructor function. Podemos trocar a referência do método this, utilizando call();

*/
    const carros = ['Fiat','Uno','Ford'];
   

    carros.forEach.call(carros, (item)=>{
        console.log(item)
    })

    const frutas = ['Banana', 'Uva', 'Melancia'];

    frutas.forEach.call(carros,(item)=>{
        console.log(item) //Retorna a mesma coisa
    })

/*
    Exemplo Real

    O objeto atribuido a lista será o substituido pelo primeiro argumento de call
*/
    function Dom(selector){
        this.element = document.querySelector(selector)
        console.log(this.element)
    }
    Dom.prototype.ativo = function(classe){
        this.element.classList.add(classe);
    }
    const lista = new Dom('ul');
    lista.ativo('ativar');
   
    //const li = {
      //  element: document.querySelector('li')
    //}
    //lista.ativo.call(li,'ativar'); //O primeiro li com a class ativo

/*
    Array-like

    HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar
     os mesmos na substituição do this em call.

*/  
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo

/*  
    Function Apply
    
    O aplly(this, [arg1, arg2, ...]) funciona da mesma maneira que call, a única diferença é qque os argumentos 
    da função são passados através de uma array
*/
    const numeral = [1,2,3,4,5,6,7];
    const maxx = Math.max.apply(null, numeral);
    console.log(maxx)// Retorna 7


    /*
    Apply vs Call

    A  única diferença é a array como segundo argumento.
    */


    const lii = document.querySelectorAll('li');

    function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
    }

    const filtro1 = Array.prototype.filter.call(lii, itemPossuiAtivo);
    const filtro2 = Array.prototype.filter.apply(lii, [itemPossuiAtivo]);

/*
    function.bind()

    Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.



*/

    const lu = document.querySelectorAll('li');

    const filtrarLi = Array.prototype.filter.bind(lu, function(item) {
    return item.classList.contains('ativo');
    });

    filtrarLi();



