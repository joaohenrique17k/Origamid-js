function Pessoas(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    
}

    Pessoas.prototype.eu = function(){
        console.log(` Meu nome é  ${this.nome} ${this.sobrenome} e tenho 19 anos`)
    }
    const joao = new Pessoas('João','Henrique',19);

    //Selecionar os elementos de uma li e atribuir classe a ela 


    function Dom(seletor){
        this.element = document.querySelectorAll(seletor);
        this.loop = function(classe){
            this.element.forEach(item =>{
                item.classList.add(classe);
            })
        }
    }
    Dom.prototype.ala = function (){
        
    }
    const eu = new Dom('li');
    eu.loop('aaaaa');


