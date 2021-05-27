/*
            Objetos
        Conjunto de variáveis e funções que são chamadas de propriedades
        e metodos
*/
var pessoa = {
    name:'João',
    idade:18,
    altura:1.75,

}
/*
     Métodos

     É uma propriedade que possui uma função no seu lugar de valor.
     (Função no lugar de valore de um objeto)
    Exemplo var pessoas = {
         casa: function(){

         }
     }
*/
 var quadrado ={
     lados:4,
     area:function(lado){
         return lado * lado;
     },
     perimetro:function(lado){
         console.log(this.lados) //Anotação dessa parte na minha 36
         return this.lados * lado;
     }
 }
 console.log(quadrado.area(5))//Retorna 25
 console.log(quadrado.perimetro(5))//retorna 20

 /*
    Na linha 30 da função "perimetro" foi preciso fazer o valor do lado mais ele mesmo 4 vezes(repetindo o lado 4x)
    porém existe uma maneira mais simples, usando a variável "lados" do começo do objeto.
    Mas como pegar essa variável se ela se encontra fora do escopo de bloco da função "perimetro" ?
    Muito simples, podemos usar o 'this' que no caso seria (isso tudo) em outras palavras todo o objeto. Se o this 
    é o objeto podemos acessar todos os valores só basta colocar this e ponto (this.) e o nome :)

 */

    //Abreviação de métodos (Funções)
/*
    Para criar um método dentro de um objeto é da seguinte mandeira 

    var = a {
        b:function(parametro aqui){executa comandos aqui}//Método normal
    },
    c(parametro aqui){executa comando}// Método com Abreviação
*/
    
    var quadrado1 ={
        lados1:4,
        areaa(lado1){
            return lado1 * lado1;
        },
        perimetroo(lado1){
            console.log(this.lados1) 
            return this.lados1 * lado1;
        }
    }
    console.log(quadrado1.areaa(5));
    console.log(quadrado1.perimetroo(5))

/*
    Organizar o código
    Objetos servem para organizar o código em pequenas partes reutilizáveis.
*/
    Math.PI//Retorna o valor de PI
    Math.random()//retorna um número aleatório(entre 0 e 1)
    //Objeto nativo do js com propriedade(.pi) e método

/*
    Criar Objeto
    Um objeto é criado utilizando chaves {}
*/
    var x = {}
    console.log(typeof x)//Retorna "Object"
/*
    "DOT NOTATION GET(Acessor de propriedades)"

    Acesse as propriedades de um objeto usando "." (Exemplo menu.color)
    Podemos também incluir esse acesso de propriedades a uma variável e ela ganhará o valor da propriedade.
    Exemplo let bg = menu.color (Bg recebe o valor de color que vem de dentro do objeto)

*/
let menu = {
    width:100,
    height:100,
    color:'black',
}   
let bg = menu.color;
console.log(bg)//Retorna black
menu.color = 'red';// o "=" depois da propriedade demostra um ato e setação o q acontece é q podemos reescrever o valor.
let bgg = menu.color;
console.log(bgg)//Retorna Red 

/*
    Adicionar Propriedades e Métodos

    Basta adicionar um novo nome e o valor exemplo a baixo
*/
    let menuu = {
        width:300,
    }

    menuu.height = 300;
    menuu.color = 'gree';
    //Depois disso já é adicionado ao objeto "menuu" mais duas propriedades.
    //Caso já exista podemos substituir.

/*
    Palavra-Chave this
    This faz referência ao próprio objeto(ele pode acessar todos os objetos).
*/


/*
        Prótotipo e Herança 

        Um objeto criado herda, propriedades e métodos de outro objeto que foi utilizado para criar o mesmo.
        um desses métodos é o "hasOwnProperty()" que verifica se existe uma uma determinada propriedade em um objeto.

*/


/*
    Tudo é Objeto
    Strings,Números,Bollean, Objetos e mais, possuem propriedades e métodos. por isso são objetos
*/
    //String 
    var nome = 'João';
    nome.length;//retorna a quantidade de caracteres de uma string (4)
    nome.charAt(1)//retorna "o" da string 'João'
    nome.replace('o','u')// Replace troca palavras de um string antes da virgula é quando selecionamos a parte da string
    //que vai ser trocada no caso "o" e dps dela o que vai subistituir no caso "u"// nome = Joãu


    //Números
    var altura = 1.8;
    console.log(altura.toFixed());//A redonda o número para cima(2)
    console.log(altura.toString())//Transforma em string

    //Funções
    //Também possuem métodos e propriedades
    function AreaQuadrado(lado2){
        return lado2 * lado2;
    }
    AreaQuadrado.toString()//Transfroma a função em string
    AreaQuadrado.length;//Resulta em 1 

    let btn = document.querySelector('.btn');
    btn.addEventListener('click',()=>{
        console.log(`dddddddd`)
    })

    


    
