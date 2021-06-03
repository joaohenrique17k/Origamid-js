// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');


const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu)



// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');



// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const animais1 = document.querySelector('.animais');
faq.innerHTML = animais1.innerHTML;