/*
    async / await
        A palavra chave async indica que a função possui partes assíncronas e que 
        você pretende esperar a resolução da mesma antes de continuar. O await irá 
        indicar a promise que devemos esperar. Faz parte do ES8  

        Obs: o await só vai na frente em partes que retornam uma Promise    
*/  

    const requeri = async()=>{
        const dados = await fetch('../Json/dados.json')
        const dadosJson = await dados.json();
        console.log(dadosJson)
    }
    requeri();
/*
    then / async

       A diferença é uma sintaxe mais limpa.
*/

    //THEN
    function iniciarFetch() {
        fetch('../Json/dados.json')
        .then(dadosResponse => dadosResponse.json())
        .then(dadosJSON => {
        console.log(dadosJSON)
        })
    }
  iniciarFetch();
  
    //async
  async function iniciarAsync() {
    const dadosResponse = await fetch('../Json/dados.json');
    const dadosJSON = await dadosResponse.json();
    console.log( dadosJSON)
  }
  iniciarAsync();

/*
    Try / Catch

        Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

*/
async function iniciarAsync1() {
    try{
        const dadosResponse = await fetch('../Json/dados.json');
        const dadosJSON = await dadosResponse.json();
        console.log( dadosJSON)
    }
    catch {
        console.log(Error('Errooo'))
    }
  }
  iniciarAsync1();


//   Iniciar Fetch ao Mesmo Tempo

// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.

async function iniciarAsync3() {
  const dadosResponse = fetch('../Json/dados.json');
  const clientesResponse = fetch('../Json/dados.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();
}
iniciarAsync3();

    // Promise

        // O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será 
        // sempre o resultado desta promise.


        async function asyncSemPromise2() {
            // Console não irá esperar.
            await setTimeout(() => console.log('Depois de 1s'), 1000);
            console.log('acabou');
          }
          asyncSemPromise2();
          
          async function iniciarAsync22() {
            await new Promise(resolve => {
              setTimeout(() => resolve(), 1000)
            });
            console.log('Depois de 1s');
          }
          iniciarAsync22();
          