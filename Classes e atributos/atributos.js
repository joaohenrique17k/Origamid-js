/*
    Attributes

    Retorna uma array-like com  os atributos do elemento(class,id,data-texto)

*/
    //const atributos = document.querySelector('teste');

    //atributos.attributes; // retorna todos os atributos 
    //atributos.attributes[0]//retorna o primeiro atributo, pode ser (class, id ou data-texto)

    //como retornar data-texto
   //atributos.attributes['data-texto'];
    //tem que estar dentro de uma string porque o nome não é reconhecido como uma 
    //variável 



    //--------------

/*
    getAttribute e setAttribute

    Métodos que retornam(getAttribute) ou definem(setAttribute), depende do elemento selecionado

*/

    const img2 = document.querySelector('img');

    console.log(img2.getAttribute('src')); // retorna o src da imagem(img/imagem1.jpg)
    console.log(img2.getAttribute('alt')); // retorna o alt da imagem(alaa)
    
    //----------------

    console.log(img2.setAttribute('alt', 'É uma raposa'));// Aqui antes da virgula selecionamois o alt
    //e dps dela colocamos a atualização dela se olhar no inspecionar elemento, você vai conseguir ver q foi atualizado de 
    // alaa para É uma raposa

/*
    hasAttribute verifica se existe o atributo(retorna true ou false)
*/
    const possuiAlt = img2.hasAttribute('alt');
    console.log(possuiAlt)//Retorna true.

/* 
    Read Only vs Writable

    Existem prorpiedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

*/

   console.log(img2)
   console.log(img2.className)//retorna o nome das classes que estão na tag img
   console.log(img2.className = 'azul') // substitui completamente a string
   console.log(img2.className += 'vermelho')// adiciona vermelho à string

   img2.attributes = 'class="ativo"';// não funciona, Read-Only


 



