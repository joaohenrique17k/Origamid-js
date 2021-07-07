/*
    Forms
        É comum utilizarmos inputs de formulários para criar um interface entre funções JavaScript e
        o usuário final do site. Para isso precisamos aprender como pegar valores dos formulários.

        document.forms; // lista com os formulários
        document.forms.contato; // form com nome contato
        document.forms.contato.elements; // elementos
        document.forms[0].elements[0].value; // valor do primeiro

*/
    const contato = document.querySelector('#contato');
    console.log(contato.elements.nome.value)// HTMLcollection com todos os elementos de forms.
    console.log(document.forms[0]); //<form id="contato" name="contato">

/*
    Values 
        A propriedade value retorna o valor do elemento no formulário.
        Se adicionarmos callback ao keyup(tecla levantar), podemos ficar de olho 
        no evento e puxar o valor sempre que ele mudar.
        change dispara quando houver mudanças.

    Value: Acompanha cada tecla apertada.
    change: Só é ativado quando mudamos o campo.
*/
    // texto = document.querySelector('.texto');
    // function handleKeyUp(event){
    //     console.log(event.target.value);
    //     texto.innerText =  event.target.value;
        
    // }
    // contato.addEventListener('keyup', handleKeyUp);

/*
    Validação
        O Método checkValidity verifica se um input com o atributo required, é valido ou não.
         propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modificar com
         setCustomValidity('');


*/
const spanErro = document.querySelector('.erro-email');
texto = document.querySelector('.texto');
    // function handleKeyUp(event){
    //     const target = event.target;
    //     if(!target.checkValidity()){
    //        target.classList.add('invalido');
    //        contato.nome.setCustomValidity('Escreva o nome')
    //        target.setCustomValidity('Opa! verifique mais uma vez esse campo.')
    //        target.nextElementSibling.innerText = target.validationMessage;
    //     }
    //     console.log(event.target.checkValidity())
    //     console.log(event.target.value);
    //     texto.innerText =  event.target.value;
        
    // }
    // contato.addEventListener('change', handleKeyUp);


/*
    Select
*/
    // contato.addEventListener('change',mudarCor);
    // function mudarCor(event){
    //     if(event.target.checked){
    //         console.log(event.target.value)
    //     }
    //     document.body.style.backgroundColor = event.target.value;
    // }

/*
    Diferentes Inputs

        <input type="color">      
        <input type="range">
        <input type="number">      
        <input type="date">      
        <input type="password">      
*/
/*
    Checkbox
        Retorna o valor de value, se tiver checado ou não. checked 
        retorna true ou false.
*/

/*
    Pegando todos os valores
        Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário coloca
        no formulario
*/

const form = document.getElementById('contato');
console.log(form)
const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados)
  
  
//   = event.target.value;
}
form.addEventListener('change', handleChange);
