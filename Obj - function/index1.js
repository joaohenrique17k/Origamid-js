/*
    Function 

    Toda função  é criada apartir do constructor function. Por isso herda seus métodos e parâmetro
*/

/*
    PROPRIEDADES

    function.name: Retorna o nome da função.
    function.length: Retorna a quantidade de parâmetros que a função tem.
*/
    function x(n1, n2){
        return n1 + n2;
    }
    console.log(`Soma de n1 + n2 = ${x(1,2)}`) // Retorna a soma de n1 + n2 (3)
    console.log(`Nome da função ${x.name}`) // Retorna o nome da função (x)
    console.log(`Quantidade de parâmetros ${x.length}`) // Retorna a quantidade de parâmetros que a função x tem (2)

/* FUNCTION CALL

    function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma 
    nova referência ao this da mesma
*/

    const pessoa = {
        nome:'João',
        idade:19,
    }

    function joao(){
        console.log(`${this.nome} tem ${this.idade} anos`)
    }


    joao()// undefined  undefined
    joao.call(pessoa);// João tem 19 anos


/*
    This

    O valor de this faz referência ao objeto criado durante a construção do objeto
     (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

*/

    const carros = ['Fiat','Uno','Gol','Celta'];

    carros.forEach(i => console.log(i))  //Log de cada carro
    carros.forEach.call(carros, i => console.log(i)) //Log de cada carro

    const motos = ['Xj6','Bmw','Hornet','Kawasaki Ninja'];

    motos.forEach.call(carros, i => console.log(i)) //Log de cada carro

    carros.forEach.call(motos, i => console.log(i)) // Log de cada moto 
/*
    Exemplo Real

    O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

*/

    function Dom(seletor){
        this.element = document.querySelector(seletor)
        
    }
    Dom.prototype.ativo = function(classe){
        this.element.classList.add(classe)
    }

    const Classli = new Dom('ul')
    Classli.ativo('ativo')
    console.log(Classli)

/*
    O Objeto deve ser parecido

    O novo valor de this deve ser semelhante a estrutura do valor do this original do método. 
    Caso contrário o método não conseguirá interagir de forma correta com o novo this.

*/

    const novoSeletor = {
        element: document.querySelector('li') // adiciona ativo ao primeiro li
    }
    
    Dom.prototype.ativo.call(novoSeletor, 'ativar');

/*
    Array e Call 

    é comum utilizarmos o call() nas funções do protótipo do construtor array. Assim podemos estender todos os métodos de array
    à objetos que se parecem com Array-like

*/

    const series = ['Doctor Who','Dark','you','Loki'];

    Array.prototype.mostrarArray = function(){
        console.log(this)
    }
    Array.prototype.pop.call(series) // ['Doctor Who','Dark','you'] 
    //frutas.pop()// é a msm coisa

/*
    ARRAY-LIKE

    HTMLCollection, NodeList e demais objetos do DOM, são parecidos com um Array. Por isso conseguimos utilizar os mesmos  na substituição do this em call

*/
    const li = document.querySelector('li');

    const filtro = Array.prototype.filter.call(li,(item)=>{
        console.log(item.classList.contains('Ativo'))
    })

/*
    FUNCTION APPLY

    Function.apply(this,[argum,argum2,...]) funciona como o call porém a unica diferença
    é que os argumentos da função são passados por uma array

*/
    const n = [1,2,3,4,5,6,7,8,9];
    console.log(Math.max.apply(null,n)) //Retorna 9
    console.log(Math.max.call(null,1,2,3,4,5,6,7,8,9)) //Retorna 9
   
/*
    Apply vs Call

    A única diferença é a array como segundo argumento.
 */
    const lii = document.querySelectorAll('li');

    function verf(item){
        return item.classList.contains('ativo');
    }
  const verf1 = Array.prototype.filter.call(lii, verf)
  const verf2 = Array.prototype.filter.apply(lii, [verf])

/*
    function.bind
    
    Diferente de call e apply, bind(this, arg1, arg2, ...)não irá executar a função mas sim retornar a mesma com um novo contexto de this.
*/
    const liii = document.querySelectorAll('li');

    const filterlii = Array.prototype.filter.bind(li, function(item){
        return item.classList.contains('ativo');
    })

    console.log(filterlii());



/*
    Argumentos e Bind

    Não precisamos passar todos os argumentos no momento do bind, podemos passar os 
    mesmos na nova função no momento da execução da mesma.
*/

    const carro = {
        marca: 'Ford',
        ano: 2018,
        acelerar: function(aceleracao, tempo) {
          return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
        }
      }

      console.log(carro.acelerar(100,200))


      const honda = {
        marca: 'Honda',
      };
      const acelerarHonda = carro.acelerar.bind(honda);
      console.log(acelerarHonda(200, 10))

/*
      Argumentos Comuns

    Podemos passar argumentos padrões para uma função e retornar uma nova função.
*/
      function imc(altura, peso){
          return peso / (altura * altura);
      }

      const imc180 = imc.bind(null, 1.80)

      console.log(imc180(70)) // 21.6