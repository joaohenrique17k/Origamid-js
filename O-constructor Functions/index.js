/*
    Objetos

    Constructor Functions
    
    Criar um objeto é bem simples, basta definirmos uma variávele iniciar a definição 
    do seu valor com chaves {}. Mas e se precisarmois criar um novo objeto e utilizar os valores
    da variável anterior? Isso é possivel com (object.create), mas veremos ele mais tarde 
*/

const carro ={
    marca:'Monza',
    preco:0,
}
console.log(carro)

const novo = carro;
novo.marca = 'Honda';
novo.preco = 13;

console.log(novo)

const novoCarro = carro;
novoCarro.marca = 'Fiat';
novoCarro.preco = 20;

console.log(novoCarro);


//O que aconteceu aqui é que apenas reescrevemos o valores por isso que carro, novo e novoCarro apontam para o mesmo objeto

/*  
    Contructor function

    para isso existem as Contructor Functions, ou seja, funções Construtoras que são responsáveis por construir novos 
    objetos sempre que chamamos a mesma.

*/

    function Caarro(){
        this.marca = 'Marca';
        this.preco = 3;
    }
    console.log(Caarro())
    const newCarro = new Caarro();
    newCarro.marca = 'Fiat';
    newCarro.preco = 0;

    const segundo = new Caarro();
    segundo.marca = 'Uno';
    segundo.preco = 2;

/*
    NEW KEYWORD

    A palavra chave NEW é responsavel por criar um novo objeto baseado na função que passamos a frente dela 

    exemplo:
*/

    const x = new Caarro();

    // 1 Cria um novo objeto
    // x = {};

    // 2 define o protótipo
    // x.prototype = Caarro.prototype;

    // 3 Aponta a variável this para o objeto
    // this = x;

    // 4 Executa a função, substituindo this pelo objeto(No caso x vira o this);
    // x.marca = 'Ferrari';
    // x.preco = 4;

    // 5 Retorna um novo Objeto

    // return x = {
   //     marca: 'Ferrari',
    //    preco: 4,
  //  }



/*
    Parâmetros e Argumentos

    podemos passar argumentos que serão utilizados no momento da criação do objeto, e com isso diminuir a quantidade 
    de linhas.
*/  

    function Teste(n1,n2){
        this.n1 = n1;
        this.n2 = n2;
    }
    const teste2 = new Teste(10,20);
    const teste3 = new Teste(30,40);

/*
    THIS KEYWORD (Palavra-chave this)

    O this faz referência a próprio objeto construído com a Constructor Function
*/

    function  Thiss(marca, preco){
        const taxa = 1.2;
        const precofinal = preco * taxa;
        this.marca = marca;
        this.preco = precofinal;
        console.log(this)
    }

    const EnviaThis = new Thiss('Honda', 20);
    

    //Variáveis dentro da Constructor estão "protegidas"

/*
    Exemplo Real 

    Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo
    seletor em seus métodos

    (OBJETO PURO)


    const Dom = {
        seletor: 'li',
        element(){
            return document.querySelector(this.seletor);
        },
        ativo(){
            this.element().classList.add('ativo')
        }
    }
    Dom.ativo();
    Dom.seletor = 'ul';
    Dom.ativo();
*/

/*
    Exemplo real com Constructor Function
*/
    function Domm(seletor){
        this.element =function (){
            return document.querySelector(seletor);
        }
        this.ativo  = function(classe){
        this.element().classList.add(classe)
    }
}
    const li = new Domm('li');
    const ul = new Domm('ul');

    const lastLi = new Domm('li:last-Child');
    lastLi.ativo('arroz')
    
    
    