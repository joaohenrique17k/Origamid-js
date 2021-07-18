/* Json
    JavaScript Object Notation (Json) é um formato de organização de dados. compostos
    por um consjunto de chaves e valor. As aspas duplas são obrigatórias, tanto na chave quanto
    no valor quando este for uma string.

    {
        "id": 1,
        "nome":"João",
        "email":"joaohenrique17k@outlook.com"
    }


    Valores 
        Os valores podem ser números, strings, boolean, arrays, objetos e null.

        {
            "id": 1,
            "faculdade": true,
            "pertences": [
                "lapis",
                "caneta",
                "caderno"
            ],
            "endereco": {
                "cidade": "Rio de Janeiro",
                "pais": "Brasil"
            },
            "casado": null
        }

        Obs: Não pode colocar vírgula no ultimo item do array ou do objeto

    Arrays E Objetos
            É comum possuirmos array's com objetos em cada valor da array. Cuidado para não 
        colocar vírgula no último item do objeto ou array.

        [
            {
                id: 1,
                aula: 'JavaScript',
                tempo: '25min',
            },
            {
                id: 2,
                aula: 'HTML',
                tempo: '15min',
            },
            {
                id: 3,
                aula: 'CSS',
                tempo: '10min',
            },
       ];

*/

       fetch('./dados.json').then(r => r.json()).then(json => {
           json.forEach(element => console.log(element.aula));//Retorna Javascript e HTML no console.
       });

/*  
       JSON.parse() e JSON.stringiy()

        JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript
        em uma string no formato JSON.
*/

       const jsonText = '{"id":1, "titulo":"JavaScript","tempo":"10min"}';
       const transformaJson = JSON.parse(jsonText); //Transforma uma string semelhante a um objeto em um objeto.
       console.log(transformaJson) //Retorna um objeto.

       const jsonObject = {
           cidade:"Praia Grande",
           rua:"Sobe desce",
           pais:"Basil",
           numero:"127.0.0.1",
       }
       const transformaText = JSON.stringify(jsonObject);
       console.log(transformaText)