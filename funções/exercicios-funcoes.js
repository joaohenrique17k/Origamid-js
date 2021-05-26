//Crie um função para verificar se um valor é Truthy
    function verificar(valor){
    return !!valor;
}
console.log(verificar(33))//retornou true


//Crie uma função matemática que retorne o perímetro de um quadradro
//Lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(soma){
    return soma * 4
}
console.log(quadrado(4));


//Crie uma função que retorne seu nome completo
//ele deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
    
}
console.log(nomeCompleto('João','Henrique'));


//Crie uma função que verifica se um número é par
function par(numero){
     return numero%2==0 ? 'Par':'Ímpar';
}
console.log(par(2))//retorna par


//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function type(sla){
    return typeof sla
}
console.log(type(12))//Retorna número

//addEventListener é uma função nativa do Javascript
//o primeiro parâmetro é o evento que ocorre e o sengundo o callback
//utilize essa função para mostrar no console seu nome completo
//quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log('João Henrique')
})

// corrija o erro abaixo
/*
function precisoVisitar1(paisesVisitados1){
    var totalPaises1 = 193;
    return `Ainda faltam ${totalPaises1 - paisesVisitados1} países para visitar`
}
function jaVisitei(paisesVisitados1){
    return `Já visitei ${paisesVisitados1} do total de ${totalPaises1} países`;
}*/
''
var totalPaises1 = 193;
function precisoVisitar1(paisesVisitados1){
    return `Ainda faltam ${totalPaises1 - paisesVisitados1} países para visitar`
}
function jaVisitei(paisesVisitados1){
    return `Já visitei ${paisesVisitados1} do total de ${totalPaises1} países`;
}
console.log(precisoVisitar1(20))
console.log(jaVisitei(20));

