/* new Promise()
            Promise é uma função construtora de promessas. Existem dois resultados 
        possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou 
        rejeitada se o segundo argumento for ativado.

 promesa
*/

// const promessa = new Promise(function(resolver,rejeitar){
//     let condi = true;
//     if(condi){
//         resolver('João');
//     }else{
//         rejeitar(Error('Um erro ocorreu'))
//     } 
// })
//console.log(promessa)

/*
    then()

        O poder das Promises está no método then() do seu protótipo. O callback
    deste método só sera ativado quand a promise for resolvida. O argumento do callback será o valor
    passado na função resolver.

*/

//promessa.then(resolve => console.log(resolve))

/*
    Assíncrono 
        As promises não fazem sentido quando o código executado dentro da mesma 
        é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele 

*/

// const promessa = new Promise(function(resolver,rejeitar){
//         setTimeout(() =>{
//             resolver('João')
//         },1000)
// })
// promessa.then(resolucao => console.log(resolucao)/* 'João' depois de 1 segundo. */)


/*
    then().then()
            O método then() retorna outra Promise. Podemos colocar then() após then() e fazer 
        um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno do anterior.
*/

     const promessa = new Promise((resolve, rejeitar) =>{
         resolve('Etapa 1');
     });

     promessa.then(resolucao =>{
            console.log(resolucao) // 'Etapa 1'
            return 'Etapa 2';
        }).then(resolucao =>{
            console.log(resolucao) // 'Etapa 2'
             return 'Etapa 3'
         }).then(r => r + 4).then(r =>{
             console.log(r)  // 'Etapa 34'
         })
/*
    catch();
            O método catch(), do protótipo de Promises, adiciona um callback a
        promise que será ativado caso a mesma seja rejeitada.
*/


const promessa1 = new Promise(function(resolver,rejeitar){
        let condi = false;
        if(condi){
            resolver('João');
         }else{
             rejeitar(Error('Um erro ocorreu'))
         } 
     })
console.log(promessa1)
     promessa1.then(resolucao => {
         console.log(resolucao)
        }).catch(reject => {
            console.log('CATCH')
            console.log(reject)// Retorna erro pq a variavel condi falsa
        })
/*
     then(Resolve, reject) 
            Podemos passar a função que será ativada caso a promise seja 
        rejeitada, direto no méodo then, como segundo argumento.
*/
        const promesssa2 = new Promise((resolve, reject) =>{
            let condi = false;
            if(condi){
                resolve('Estou pronto')
            }else {
                reject(Error('Um erro ocoreu.'));
            }
        })

            promesssa2.then(resolucao => {
                console.log(resolucao)
            }, reject =>{
                console.log(reject)
            })

/*
    finally()
            Executará a função anônima assim que a promessa acabar.
        A diferença do fanally é que ele será executado independente do resultado, se for resolvida
        ou rejeitada.
*/
            .finally(() =>{
                console.log('acabou')
            })
/* 
    Promise.all()
            Retornará uma nova promise assim que todas as promises dentro dela 
        forem resolvidas ou pelo menos uma rejeitada. A resposta é uma 
        array com as resposta de cada promise
*/

            const login = new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve('Usuario logado')
                }, 2000)
            })

            const dados = new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve('Dados carregados')
                }, 2000)
            })

            const carregouTudo = Promise.all([login, dados]);
            console.log(carregouTudo)

            carregouTudo.then((resolucao)=>{
                console.log(resolucao) // Retorna um array com os dados das duas promises.
            })
/*
    Promise.race()
            Retornará uma nova promise assim que a primeira promise for
        resolvida ou rejeitada. Essa nova promise terá a resposta da primera resolvida
*/

        const login1 = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Usuario logado1')
            }, 2000)
        })

        const dados1 = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Dados carregados1')
            }, 2000)
        })

        const carregouTudoo = Promise.race([login1, dados1]);
        console.log(carregouTudoo)

        carregouTudoo.then(resposta =>{
            console.log(resposta) // 'Usuario logado1
        })