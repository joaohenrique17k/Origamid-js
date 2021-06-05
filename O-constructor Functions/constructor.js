// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }

  function Pessoa(nome, idade){
      this.nome = nome;
      this.idade = idade;
      this.andar = function (){
          console.log(`${this.nome} andou`)
      }
  }
  const joao1 = new Pessoa('João', 19);
  joao1.andar();
  const maria1 = new Pessoa('Maria',19);
  maria1.andar();

  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

  function Pessoas(nome, idade){
      this.nome = nome;
      this.idade = idade;
      this.quemE = function(){
        console.log(`${this.nome} - ${this.idade} Anos`);
      }
  }
  const joao = new Pessoas('João', 20)
  joao.quemE()
  const maria = new Pessoas('Maria', 25)
  maria.quemE()
  const bruno = new Pessoas('Bruno',15)
  bruno.quemE()
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  

  //Minha resolução 
  function Dom(element,classe){
       this.element = document.querySelectorAll(element);
       
       this.addClass = function(){
         this.element.forEach(item =>{
             item.classList.add(classe);
         })
       }
       this.removeClass = function(){
        this.element.forEach(item =>{
            item.classList.add(classe);
        })
      }

  }
  const a = new Dom('li','euu')

  //Resolução do professor

  function Dom(seletor){
    const element = document.querySelectorAll(seletor);
    
    this.addClass = function(classe){
      element.forEach(item =>{
          item.classList.add(classe);
      })
    }
    this.removeClass = function(classe){
      element.forEach(item =>{
         item.classList.remove(classe);
     })
   }

}
const b = new Dom('li')
b.addClass('euuuu')