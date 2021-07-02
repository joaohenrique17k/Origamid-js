/*
      setTimeout(callback, tempo, arg1, arg2)
             método assincrono que ativa o callback após um tempo(Determinado). Não existe 
            garantia que de que o código será executado exatamente após o tempo, pois o callback entra na fila
            e espera pela Call  Stack estar vazia.
*/

    function esperar(tempo){
        console.log(tempo)
    }
    setTimeout(esperar,1000, 'Depois de 1s');

//>=-------------------------------------------------------------<=\\

    setTimeout(()=>{
        console.log('Depois de 2s')
    },2000);

/*
    Imediato
        Se não passarmos o argumento de tempo ele assumira o valor de 0 e entrará na fila imediatamente 
        para ser executado. Podemos passar uma função anônima diretamente como argumento.    

*/ 
    setTimeout(()=>{
        console.log('0 segundos') //Resultado imediato.
    })

/*
    Loops e setTimeout
        Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop,
        todas as interações seram adicionadas à Web Api praticamente ao mesmo tempo. Um evento  de setTimeout
        não espera o tempo do anterior para iniciar.

*/
    // for (let i = 0; i < 20; i++) {
    //     setTimeout(()=>{
    //         console.log(i) //O primeiro setTimeout esperou os 3s, já à continuação foi automaticamente.
    //     }, 300)
        
    // }

    //Podemos resolver isso adicionando '* e o falor da variavel do for'

    // for (let i = 0; i < 20; i++) {
    //     setTimeout(()=>{
    //         console.log(i) 
    //     }, 300 * i)
        
    // }

/*
    This e Window
        setTimeout é um método  do objeto Window. O valor de this dentro do callback é uma 
        referência ao seu objeto no caso o Windo.

*/

    const btn = document.querySelector('[data-click]');
    btn.addEventListener('click', handleClick)

    // Retorna erro quando é usado uma function normal, porque o this faz referência ao window nesse contexto.
    
    // function handleClick(){
    //     setTimeout(function(){
    //         this.classList.add('active'); //Retorna erro
    //     },2000)     
    // }

//>=-------------------------------------------------------------<=\\

    //Com Arrow Function functiona, pois o this dentro do arrow function referência diretamente ao elemento pai, nesse caso o evento de click.
    
    function handleClick(){
        setTimeout(()=> this.classList.add('active'), 2000);     
    }

/*
    setInterval(callback, tempo, arg1, agr2, ...)
        Ativa o callback toda vez que a quantidade de tempo passar.

*/
    function loop(texto){
        console.log(texto)
    }
    // setInterval(loop, 1000, 'Passou 1s') //Repete a cada um segundo

    //>=-------------------------------------------------------------<=\\

    let o = 0;
    setInterval(()=>{
       // console.log(o++);  
    }, 1000);

/*
    clearInterval(var)
        Podemos parar um intervalo com o clearInterval. Para isso precisamos 
        atribuir o setInterval a uma variável.

*/

    const contador = setInterval(contando, 1000);

    function contando(){
       o > 10 ? clearInterval(contador) : console.log(o++)
    }