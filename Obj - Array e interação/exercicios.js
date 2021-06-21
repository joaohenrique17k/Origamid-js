// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

  const newArray = document.querySelectorAll('.curso');
  const curso = Array.from(newArray)
  
  const objetoCurso = curso.map((curso)=>{
    let titulo = curso.querySelector('h1').innerText;
    let desq = curso.querySelector('p').innerText;
    let aulas = curso.querySelector('.aulas').innerText;
    let horas = curso.querySelector('.horas').innerText;
    return {
      Titulo:titulo,
      Descrição:desq,
      Aulas:aulas,
      Horas:horas,
    }
  })
  console.log(objetoCurso)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maior100 = numeros.filter(i => i > 100);
console.log(maior100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const pesqInstrumentos = instrumentos.some(item => item === 'Baixo');
console.log(pesqInstrumentos); //True


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
  const valorTotal = compras.reduce((acc,item) =>{
    return acc + +item.preco.replace('R$','').replace(',','.');
  },0)
  console.log(valorTotal);
