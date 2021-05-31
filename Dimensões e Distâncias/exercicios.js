// Verifique a distância da primeira imagem em relação ao topo da página

    const imgTop = document.querySelector('img');
    const distancia1 = imgTop.offsetTop;
    console.log(distancia1)    

// Retorne a soma da largura de todas as imagens da página 
window.onload = () =>{
    //Window.onload é uma propriedade do window que conseguimos colocar uma função dentro dela que só é ativada qnd acontece o onload na pagina
    const imgTodas = document.querySelectorAll('img');
    let soma = 0;
    imgTodas.forEach((imagem)=>{
        soma += imagem.offsetWidth;
        
    })
    console.log(soma)
   }

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com 
//o dedo (48px/48px de acordo com o google)

   const links = document.querySelectorAll('a');
   console.log(links)
   links.forEach((link)=>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'Possui acessibilidade')
    }else{
        console.log(link,'Não possui boa acessibilidade')
    }
   })

//Se o browser for menow que 720px
//adicione a classe menu-mobile ao menu

   const scroll = window.matchMedia('(max-width: 720px').matches;

   if(scroll){
       const menu = document.querySelector('.menu');
       menu.classList.add('menu-mobile')
   }
