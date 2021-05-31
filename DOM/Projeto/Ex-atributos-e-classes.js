// Adicione a classe ativo a todos os itens do menu 

    const itensMenu = document.querySelectorAll('.menu ul li a');
    console.log(itensMenu);

    itensMenu.forEach((item)=> item.classList.add('ativo'))

//Remove a classe ativo de todas os itens do menu e mantenha apenas o primeiro
    itensMenu.forEach((item,index)=> index > 0 ? item.classList.remove('ativo'):item.classList.add('ativo'))

//Verifique se as imagens possuiem o atributo alt
    const imagensEx = document.querySelectorAll('img');
    imagensEx.forEach((x)=> console.log(x.hasAttributes('alt')))

//modifique o href do link externo no menu 
    const externo = document.querySelector('a[href^="http"]');
    externo.setAttribute('href', 'https://www.youtube.com/');
