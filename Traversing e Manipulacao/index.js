/*
    Propriedades que o professor esqueceu de citar 

    outerHTML, innerHtml e innerText

    Propriedades que retornam uma string  contendo o html ou texto. É 
    possivel retribuir um novo valr para as mesmas 

    .outerHTML = todo html do elemento
    .innerHtml = html inteiro
    .innerText = texto, sem tags

    ex
     '   
    menu.innetText = '<p>Texto</p>';//a tag vai como texto
    menu.innerHtml = '<p>Texto</p>;// a tag é rederizado

*/

/*
    TRANSVERSING

    como navegar pelo DOM, utilizando suas propriedades e métodos
*/

//Exemplo 

    const test = document.querySelector('.ksks');

    test.parentElement;//Seleciona o elemento pai do test
    test.parentElement.parentElement// Seleciona o pai do pai do test
    test.previousElementSibling//Elemento a cima (anterior do test)
    test.nextElementSibling//Elemento a baixo(Proximo dps do test )

    test.children;//  HTMLcollecton  com os filhos 
    test.children[0]// Primeiro filho
    test.children[--test.children.length]//Ultimo filho 

    test.querySelectorAll('li')// todas as li
    test.querySelector('li:last-child')// último filho do li

/*
 Element vs Node
    Element's representam um elemento html,ou seja, uma tag.Node representa um nó, e pode ser
    um elemento (element),texto,comentário, quebra de linha e mais

    .firstChild primeiro node child
    .childnode todos os node child




*/