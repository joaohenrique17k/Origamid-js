// Retorne no console todas as imagens do site 
const imagem = document.querySelectorAll('img');
console.log(imagem)


//Retorne no console apenas as imagens que começaram com a palavra
const imagens = document.querySelectorAll('img[src^="img/imagem')
console.log(imagens)

//selecione todos os links internos (onde o href começa com #)
const imagemm = document.querySelectorAll('[href^="#"]');
   console.log(imagemm)
// Selecione o primeiro h2 dentro de .animais-descrição
const hdois = document.querySelector('.animais-descricao h2');
console.log(hdois)

// Selecione o último p do site

const ultimoP = document.querySelectorAll('p');

console.log(ultimoP[ultimoP.length - 1]);