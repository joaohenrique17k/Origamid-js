/*
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
//contato.replaceChild(lista, titulo); // substitui titulo por lista
*/


/*
    Novos Elementos

const novoh1 = document.createElement('h1');
novoh1.innerText = 'novo titulo';
novoh1.classList.add('titulo');
mapa.appendChild(novoh1)
console.log(novoh1);
*/

/*
    Clonar Elementos

    Todo Elemento selecionado é unico para criarmos um novo elemento baseado no anterior é necessario 
    utilizar o metodo cloneNode();
    .cloneNode(true)// Com o true ele seleciona os filhos do elemento também 
    se deixar false ou () ele vai trazer apenas a tag que envolve.

    const h1 = document.querySelector('h1');
    const h2 = h1.cloneNode(true);
    const faq = document.querySelector('.faq');
    faq.appendChild(h2)
*/




