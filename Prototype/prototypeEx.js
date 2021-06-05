// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
  function Alguem(nome, sobrenome, idade){
    this.nome = nome;  
    this.sobrenome = sobrenome;  
    this.idade = idade;  
    
  }
  const eu = new Alguem('João', 'Henrique', 19);
// Crie um método no protótipo que retorne
// o nome completo da pessoa
 Alguem.prototype.nameFull = function(){
     return `${this.nome} ${this.sobrenome}`
 }

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
 NodeList.prototype;
 HTMLAllCollection.prototype;
 Document.prototype;

// Object.getOwnPropertyNames(NodeList)//Lista todos os métodos em forma de array

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // "HTMLLIElement"
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click();// Underfined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
