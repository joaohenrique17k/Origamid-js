// Crie uma função que verifique
// corretamente o tipo de dado
    function Verificar(dado){
        return console.log(Object.prototype.toString.call(dado))
    }
    Verificar([]) //Objetc Array

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

    const lados = {};
    Object.defineProperties(lados, {
        l: {
            value:4,
            enumerable:true,
        }
    })

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }

  Object.freeze(configuracao)
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
  
  Object.getOwnPropertyNames(String.prototype)

  