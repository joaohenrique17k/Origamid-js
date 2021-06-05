/*  
    PROTOTYPE

    A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
    (Quando você cria a função ele já é adicionado é um propriedade das funcões)
*/

    function  Pessoa(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    Pessoa.prototype.andar = function(){
        return this.nome + '  andou';
    }
    Pessoa.prototype.nadar = function(){
       return this.nome + ' nadou';
   } 
   
     
    const joao = new Pessoa('João', 19);
    //console.log(Pessoa.prototype); // Retorna o objeto
    //console.log(joao.prototype) //  undefined porque joão é um objeto e não uma função
    //prototype é apenas para funções

/*
     funcão.prototype

     é possivel adicionar novas propriedades e métodos ao objeto
     prototype
*/

    console.log(Pessoa.prototype); // Retorna o objeto
    
/*
     Acesso ao Protótipo

     O objeto criado utilizado o construtor, possui acesso aos métodos
     e propriedades do protótipo desse contrutor.Lembrando,prototypo é uma 
     propriedade e função apenas.

*/
   // então o objeto joão possui acesso a todas as propriedades da constuctor function

   //const joao = new Pessoa('João', 19);
   joao.nome;
   joao.idade;
   joao.andar()
   joao.nadar()


/*
   Proto

   O novo objeto acessa os métodos e propriedades do protótipo através de propriedade
   _proto_ É papel da engine fazer essa busca, não devemos falar com _proto_ diretamente.

   //acessam o mesmo método mas o proto não terá acesso ao this.nome

   joao.andar();// Retorna joão andou.
   joao.__proto__.andar()// Retorna Undefined andou.

*/

/*
   Herança de protótipo

   O objeto possui acesso aos métodos e propriedades do protótipo
   do construtor responsavel por criar este objeto. O objeto abaixo
   possui acesso a métodos que nunca definimos, mas são herdados do 
   protótipo de Object.
*/
   Object.prototype;
   joao.toString();
   joao.isPrototypeOf();
   joao.valueOf();

/*
   Construtores Nativos 
   (constutores são funções)

   Objetos,Funções,Números,Strings e outros tipos  de dados são criados utilizando construtores.Esses construtores
   possuem um protótipo com propriedades e métodos, que poderam ser acessadas pelo tipo de dado
*/

   const pais = 'Brasil';
   const cidade = new String('rio');

   pais.charAt(0)//B
   cidade.charAt(0)//r

   //string.prototype já podemos ver diretos os metodos que temos acesso

/*
   É possivel acessar a função do protótipo

   É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array
   ex:
*/

   //const exemplo = document.querySelector('li');
   //Trasforma em um array
  // const listaArray = Array.prototype.slice.call(listaArray);

   //Devemos usar Array.from()

/*
   Método do Objeto vs Protótipo

   Nós objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
   dado.constructor.name, retorna o nome do construtor;
   */

  //const listaArray = Array.prototype.slice.call(listaArray);//Método Protótipo
  //Array.from(lista)//Método do Objeto

 const  lista = document.querySelectorAll('li');

 const listaArray1 = Array.prototype.slice.call(lista);
 const listaArray2 = Array.from(lista);


 // Retorna uma lista com os métodos / propriedades
    Object.getOwnPropertyNames(Array);
    Object.getOwnPropertyNames(Array.prototype);

/*
   Apenas os Métodos do Protótipo são Herdados

*/
        //[1,2,3].slice(); // existe
        //[1,2,3].from(); // não existe

/*
   Entenda o que está sendo retornado

   Os métodos e propriedades acessados com o . são referentes ao tipo de dados que é retornado antes desse . 
*/

   const teclado = {
        marca: 'Red Dragon (Kumara)',
        preo: 250,
        ligarLuz(){
            return true;
        },
   }

   teclado// Object
   teclado.marca// String
   teclado.preco // Number
   teclado.ligarLuz // Function
   teclado.ligarLuz() //Boolean
   teclado.marca.charAt //function
   teclado.marca.charAt(0)//String


   teclado.ligarLuz.constructor.name// Rertona function