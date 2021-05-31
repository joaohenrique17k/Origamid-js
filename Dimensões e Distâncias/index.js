/*
    Height e Width

    estas são propriedades e métodos dos objetos Element e HTMLelement, a maioria delas são Read Only (Somente Leitura)
*/
/*
    const section = document.querySelector('.animais');

    section.clientHeight; // Height + padding
    section.offsetHeight;// Height + padding + border
    section.scrollHeight; //Height total, mesmo dentro do scroll
    const height = animaisLista.scrollHeight;
    console.log(height);// Retorna o tamanho do scroll em "animais-lista"

    a mesma coisa para Widht
*/

/*
    Offsetop e offsetLeft

    offsettop: Distância entre o topo do elemento e o topo da página

    offsetLeft: Distância entre o canto esquerdo do elemento e o canto direito da página

*/
    const animaisLista = document.querySelector('.animais-lista');


   const animaisTop = animaisLista.offsetTop;

    console.log(animaisTop);// Retorna a distância entre a onde está o "animais-list"
  
    const primeiroh2 = document.querySelector('h2');

    console.log(primeiroh2.offsetLeft)// Retorna a distância entre o lado lado esquerdo do elemento até o lado 
    //esquerdo da página

/*
    GetBoundingClientRect

    Método que retorna um objeto com valores de  width, height, distância do elemento e mais.

*/
    const rect = primeiroh2.getBoundingClientRect()
    console.log(rect.top)

/*  
    Window

    O objeto window representa uma janela que contém um elemento Dom.

    Algumas propriedades dele 

        window.innerWidth // Largura da janela 
        window.outerWindth // Soma dev tolls também
        window.innerHeight // Altura da janela
        window.outerHeight // Soma a barra de endereço

        window.pageYOffset // Distância total do scroll horizontal 
        window.pageXOffset // Distância total do scroll vertical

*/

    console.log(window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight, window.pageYOffset)

/*
    matchMedia();

    Utilize um media-querie como no CSS para verificar a largura do browser

    Dentro dele ele tem uma propriedade (matches) é true ou false
*/

    const small = window.matchMedia('(max-width: 600px)')//Dentro do parentes do matchMedia podemos colocar 
    //entre as aspas simples e parentes a especificação da largura do  browser


   small.matches ? console.log(`Tela menor que 600px`): console.log(`Tela maior que 600px`);