/*
    Height e Width

    estas são propriedades e métodos dos objetos Element e HTMLelement, a maioria delas são Read Only (Somente Leitura)
*/
/*
    const section = document.querySelector('.animais');

    section.clientHeight; // Height + padding
    section.offsetHeight;// Height + padding + border
    section.scrollHeight; //Height total, mesmo dentro do scroll


    a mesma coisa para Widht
*/
    const animaisLista = document.querySelector('.animais-lista');

    
   const height = animaisLista.scrollHeight;
   console.log(height)

