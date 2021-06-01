// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
/*
    const linkk = document.querySelector('.aa');
    function bloquear(e){
        e.preventDefault();
    }

    linkk.addEventListener('click', bloquear)
  */

    const linkk = document.querySelectorAll('.aa');
    function bloquear(e){
        e.preventDefault();
       //e.currentTarget.classList.add('ativo')
       linkk.forEach(link => link.classList.remove('ativo'));
       this.classList.add('ativo')
        
       
    }
    linkk.forEach(item =>{
        item.addEventListener('click', bloquear);
    })


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
/*
const todos = document.querySelectorAll('body *')
    function qual(){
        console.log(this)
    }
    todos.forEach(item =>{
        item.addEventListener('click', qual)
    })
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todos = document.querySelectorAll('body *')
    function qual(){
        this.remove(this)
    }
    todos.forEach(item =>{
        item.addEventListener('click', qual)
    })


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

    const pp = document.querySelector('p');
    function aumentar(e){
        if(e.key == 't'){
            document.documentElement.classList.toggle('aumentou')
        }
    }
    window.addEventListener('keydown', aumentar)
