/*
    Array

    Armazenam uma coleção de elementos. Estes podem ser String, Number, function, object, etc.


*/

/*      
    Array.from() é um método de array que transforma arrays-like(nodaList,HtmlCollection,etc) em um array.
    
    Exemplo:
*/  

    let li = document.querySelectorAll('.l');// NodeList
    //li = array.from(li)// Array

/*
    Array.isArray()

    verifica se o valor passado é uma array e retorna um valor booleano.

    
*/
    let lii = document.querySelectorAll('.l');// NodeList
    Array.isArray(lii) // false

    lii = Array.from(lii);
    Array.isArray(lii)// True

/*
    Propriedades e Métodos do Prototype

    [].length retorna o tamnho do array

 */

    let frutas = ['banana','maça',['melancia','uva']];
    console.log(frutas.length);


/*
    Métodos modificadores [].sort()
    
    Os próximos metodos que vamos falar sobre, são métodos modificadores(mutador methods). Além de retornar 
    um valor, eles modificam o array original. [].sort() organizados pelo unicode
 */
    const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
    instrumentos.sort();
    instrumentos; // ['Baixo', 'Guitarra', Violão]
    
    const idades = [32,21,33,43,1,12,8];
    idades.sort();
    idades; // [1, 12, 21, 32, 33, 43, 8]
/*
    [].unshift() adiciona elementos ao inicio da array e retorna o length da mesma. [].push() 
    adiciona o elemento ao final da array e retorna o length da mesma

*/

    let motos =['mobilete','150','xj']
    console.log(motos)
    motos.push('bike');
    console.log(motos)// ['mobilete','150','xj','bike'];
    motos.unshift('bmw');
    console.log(motos)//['bmw','mobilete','150','xj']


/*
    [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove
    o último elemento do array e retorna o mesmo.
 */

    motos.pop() // Remove o último elemento do array.
    console.log(motos)// ['bmw','mobilete','150','xj'];

    motos.shift()// Remove o primeiro elemento do array.
    console.log(motos)// ['mobilete','150','xj']

/*
    [].reverse() inverte os itens do array e retorna uma nova array

*/
    let abc = ['a','b','c','d'];
    abc.reverse()
    console.log(abc)// ['d','c','b','a'];

/*
    [].splice(index, remover, item1, item2, ...) adiciona valores na array 
    a partir do index. Removendo a quantidade de itens que for passada
    no segundo parâmetro(retorna esses itens)

*/
    const veiculos = ['Ford','Fiat','vw','Honda'];
    veiculos.splice(1,0, 'kia','mustang');
    console.log(veiculos)

    veiculos.splice(3,2,'ferri');
    console.log(veiculos)

/*
[].copyWithin()

[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar
 a array começando do inicio até o final e vai preencher a mesma com 
 essa cópia. Caso omita os valores de início e final, ele irá utilizar como 
 inicio o 0 e final o valor total da array.


*/
console.log(['Item1', 'Item2', 'Item3', 'Item4','Item5'].copyWithin(2, 0, 2));
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

/*
    [].fill(valor, início, final) preenche a array com o valor, do início até o fim 

*/

console.log(['arroz','feijão','batata','salada','suco'].fill('banana'))
//[ "banana", "banana", "banana", "banana", "banana" ]

console.log(['arroz','feijão','batata','salada','suco'].fill('banana',1))
//[ "arroz", "banana", "banana", "banana", "banana" ]

console.log(['arroz','feijão','batata','salada','suco'].fill('banana',0,2))
//[ "banana", "banana", "batata", "salada", "suco" ]

/*
    Métodos de Acesso [].concat()

    Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.


*/
    const p = ['p1','p2'];
    const pp = ['pp1','pp2'];
    const concatenar = p.concat(pp)
    console.log(concatenar)// [ "p1", "p2", "pp1", "pp2" ]

    const concatenar1 = [].concat(p,pp,'pps');
    console.log(concatenar1)// [ "p1", "p2", "pp1", "pp2", "pps" ]

/*
    [].includes(),[].indexOf() e [].lastindex()

    [].includes(valor) verifica se a array possui o valor e retorna false ou true.
    [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
    [].lasindexOf(valor) retorna o último valor.
*/
    const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

    linguagens.includes('css'); // true
    linguagens.includes('ruby'); // false
    linguagens.indexOf('python'); // 4
    linguagens.indexOf('js'); // 2
    linguagens.lastIndexOf('js'); // 5
/*
    [].join() junta todos os valores da array e retorna uma string com eles.
    Se você passau um valor como parâmetro,este será utilizado durante a junção de cada item da array.
    (entre cada item do array)
*/
   // console.log(linguagens.join())// string html,css,js,php,python,js
    //console.log(linguagens.join(' '))// string html css js php python js
   // console.log(linguagens.join('-.-'))// string html-.-css-.-js-.-php-.-python-.-js

   let htmlString = '<h2>Título Principal</h2>'
    htmlString = htmlString.split('h2');
    // ['<', '>Título Principal</', '>']
    htmlString = htmlString.join('h1');
    // <h1>Título Principal</h1>

/*  
    [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor final.

*/
    console.log(linguagens.slice(3))// [ "php", "python", "js" ]
    console.log(linguagens.slice(1,4))//['css', 'js', 'php']