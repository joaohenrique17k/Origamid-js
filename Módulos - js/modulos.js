/*
    MÓDULOS

    Manutenção
        Dividir o código em diferentes arquivos com funções específicas(Módulos)
        facilitando a manutenção 

    Compartilhamento 
        O compartilhamento do código com outros projetos é facilitado, pois basta você importar
        um módulo específico.
    
*/

 
    // Modules ES6 -------------------------------------------------

    //     Basta adicionar type="module" na tag script do HTML.Utilize a palavra chave export na frente 
    //     do valor que deseja exportar(use default se for único). E import nome from arquivo.js

    // //Arquivo scroll-suave.js

    // export default function scrollSuave(){
    //     ...
    // }

    // Arquivo scroll-suave.js
    
    // import scrollSuave from './scroll-suave.js';

    // scrollSuave();
    
/*
    NAMED EXPORTS

    Você pode exportar mais de um valor.Quando for importar utilize as chaves para especificar
    cada valor. O nome importado deve ser igual ao Exportado
    
    */
/*
    VALORES DO EXPORT 
    
    Podemos exportar objetos, funções, classes, números, strings e mais.

*/

/*
    CARACTERÍSTICAS

    Strict mode

    'use strict' por padrão em todos os arquivos.


    Variáveis ficam no module apenas

    Não vazam para o escopo global.

    This fora de um objeto faz referência a undefined

    ao invés de fazer referência ao window

    Assíncrono ----------------


*/

/*
    use strict

        O modo estrito previne que algumas ações consideradas erros.
        Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo


*/