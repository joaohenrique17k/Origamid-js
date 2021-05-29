/* DOM Document Object Model
    
    É uma interface que representa documentos HTML ou XML atráves de objetos.
    Com  ela é possivel manipular a estrutura,estilo e conteúdos deste documento
*/

  //console.log(window);
  //window é o objeto global do browser
  //possui diferentes métodos e propriedades

 // window.innerHeight; //Retorna a altura do browser

/*
    Window e Document 

    São os principais elementos do dom, a boa parte de suas manipulações são através de seus 
    métodos e propriedades 
*/

   // window.alert('isso é um alerta');
    //alert('Isso é um alerta');

  let h1Selecionado =  document.querySelector('primeiro');// Seleciona o primeiro H1
    document.body;// Retorna o body

   //window é o objeto global, por isso n precisamos chamar ele na frente de seus métodos 
   // e propriedades.