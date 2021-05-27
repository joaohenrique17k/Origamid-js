//Crie um objeto com seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome
let eu = {
    nome:'João',
    sobrenome:'Henrique',
    altura:1.75
}


//crie um método no objeto anterior, que mostre seu nome completo
eu.nomeCompleto = function(){
    return (`${this.nome} ${this.sobrenome}`);
}



//modifique o  valor da propriedade preco para 3000

var carro = {
    preco:1000,
    portas:4,
    marca: 'audi',
}
carro.preco = 3000;

//crie um objeto de um cachorro que representa um labrador,
//de 10 anos, preto e que late ao ver um homem
let cachorro = {
    raca:'Labrado',
    cor:'preto',
    idade:'10 anos',
    latir(pessoa){
        if(pessoa == 'homem'){
            return `latir`;
        }else{
            return `não latir`
        }
    }
}
console.log(cachorro.latir('homem'));




    


