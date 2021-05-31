const imgs = document.querySelectorAll('img');
let i = 0;
imgs.forEach((item, index, array)=>{
    console.log(item) // Retorna o item
    console.log(index)// Retorna o index de cada item
    console.log(array)// Retorna o item todo
})