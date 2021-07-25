/*
    Destructuring

        Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.
*/
    const carro = {
        marca:'Fiat',
        ano:20218,
        portas:4,
    }

    const {marca, ano} = carro
    console.log(marca) // Fiat
    console.log(ano) // ano

/*  
    Destructuring Objects

    A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos.

*/
    const cliente = {
        nome: 'Andre',
        compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
        }
    }
    console.log(cliente.compras.digitais.livros); // Retorna Array [ "Livro 1", "Livro 2" ]
    console.log(cliente.compras.digitais.videos); // retorna Array [ "Video JS", "Video HTML" ]

    //Com Destructuring podemos retirar essas informações de uma forma mais simples.

    const {livros, videos} = cliente.compras.digitais;

    console.log(livros) // Retorna Array [ "Livro 1", "Livro 2" ]
    console.log(videos) // retorna Array [ "Video JS", "Video HTML" ]

/*
    Nesting

    É possível aninhar uma desestruturação dentro de outra.                     
*/
    const clientee = {
        nome: 'Andre',
        compras: {
        digitais: {
            livros1: ['Livro 1', 'Livro 2'],
            videos1: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
        }
    }
    const {fiscais, digitais, digitais: {livros1, videos1}} = clientee.compras;
    // (digitais:) indica que livros1 e videos1 não estão no mesmo nível que fiscais e digitas.

/*
    Nome das Variáveis

        É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

*/
   const cores = {
       cor1:'amarelo',
       cor2:'azul',
   }

   const  {cor1: primeiraCor, cor2: segundaCor} = cores;

   console.log( `${primeiraCor}  e  ${segundaCor} `) // Retornou amarelo e azul

/*
   Valor Inicial

    Caso a propriedade não exista o valor padrão dela será undefined. É possível modificar este valor no momento da desestruturação.
*/
    const user = {
        name: 'João',
        years: 10,
    }
    
  const {name, years, email = 'email@gmail.com', cpf} = user;
  console.log(email) // email@gmail.com
  console.log(cpf) // undefined

/*
    Destructuring Arrays

        Para desestruturar array's você deve colocar as variáveis entre [] colchetes.
*/
    const frutas = ['Banana', 'Uva', 'Morango'];

    const primeiraFruta = frutas[0] // Banana
    const segundaFruta = frutas[1];// Uva
    const terceiraFruta = frutas[2]// Morango

    const [primeira, segunda, terceiro] = frutas;

    console.log(`${primeira}, ${segunda} e ${terceiro}`) // Banana, Uva e Morango


/*
    Declaração de Variáveis

        A desestruturação pode servir para declararmos uma sequência de variáveis.
*/
const [primeiro1, segundo1, terceiro1] = ['Item 1', 'Item 2', 'Item 3']; //criação de multiplas variáveis 

/*
    Argumento Desestruturado

        Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

*/
    
function handleKeybord({key}){
    console.log(key)
}

document.addEventListener('keyup', handleKeybord)
  