/*  FUNCTIONS
Funções são blocos de códigos que podem ser executados ou reutilizados. Os valores podem passar por uma mesma função e 
retornar um novo valor. 
Ao CRIAR uma função, você pode definir PARÂMETROS.
Ao EXECUTAR uma função, você pode passar ARGUMENTOS (valores que passamos dentro do parâmetro).

*/

function areaQuadrado(){
    console.log('ativa');
}
console.log(areaQuadrado());//Retorna no console 'ativa';

function areaQuadrado1(lado){
    return lado
}
console.log(areaQuadrado1(2));//Retorna o valor dois (O número dois dentro do parentes é enviado como parâmetro para a função);

function imc(peso, altura){
    const imc =  peso / (altura * altura);
    return imc;
}
console.log(imc(67,1.7));

function corFavorita(cor){
    cor === 'azul'? 'Eu gosto do céu': 'Não é azul';
    cor === 'verde'? 'Eu gosto de mato': 'Não é verde';
}
console.log(corFavorita('azul'));

/*
    Argumentos podem ser funções.
    Chamadas de Callback(Funções Anônima),são aquelas em que o nome da função não é definido, escritas como:
    function() {} ou  ()=>{}
*/


addEventListener('click', ()=>{
    console.log('Oi')
})

/*  Funções pode ou não retornar um valor

    Valores retornados
    
    Uma função pode retornar qualquer tipo de valor e até mesmo outras funções mas o ideal é que ela 
    trabalhe apenas com um tipo de dados como por exemplo:String, Number, etc.*/

function terceiraIdade(idade){
    console.log(typeof idade)
    if(typeof idade !== 'number'){
        return 'é uma string'
    }
    else if(idade >= 60){
        return true;
    }else{
        return false;
    }    
}
//console.log(terceiraIdade('Oi'));


/*      ESCOPO 
    Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele
*/
function faltaVisitados(paisesVisitados){
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

//console.log(totalPaises)//não retorna pois a variável está no escopo de bloco;

var nome = 'João Henrique';

function dados(){
    var idade = 18;
        function outrosDados(){
          var endereco = 'Praia Grande - SP';
          var altura = 1.75;
          return `${nome}, ${idade}, ${endereco}, ${altura}`;   
            
        }
       
        return outrosDados();
}
console.log(dados())//retorna os dados:João Henrique, 18, Praia Grande - SP, 1.75;
//console.log(outrosDados())//Retorna erro pq ele foi criado dentro de "dados"e precisaria estar dentro dele para retornar
 
/*
    Hosting
    Antes de executar qualquer função o Js "Move" todos as funções para a memória
*/