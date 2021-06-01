/*
    Eventos

    addEventListener

    adiciona uma função ao elemento, esta chamada de callback,
    que será ativada assim que certo evento ocorrer neste elemento

*/

    const evento = document.querySelector('button');
    console.log(evento);

    evento.addEventListener('click', ()=>{
        console.log('clicou');
    })

/*
    Callback

    É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar
    diretamente uma função anônima

    (Você deve criar uma função antes e no evento apenas referenciar ela como callback )
*/

    /*const btn2 = document.querySelector('.Callback');
    console.log(btn2)

    function callback1(){
        console.log('clicou');
    }
     btn2.addEventListener('click', callback1);
    */

/*
    Event 

    O primeiro parâmetro do callback é o referente ao evento que ocorreu.
    Geralmente utilizamos o e como nome do parâmetro
*/
    
    const btn2 = document.querySelector('.Callback');
    console.log(btn2)

    function callback1(event){
        console.log(event);//retorna um objetos com outras propriedades do event
    }
    btn2.addEventListener('click', callback1);

/*
    Propriedades do Event
*/
    const event1 = document.querySelector('.event1');
    function eventUm(e){
        console.log(e.currentTarget)//This
        console.log(e.target)// onde o click ocorreu
        console.log(e.type) //tipo de evento
        console.log(e.path)
    }
    event1.addEventListener('click', eventUm);

/*
    event.preventDefault();

    Previne o comportamentro padrão do evento no browser. No caso
    de um link externo, por exemplo, irá previnir que o link seja ativo
*/

   const linkDefora = document.querySelector('.linkF');
   
    function blockLink(e){
        e.preventDefault()//bloqueia o evento que levaria a gente para o endereço do link
    }

   linkDefora.addEventListener('click', blockLink);

/*
    This

    A palavra chave THIS é muito especial no JavaScript, que pode 
    fazer referência a diferentes objetos dependendo do contexto.No caso de eventos, ela fará referência ao
    elemento em que addEventListener foi adicionado

    Uma referência parecida com o event.currentTarget 


*/
    const imagem = document.querySelector('.img');

    function imgcall(e){
        console.log(this);
        console.log(this.setAttribute('src', 'https://i.pinimg.com/originals/b0/23/b7/b023b73906d8edfc33fc3890b78b8711.jpg'));
    }
    imagem.addEventListener('click',imgcall);

/*
    Diferentes Eventos 

    Existem diversos eventos como click, scroll, resize, keydown, keyup
    mouseenter e mais. Eventos podem ser adicionados a diferente elementos, como o window e document


*/

    const h1 = document.querySelector('h1');

    function callback2(e){
        console.log(e.type, e);
    }

    h1.addEventListener('click', callback2);
    h1.addEventListener('mouseenter', callback2);

    window.addEventListener('scroll', callback2);
    window.addEventListener('resize',callback2);
    window.addEventListener('keydown', callback2);

/*
    Keybord

    Você pode adicionar atalhos para facilitar a navegação no seu site,
    através de eventos kayboard
*/
    function callback4(e){
        if(e.key == 'a'){
            document.body.style.background = "black";
        }else if(e.key == 'f'){
            document.body.style.background = "Red";
        }
    }

    window.addEventListener('keydown', callback4);


/*
    forEach e Eventos 

    O método addEventListener é adicionado à um único elemento, então é necessário
    um loop entre elementos de uma lista, para adicionar a todos eles o mesmo evento
*/

    const testeImg = document.querySelectorAll('img');
    console.log(testeImg)

     function imgAlert(){
         console.log('clicouuu')
     }

    testeImg.forEach((img)=>{
        img.addEventListener('click', imgAlert)
    })