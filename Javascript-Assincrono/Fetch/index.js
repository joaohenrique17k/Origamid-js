/*
    Fetch Api
            Permite fazermos requisições HTTPS através do método fetch(). Este método
        retorna a resolução de uma Promise. Podemos então utlizar o then para interagir 
        com a resposta, que é um objeto do tipo response.
        (Interface de aplicação que podemos interagir através de códigos.)
*/
   const doc =  fetch('./doc.txt');
   doc.then((response)=>{
    console.log(response)// Para pegar o conteúdo podemos olhar no console o prótotipo. Ele retorna todos os métodos que podemos usar ex:json, text, type e etc.
    return response.text();
   })
/* 
   Response
        O objeto Response, possui um corpo com o conteúdo da resposta.  Esse corpo pode ser 
        trasnformado utilizando métodos do protótipo do objeto Response. Estas rotrnam outras Promises.
*/
   .then(body =>{
       const conteudo = document.querySelector('.cont');
       console.log(body) // Retorna o texto do arquivo
       conteudo.innerText =body // Retorna o conteúdo da Promise no html
   })
/*
   Json()
        Um tipo de formato de dados muito utilizado com JavaScript é o JSON(JavaScript Object Notation), pelo
        fato dele possuir basicamnete a mesma sintaze que a de um objeto js. Json() transforma um corpo em 
        um objeto JavaScript.
*/

   
   const cep =  fetch('https://viacep.com.br/ws/11707160/json/');

   cep.then(r => r.text()).then(body =>{
        const conteudo = document.querySelector('.cont2');
        conteudo.innerText = body
   })
/*
   .text()
      Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
*/
   const estilos = fetch('./style.css');
   estilos.then(r => r.text()).then(corpo =>{
      const css = document.querySelector('.cont3');
      css.innerHTML = corpo;
   })
/*
   HTML e .text()
      Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto
      e inserir em uma div com  o innerHTML. A partir dai podemos manipular esses dados como um 
      DOM qualquer.
*/

/*
   .blob()
      Um blob é um tipo de objeto utilizado para representar dados de um arquivo. O Blob pode ser utilizado 
      para transformarmos requisições de imagens por exemplo. O blob gera um URL único.

*/

   const imagem = fetch('./img.png');

   imagem.then(r => r.blob()).then(cod => { 
      const blobUrl =  URL.createObjectURL(cod) //Cria uma url para a imagem
      console.log(cod)// Retorna códigos que o js não consegue acessar.
      console.log(blobUrl)
      const imagemDom = document.querySelector('img')
      imagemDom.src = blobUrl
   })
/*
   .clone()
      Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone 
      caso você necessite transformar a resposta em diferentes valores.
   
      (clone() é usado para clonar o corpo da resposta e com isso pode resultar em dois resultados. Sem o método clone
      é impossível um promise retornar duas resposta diferentes como: json e text)
*/

   const cloneCep =  fetch('https://viacep.com.br/ws/11707160/json/');

   cloneCep.then( r => {
      const r2 = r.clone();
      r.text().then(rr =>{
         console.log(rr)
      })
      r2.json().then(rr2 => {
         console.log(rr2)
      })
   })
/*
   headers
      É a propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável
      então podemos utilizar o forEach para vermos cada um deles
*/
 
 const headerss =  fetch('https://viacep.com.br/ws/11707170/json/').then(r => r.headers.forEach(console.log))

