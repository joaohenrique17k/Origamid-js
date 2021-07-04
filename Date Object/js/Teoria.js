/*
    New Date()
        O construtor Date cria um objeto contendo valores como mês, dia, ano, hórario e mais. A data é 
        baseado no relógio interno do computador
*/

    const hora = new Date();

    console.log(hora.getDate()) // Dia 4
    console.log(hora.getDay()) // retorna o dia da semana "0" (hoje é domingo)
    console.log(hora.getFullYear()) // Ano
    console.log(hora.getHours()) // 14h
    console.log(hora.getMinutes())// minutos 
    console.log(hora.getTime())// Ms desde 1970
    console.log(hora.getUTCHours() - 3) // Brasília

/*
    getTimer()
        O método getTimer() mostra o tempo total em milissegundos desde o dia 1 de janeiro de 1970.
*/

    //total de dias desde 1 de janeiro de 1970

    const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);