// Mostrar no console cade parágrafo do site
    const paragrafo =document.querySelectorAll('p');
    paragrafo.forEach((item)=>{
        console.log(item);
    })

// Mostre no console o testo dos parágrafos no console;
paragrafo.forEach((item)=>{
    console.log(item.innerText);
})

//Como corrigir o erro abaixo


const img1 =  document.querySelectorAll('img');

img1.forEach((item, index) =>{
    console.log(item,index);
})

let x = 0;
img1.forEach(() =>{
    console.log(x++)
})

img1.forEach(() => x++);
console.log(x)
