// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const btn = document.querySelector('[data-cor]');
const cop = document.querySelector('body')
btn.addEventListener('click', callback)
function callback(){
    setTimeout(()=>{
        document.body.classList.add('body');
    },300)
}

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const init = document.querySelector('[data-init]');
const pause = document.querySelector('[data-pause]');
const reset = document.querySelector('[data-reset]');
const camp = document.querySelector('.cronometro');
const inputt = document.querySelector('input')

let nu = inputt.value;


init.addEventListener('click',()=>{
    const cont = setInterval(()=> nu == -1 ? clearInterval(cont) : camp.innerHTML = nu-- ,1000) 
    pause.addEventListener('click',()=> clearInterval(cont));
    reset.addEventListener('click',()=>{
        
        inputt.value = 0;
        camp.innerText = 0;
        clearInterval(cont)
        

    })
    
}
    
);


const camp2 = document.querySelector('.cronometro2');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const restaurar = document.querySelector('.resetar');

let i = 0;
let timer;

iniciar.addEventListener('click', iniciarTimer)
pausar.addEventListener('click',pausarTimer)
restaurar.addEventListener('click',resetarTimer)

function iniciarTimer(){
    timer = setInterval(() => {
        camp2.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '')
}
function pausarTimer(){
    clearInterval(timer)
    iniciar.removeAttribute('disabled', '')
}
function resetarTimer(){
    clearInterval(timer)
    camp2.innerText = 0;
    i = 0;
    iniciar.removeAttribute('disabled', '')
}


