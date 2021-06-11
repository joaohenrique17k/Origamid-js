/*  
    String

    É a construtora de strings, toda string possui as propriedades e métodos de prototype de String

*/

    const comida = "pizza";
    const agua = new String('agua');

//str.length
    //Propriedade com o total de caracteres da string

    console.log(comida.length) //5
    console.log(comida[comida.length - 1]);//retorna a ultima letra (a)

//str.charAt()
//retorna o caractere de acordo com o index (); 

    console.log(comida.charAt(1))//Retorna i

//str.concat(str2,str3, ...)
    //concatena as strings e retorna o resultado 

    const frase = 'A melhor linguagem é ';
    const linguagem = 'JavaScript';

    const fraseCompleta = frase.concat(linguagem);
    console.log(fraseCompleta);// Retorna a melhor linguagem é JavaScript

//str.includes(search, position)
    //Procure pela string exata dentro de outro string. A procura é case sensitive.

    const fruta = 'Banana';
    const listaFrutas = 'Melancia , Banana, Laranja';

    listaFrutas.includes(fruta)//true
    //frutas.includes(listaFrutas)//false


//str.endsWith(serch) e str.startsWith(search)
 // Procura pela string exata dentro de outra string. End para o final da string e start para o começo
// Retorna valores booleanos
    const esporte = 'futebol';

    const end = esporte.startsWith('fu')
    console.log(end) // Retorna true
    const start = esporte.endsWith('bol')
    console.log(start) // retorna true 

//str.slice(start, end)
  //Corta a string de acordo com os valores de start e end 
  // O primeiro parâmetro é exato o segundo não ele pega uma letra antes. Observe a linha 59.

  const transacao1 = 'Depósito de cliente';
   const transacao2 = 'Depósito de fornecedor';
  const transacao3 = 'Taxa de camisas';

  console.log(transacao1.slice(1,7)); // ele retorna 'epósit' O primeiro parametro é exato e o segundo ele retorna um anterior do que colocamos
  console.log(transacao2.slice(0,7))
  //console.log(transacao3.slice(,))

//str.substring(start,end)
 //Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como slice.

 console.log(linguagem.substring(3,5))// Retorna aS 
 console.log(linguagem.substring(0,5))// Retorna Javas
 console.log(linguagem.substring(4)) // script

 //str.indexOf(Search) e str.lastIndexOf(Search)
    //Retorna o index da string, assim que achar o priemeiro resultado ele já retorna

    const instrumento ='Guitarra';
    console.log(instrumento.indexOf('r')) //Retorna o primeiro 'r' encontrado. 5.
    console.log(instrumento.lastIndexOf('r'));// Retorna o ultimo 'r' que aparece. 6.

//str.padStart(n,str) e str.padEnd(n,str);
 //aumenta o tamnho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela 
 //ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento

 const precos = ['R$ 99','R$ 199','R$ 12000'];

 precos.forEach((item)=>{
     console.log(item.padStart(10, '.'))
     console.log(item.length)
 })

 //str.repeat(n)
    //repete a string quantas vezes for definido dentro do parênteses

    const frase1 = 'eu ';
    console.log(frase1.repeat(4))// Repete 4 vezes a string 'frase1'

//str.replace(regex|substr,news|function)
 // troca parte da string por outra.Podemos utilizar uma regular expression ou um valor
 //direto.Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

 let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
 listaItens = listaItens.replace(/[ ]+/g, ', ');//retorna uma virgula entre cada item

 listaItens = listaItens.replace('Calças', 'ksksksks')// Troca Calças por ksksksk


 let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

//str.splite(padrão)
 //divide a string de acordo com o padrão passado e retorna umma array.

    const arrayLista = listaItens.split(', ');//quebra toda vez que ver virgula

    let cor = ['Amarelo', 'Azul','Verde'];

    console.log(cor.join(','));// retorna uma string com , no final de cada item do array
   
//str.toLowerCase() e str.toUpperCasa();
 //Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

 const sexo1 = 'Feminino';
 const sexo2 = 'Masculino';
 const sexo3 = 'Feminiino';

    (sexo1.toLowerCase() === 'feminino'); // true
    (sexo2.toLowerCase() === 'feminino'); // true
    (sexo3.toLowerCase() === 'feminino'); // true

//str.trim(), str.trimStart(), str.trimEnd()
 //remove espaço em branco do início ou final de uma string

    const money = ' R$ 23.00 ';
    money.trim()//'R$ 23.00'
    money.trimStart()//'R$ 23.00 '
    money.trimEnd()//' R$ 23.00' 