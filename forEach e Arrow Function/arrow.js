/*
    Arrow Function

    Sintaxe curta em relação a function Expression.Basta remover a palavra chave function
    e adicionar a fat arrow => após os argumentos.
*/

    const img = document.querySelectorAll('exemplo');

    img.forEach((item)=>{
        console.log(item);
    })

//Argumentos unicos não precisam de parêntes
 img.forEach(item => console.log(item));


//multiplos argumentos precisam ter parêntes
img.forEach((item,index) => {
    console.log(item);
})

//Sem argumentos precisa dos parêntes, mesmo vazio
let a = 0;
img.forEach(() => {
    console.log(a++);
})
