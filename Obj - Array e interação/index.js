/*
    Métodos de interação são super importantes pois tem contato com cada item do array 
    (Métods para fazem loop)

*/

/*
    forEach(callback,item , index, array) a função de callback é executada para cada item da array.
    Ela possui três argumentos, item(valor do item da array), index(index do valor da array) e array(array original).
 */
    const carros = ['Ford', 'Fiat', 'Honda'];
    const retorno = carros.forEach(function(item,index,array){
        console.log(item, index, array);
    })
    console.log(retorno) //ForEach retorna Undfined, diferente de map
/*
    Arrow Function
*/
    carros.forEach((item)=>{
        console.log(item.toUpperCase())
    })

    const li = document.querySelectorAll('li');

    li.forEach(i => i.classList.add('ativo'));
/*
    map(callback,item, index, arrayTodo) funciona da mesma forma que o forEach(). porém ao invés 
    de retornar um valor undefined, retorna uma nova array com valores 
    atualizados de acordo com o return de cada iteração

*/
    const newCarro = carros.map((i)=>{
        return i.toUpperCase();
    })
    
    console.log(carros) // [ "Ford", "Fiat", "Honda" ]
    console.log(newCarro) // [ "FORD", "FIAT", "HONDA" ]
    
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const numerosx3 = numeros.map(i => i * 3);

    console.log(numeros) // [1,2,3,4,5,6,7,8,9,10]
    console.log(numerosx3) // [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ]

/*
    Valor Retornado

    se não retornamos nenhum valor durante a iteração utilizando map, o valor retornado
    como de qualquer função que não possui return será undefined

*/

/*
    map() e forEach() 
    Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores
    modificados é retornada e você pode imediatamente iterar novamente sobre estes valores
*/

    const aulas =[
        {
            nome:'HTML 1',
            min:10
        },
        {
            nome:'HTML 1',
            min:20
        },
        {
            nome:'HTML 1',
            min:30
        },
        {
            nome:'HTML 1',
            min:40
        },
        {
            nome:'HTML 1',
            min:50
        },
    ]

    const recado = aulas.map(i => i.min)
    console.log(recado) // retorna um array com os minutos das aulas [ 10, 20, 30, 40, 50 ]

/*
    reduce(callback(acumulador, valorAtual, index, array))
    executa a função de callback para cada item da array. Um valor especial existe nessa função de callback, ele é 
    chamado de (acumulador), mas na verdade é apenas o retorno da interação anterior 

*/

    const gg = [10,25,30];
    const aa = gg.reduce((acumulador,i)=>{
        console.log(acumulador , i)
        return acumulador + i
        //primeiro loop acumulador = 0 e i = 10 ( 0 + 10 = 0) acumulador recebe 10
        //segundo loop  acumulador = 10 e i = 25 (10 + 25 = 35) acumulador recebe  35
        //terceiro loop acumulador = 35 e i = 30 (35 + 30 = 65) acumulador recebe 65
        //Fim do loop. O retorno é 65
        
    },0)
    console.log(aa) // 65
    
    const listaAulas = aulas.reduce((acumulador,aulas,index)=>{
        console.log(aulas.nome)
        acumulador[index] = aulas.nome;
        console.log(acumulador)
        return acumulador;
    },{})

    /* 

            // 1
        aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
        {}[0] = 'HTML 1';
        return {0: 'HTML 1'};
        }, {})

        // 2
        aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
        {0: 'HTML 1'}[1] = 'HTML 2';
        return {0: 'HTML 1', 1: 'HTML 2'};
        }, {})

        // 3
        aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
        {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
        return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
        }, {})

        // 4
        aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
        {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
        return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
        }, {})

    */

/*
        reduceRight 

        Exite também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, 
        enquanto o reduce itera da esquerda para a direita 

*/

    const frutas = ['Banana', 'Pêra', 'Uva', ''];

    const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
    const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

    frutasRight; // Uva Pêra Banana
    frutasLeft; // Banana Pêra Uva


/* some() , se pelomenos um return da iteração for truthy, ele retorna true. */

    const temUva = frutas.some((frutas)=>{
        return frutas === 'Uva';
    }) // Retorna true 
/*   every(), se todos os returns da interação forem truthy, o método irá retornar true. Se pelo menos um for 
     falsy, ele irá retornar false.
*/
    const arrayFull = frutas.some((item)=>{
        return item; //false
    });

/*
    Find() e findIndex()

    find(), retorna o valor atual da primeira iteração que retorna um valor truthy. já o findIndex, ao invés de retornar o valor, 
    retorna o index deste valor

*/
    //FIND
    const buscarFruta = frutas.findIndex(i => i == 'Uva');
    console.log(buscarFruta)// retorna 2 (o index)

    //FINDINDEX
    const nu = [1,2,3,4,5,6];
    const ni = nu.find((item)=> item > 3);
    console.log(ni)// retorna o primerio item que é maior que 3 (4)

/*
    filter(), retorna uma array com a lista de valores que durante a sua interação
    retornam um valor truthy
*/
    const mercadoria = ['Banana',undefined,'Uva',null,'Melancia'];

    const filtro = mercadoria.filter((item)=>{
        return item;
    })
    console.log(filtro)//Retorna um novo array apenas com os valores true de mercadoria


    const maiorQue3 = nu.filter(i => i > 3);
    console.log(maiorQue3)// Retornou um novo array com os valores de nu que são maiores que 3 
     