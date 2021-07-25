// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    return buttonElement;
  } 
  
  const redButton = createButton();
  
  // Utilize o método push para inserir as frutas ao final de comidas.
  const frutas22 = ['Banana', 'Uva', 'Morango'];
  const comidas22 = ['Pizza', 'Batata'];

 comidas22.push(...frutas22);
  console.log(comidas22)
  