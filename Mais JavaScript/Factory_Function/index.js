/*
    Factory Function

        São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.
*/

    function createButton(text){
        function element(){
            const buttonElement = document.createElement('button');
            buttonElement.innerText = text;
            return buttonElement;
        }
        return {
            element:element,
            text:text,
        }
    }

    const comprarBotao = createButton('Comprar');

/*
    Métodos / váriaveis privadas 

        Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas

 */
    const criar = function criarPessoas(nome, sobrenome){
        const nomeCompleto = `${nome} ${sobrenome}`

        function andar(){
            return `${nomeCompleto} andou`;
        }
        function nadar(){
            return `${nomeCompleto} nadou`;
        }
        return {
            nome,
            sobrenome,
            nadar,
            andar,
        }
    }
    const eu =  criar('joao','henrique')

/*
    Ice Factory
        Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial
        de Douglas Crockford

*/
    const congelar = (nome, sobrenome) => {
    const meuNome = `${nome} ${sobrenome}`;
    function nomeCompleto(){
        return `${meuNome}`;
    }
    return Object.freeze({
        nome,
        sobrenome,
        nomeCompleto,
    })
}
    const congelou = congelar('João', 'Henrique');

/*
    Constructor Function / Factory Function
        Umas das vantagens da Factory Function é a possibilidade de iniciarmos a mesma 
        sem a utilização da palavra chave new. Também é possivel fazer isso com um Constructor Function.
*/
    function Pessoa(nome){
        if(!(this instanceof Pessoa)){ // ou if(new.target)
            return new Pessoa(nome)
        }
        console.log(this)
        this.nome = nome
    }
    Pessoa.prototype.andar = function(){
    return `${this.nome} andou`
    }

    const designer =   Pessoa('João')