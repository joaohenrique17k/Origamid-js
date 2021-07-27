/*
    Regular Expression
        Regexp ou Regex são expressões utilizadas para realizarmos buscas/ substituições de padrões em strings. Os
        padrões devem ser colocados entre // . Geralmente vamos utilizá-las nos métodos .replace() e .split().

        Praticamente todas as linguagens possuem uma implementação de regexp
*/

    //Procurar: a
    const padraoRegexp = /J/;
    const texto = 'JavaScript';
    const novoTexto = texto.replace(padraoRegexp, 'B');
    console.log(novoTexto)


/*
    Literal
        Utilizar um caractere literal irá realizar umas busca específica desde caracter.

*/
    const texto2 = 'JavaScript'
    //Procura: J seguindo de a, v, e a
    const novoTexto2 = texto2.replace(/Java/,'Type')
    console.log(novoTexto2)// TypeScript

/*
    Flag:g
        As flags irão modifcar como a expressão é interpretada. Uma das mais utilizadas é a 'g', que significa
        global, ou seja, retorna todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag
    
*/
    const padraoRegexp2 = /a/g; //Siginifica que vai selecionar todos

   const testandoFlag =  texto.replace(padraoRegexp2,'i')
   console.log(testandoFlag) //JiviScript

/*
    Flag:i
        com o 'i' informamos que deve ser ignoradas as diferenças entre maiúsculas. Isso significa que /a/ irá buscar
        por a e A
*/
    const padraoRegexp3 = /Pe/gi; //Procura todo PE, Pe, pE e pe    
    const texto3 = `Pedro teve  que pegar o  peso`;

    const testandoFlag2 = texto3.replace(padraoRegexp3, 'Bo')

    console.log(testandoFlag2) //Bodro teve  que Bogar o  Boso 

/*
    Character Class
        Se colocarmos os caracteres entre colchetes, estamos definindo uma classe /[ab]/ irá procurar por a ou b
*/
    const padraoRegexp4 = /[ab]/gi; 
    const testandoFlag3 = texto.replace(padraoRegexp4, 'u');

    console.log(testandoFlag3) //JuvuScript

/*
    Caractere Class e Especiais
        Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois 
        existem diversos casos especiais para os mesmos

        se passarmos apenas /./gi sem a classe ele vai selecionar tudo da string(O ponto significa tudo).
*/
    const padraoRegexp5 = /[-.]/gi;
    const texto4 = '12121.1212-22-22';
    const testandoFlag4 = texto4.replace(padraoRegexp5, '');
    
    console.log(testandoFlag4) //1212112122222 
 
/*
    Um ou Outro
        Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.
*/
    //Procura: B seguido de r, a seguido de s ou z, seguido de i, l
    const padraoRegexp6 = /Bra[sz]il/g;
    const  texto5 = 'Brasil é com z: Brazil';
    const testandoFlag5 = texto5.replace(padraoRegexp6, 'Prazer');

    console.log(testandoFlag5) // Prazer é com z: Prazer

/*
    De A à Z
        O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscas os caracteres de A à Z. [0-9]
        de 0 à 9. A tabela UNICODE é utilizada como referência para definirmos os caracteres dentro do alcance.S

    // Busca por itens de a à z
    const regexp = /[a-z]/g;

    'JavaScript é a linguagem.'.replace(regexp, '0');
    // J000S00000 é 0 000000000.

    // Busca por itens de a à z e A à Z
    const regexp = /[a-zA-Z]/g;

    'JavaScript é a linguagem.'.replace(regexp, '1');
    // 1111111111 é 1 111111111.

    // Busca por números de 0 à 9
    const regexpNumero = /[0-9]/g;

    '123.333.333-33'.replace(regexpNumero, 'X');
    // XXX.XXX.XXX-XX
*/
/*
    Negar 
        Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
*/
    const padraoRegexp7 = /[^a]/g;
    const testandoFlag6 = texto.replace(padraoRegexp7, ' ' );
    console.log(testandoFlag6) //a a

/*
    Ponto
        O ponto . irá selecionar qualquer caractere, menos quebras de linha.
*/
    const padraoRegexp8 = /./g;
    const testandoFlag7= texto.replace(padraoRegexp8, '0');
    console.log(testandoFlag7) //0000000000
/*
    Escapar Especias
        Caracteres especiais como o ponto . ,podemos ser escapados utilizando a barra \, assim este não terá mais a sua 
        função especial e será tratado como literal. Lista de caracteres especias: +*?^$\.[]{}()|/
*/
    //Procurar: todos os pontos
    const padraoRegexp9 = /[\.\-]/g;
    const padraoRegexpAlternativa = /[.]/g;

    const testandoFlag8 = texto4.replace(padraoRegexp9,'||' )
    console.log(testandoFlag8)  //Selecionou . ou - (Retorno: 12121||1212||22||22)

/*
    Word
        O \w irá selecionar qualquer caractere alfanumérico e o underline É a mesma coisa que [A-Za-z0-9_]
*/
    const padraoRegexp10 = /\w/g;
    const testandoFlag9 = texto.replace(padraoRegexp10, '||');
    console.log(testandoFlag9) // Retorno ||||||||||||||||||||

    //Usando o W maiúsculo ele vai negar e vai selecionar o que não for alfanumérico

    // \s vai selecionar tudo o que for espaço, quebra de linha ou tab.
    // \S maiúsculo ele nega o que for esoaço, quebra de linha ou tab.
    //Podemos selecionar tudo tambem usando /[\S]/g sem precisar usar ponto
/*
    Qunatificador

        É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Comos chaves 
        podemos indeicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caractere
        por caracter.
*/

    const texto6 = 'Vaiiii corinthians kkkkkkkkkkkkkkkkkkk';
    const quantificador = /i{4}/g;
    const quantificador2 = /k{1,9}/g;
    const testandoFlag10 = texto6.replace(quantificador, 'mos');
    const testandoFlag11 = texto6.replace(quantificador2,'shushu');
    
    console.log(testandoFlag10) // Vamos corinthians kkkkkkkkkkkkkkkkkkk 
    console.log(testandoFlag11) // Vaiiii corinthians shushushushushushu 

/*
    Mais +
        O sinal de + siginifica que devemos selecionar quando existir pelo menos uma ou mais ocorrências.
*/
    //Procura: dígitos em ocorrências de um ou mais

    const padraoRegexp11 = /\d+/g;
    const testandoFlag12 = texto4.replace(padraoRegexp11, 'X');
    console.log(testandoFlag12) //X.X-X-X

/*
    Opcional ?

        O sinal ? significa que o caracter é opcional, pode ou não existir.

    // Procura: Por regex com p opcional
    const regexp = /regexp?/g;

    'Qual é o certo, regexp ou regex?'.replace(regex, 'Regular Expression');
    // Qual é o certo, Regular Expression ou Regular Expression?
*/

/*
        Alternado |

        O sinal | irá selecionar um ou outro. java|php

        // Procura: java ou php (case insensitive)
        const regexp = /java|php/gi;

        'PHP e Java são linguagens diferentes'.replace(regexp, 'X');
        // X e X são linguagens diferente



    Word Boundary \b

    O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

        // Procura: java (case insensitive)
        const regexp = /java/gi;
        'Java não é JavaScript.'.replace(regexp, 'X');
        // X não é XScript.

        // Procura: java (case insensitive)
        const regexpBoundary = /\bjava\b/gi;
        'Java não é JavaScript.'.replace(regexpBoundary, 'X');
        // X não é JavaScript.

        // Procura: Dígitos em sequência, que estejam isolados
        const regexpDigito = /\b\d+\b/gi;
        'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexDigito, 'X');
        // O Restaurante25 na Rua X, custa R$ X,X

        '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');
        // 11_22 X-X XéX 77e88

        
        Not Word Boundary \B

        É o contrário do \b.

        const regexpDigito = /\B\d+\B/gi;
 
        '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');
        // 1X_X2 33-44 55é66 7XeX8
*/
/*
    Anchor Beginning

        Com o ^ é possível informar que a busca deve ser iniciada no início da linha.
*/
    const x = /^\w+/g;
    const email = `joaohenrique17k@outlook.com
                    joaohenriquecfal@outlook.com`
                        
    const result = email.replace(x, 'X');
    console.log(result) //X@outlook.com 
/*
    Anchor End

        Com o $ é possível informar que a busca deve ser iniciada no final da linha.



        // Procura: sequência de alfanuméricos
        // no final da linha.
        const regexp = /\w+$/g;

        `andre@origamid.com
        contato@origamid.com`.replace(regexp, 'X');
        // andre@origamid.com
        // contato@origamid.X


        Flag: m

            Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de
                 linha devem ocorrer em todas as linhas disponíveis.

        // Procura: sequência de alfanuméricos
        // no final da linha.
        const regexp = /\w+$/gm;

        `andre@origamid.com
        contato@origamid.com`.replace(regexp, 'X');
        // andre@origamid.X
        // contato@origamid.X

        // Procura: sequência de alfanuméricos
        // no início da linha.
        const regexp = /^\w+/gm;

        `andre@origamid.com
        contato@origamid.com`.replace(regexp, 'X');
        // X@origamid.com
        // X@origamid.com


        Line Feed \n

        O \n irá selecionar o final de uma linha, quando criamos uma nova.

        const regexp = /\n/g;

        `andre@origamid.com\ncontato@origamid.com`.replace(regexp, '---');
        // andre@origamid.com---contato@origamid.com

        `andre@origamid.com
        contato@origamid.com`.replace(regexp, 'X');
        // andre@origamid.com---contato@origamid.com

*/

// Unicode \u

// O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.

// Procura: @ ou ©
const regexp22 = /\u0040|\u00A9/g;

'andre@origamid.com ©'.replace(regexp22, '---');
// andre---origamid.com ---
