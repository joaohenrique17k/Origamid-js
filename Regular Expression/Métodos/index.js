/*
    Regexp Constructor

        Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. 
        Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma 
        passada como argumento de RegExp.
*/
    //Se passarmos uma string, não precisamos dos //
    //e devemos utilizar \\ para metar caracteres, pois é necessário
    //escapar a \ especial. As flags são o segundo argumento

    const regexpObjt1 = new RegExp('\\w+', 'gi');
    //const regexpObjt1 = new RegExp(/\w+/, 'gi');

    const text = 'JavaScript Css3 Html';
    const result = text.replace(regexpObjt1, 'X');
    console.log(result) // X X X

    // Exemplo complexo:
    const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
    const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');

/*
    Propriedades

    Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.

    regexp.flags; // 'gi'
    regexp.global; // true
    regexp.ignoreCase; // true
    regexp.multiline; // false
    regexp.source; // '\w+'
*/

/*
    Regexp.test()

    O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele 
    retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que 
    parou no último true.
*/

    const regest = /Java/g;
    const  frases = 'JavaScript e Java';

    console.log(regest.lastIndex) //0
    console.log(regest.test(frases)) // True, porque encontrou a palavra Java de JavaScript.
    console.log(regest.lastIndex) //4 porque foi o ultimo caracteres que ele encontrou(   Java
    //                                                                                    1234     ).
                                                                                          
    console.log(regest.test(frases)) // True, porque encontrou outra vez a palavra Java.
    console.log(regest.lastIndex) //17 porque foi o ultimo caractere(J a v a S c r i p t e J a v a
    //                                                               1 2 3 4 5 6 7 8 9                    )
    console.log(regest.test(frases))// false, porque não encontra mais java
    console.log(regest.lastIndex)// retorna 0 porque não localizou Java

    //Se repetirmos ele fará o mesmo processo como se fosse um Loop.

    console.log(regest.test(frases)) // True, porque encontrou outra vez a palavra Java.
    console.log(regest.lastIndex) 

    //Podemos usar diretamento o while
    
/*
    regexp.exec()
        O exec() diferente do teste(), irá retornar uma Array com mais informações do que apenas um calor
        booleano
*/
    const regexp = /\w{2,}/g;
    const frase = 'JavaScript, TypeScript e CoffeeScript';

    regexp.exec(frase);
    // ["JavaScript", index: 0, input: "JavaScript,
    // TypeScript e CoffeeScript", groups: undefined] 
    regexp.exec(frase);
    // ["TypeScript", index: 12, input: "JavaScript,
    // TypeScript e CoffeeScript", groups: undefined] 
    regexp.exec(frase);
    // ["CoffeeScript", index: 25, input: "JavaScript,
    // TypeScript e CoffeeScript", groups: undefined] 
    regexp.exec(frase);
    // null
    regexp.exec(frase); // Reinicia
    // ["JavaScript", index: 0, input: "JavaScript,
    // TypeScript e CoffeeScript", groups: undefined] 
    let regexpResult;

    while((regexpResult = regexp.exec(frase)) !== null) {
        console.log(regexpResult);
      }
/*
      str.Match()
        O match é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença
        de resultado quando utilizamos a flag g ou não.

        se não tiver match retorna null
*/
    const regexpSemG = /\w{2,}/;
    frase.match(regexp);
    // ['JavaScript', 'TypeScript', 'CoffeeScript']

    frase.match(regexpSemG);
    // ["JavaScript", index: 0, input: "JavaScript,
    // TypeScript e CoffeeScript", groups: undefined]

/*
      str.split()
            O split serve para distribuirmos uma string em uma array, quabrando a string no argumento
            que for passado. Este método irá remover o match  da array final.
*/


    frase.split(', ');
    // ["JavaScript", "TypeScript", "CoffeeScript"]
    frase.split(/Script/g);
    // ["Java", ", Type", ", Coffee", ""]

    const tags = `
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    </ul>
    `;

    tags.split(/(?<=<\/?)\w+/g).join('div');
    // <div>
    //   <div>Item 1</div>
    //   <div>Item 2</div>
    // <div>


/*
      str.replace()

        O método replace() é o mais interessante por permitir a utilização de funções de callback para 
        cada match que ele der com a Regexp.
*/
 

    //tags.replace(/(?<=<\/?)\w+/g, 'div');
    // <div>
    //   <div>Item 1</div>
    //   <div>Item 2</div>
    // <div>
/*
      Captura

        É possível fazer uma referência ao grupo de captura dentro do argumento do replace. 
        Então podemos utilizar $&, $1 e mais.
*/
    tags.replace(/<li/g, '$& class="ativo"');
    // <ul>
    //   <li class="ativo">Item 1</li>
    //   <li class="ativo">Item 2</li>
    // </ul>

/*
      Grupos de Captura

        É possível definirmos quantos grupos de captura quisermos.
*/
    const emails1 = `
    empresa@email.com
    contato@email.com
    suporte@email.com
    `;

    emails1.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
    // empresa@gmail.com
    // contato@gmail.com
    // suporte@gmail.com

/*
      Callback

        Para substituições mais complexas, podemos utilizar um callback como segundo 
        argumento do replace. O valor do return será o que irá substituir cada match.

*/

    const regexp = /(\w+)(@[\w]+)/g;
    const emails = `joao@homail.com.br
    marta@ggmail.com.br
    bruna@oulook.com.br`

    emails.replace(regexp, function(...args) {
    console.log(args);
    if(args[2] === '@homail') {
        return `${args[1]}@hotmail`;
    } else if(args[2] === '@ggmail') {
        return `${args[1]}@gmail`;
    } else if(args[2] === '@oulook') {
        return `${args[1]}@outlook`;
    } else {
        return 'x';
    }
    });

    // joao@hotmail.com.br
    // marta@gmail.com.br
    // bruna@outlook.com.br



