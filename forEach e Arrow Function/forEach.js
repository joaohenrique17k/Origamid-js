/*
    FOREACH

     é a melhor forma para manipular uma lista de elementos do dom. Com ela podemos
    interagir com todos os objetos da Nodelist(Nodelist é um ARRAY-LIKE, é retornado quando
    usamos querySelectorAll para selecionar elementos do Dom)
*/

//Exemplo

        const x = document.querySelectorAll('alguma-coisa');


        //forEach com Arrow function
        x.forEach((item)=>{
            console.log(item)
        })
        //ForEac com function padrão
        x.forEach(function(item){
            console.log(item)
        })

/*
        Parâmetros do forEach
*/
        const imgs = document.querySelectorAll('img');
        imgs.forEach((item, index, array)=>{
            console.log(item) // Retorna o item
            console.log(index)// Retorna o index de cada item
            console.log(array)// Retorna o item todo
        })

/*
       ForEach e Array
       
       forEach é um método de Array, alguns objetos array-like possuem este método.
       Caso não possua, o ideia é transformá-los em um array

       o NodeList possui. Já o HTMLcollection não.  
       Para transformar o HTMLcollection em array podemos usar o Array.from()
  
*/

     const htmlcollection = document.getElementsByClassName('alguma-classe');
     //const htmlcollection é um HTMLcollection, portanto não pode recerber o método forEach.
     //Então devemos transformar ele em um  array para usar as propriedades.
     const  transformar = Array.from(htmlcollection);
    //declaramos uma nova variável para receber essa transformação e dps podemos usar