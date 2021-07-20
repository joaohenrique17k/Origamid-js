/*
    Constructor Function 
        Funções responsáveis pela criação de objetos. O conceito de uma função 
        construtora de objetos é implementar em outras linguagens como Classes.

*/
    // function Button(text, background){
    //     this.text = text;
    //     this.background = background;
    // }   
    // Button.prototype.element = function() {
    //     const button1 = document.createElement('button');
    //     button1.innerHTML = this.text;
    //     button1.style.background = this.background;
    //     return button1;
    // }

    // const blueButton = new Button('Compar', 'blue');

    // console.log(blueButton.element())
/*
    Class
            O ES6 trouxe uma nova sintaxa para implementarmos funções construtoras.
        Agora poemos utilizar a palavra chave class. É considerada syntactical sugar, pois por 
        baixo dos panos continua utilizando o sistema de protótipos de uma função construtora
        para criar classe
*/

/*
class Button2{
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}

const newButton = new Button2('Comprar', 'Amarelo')

console.log(newButton.element())






*/



/*Class vs Constructor Function

    Class

        class Button {
            constructor(propriedade) {
                this.propriedade = propriedade;
            }
            metodo1() {}
            metodo2() {}
        }

    Constructor Function

        function Button(propriedade) {
            this.propriedade = propriedade;
        }
        Button.prototype.metodo1 = function() {}
        Button.prototype.metodo1 = function() {}
*/
/*
        Constructor 
                O método constructor(args){} é um método especial de classe. Vele 
            você ira definir todas as propriedades do objeto que será criado. Os argumentos
            passados em new, vão direto para o constructor.

            class Button {
                constructor(text, background, color) {
                    this.text = text;
                    this.background = background;
                    this.color = color;
                }
            }

        const blueButton = new Button('Clique', 'blue', 'white');
        // Button {text: 'Clique', background: 'blue', color: 'white'}




        Constructor Return
                Por padrão a classe retorna this. Ou seja, this é o objeto criado
            com o new Class. Podemos modificar isso alterando o return do constructor, o
            problema é que perderá toda a referência do objeto

            class Button {
            constructor(text) {
                this.text = text;
                return this.element(); // não fazer
            }
            element() {
                document.createElement('button').innerText = this.text;
            }
            }

            const btn = new Button('Clique');
            // <button>Clique</button>
            
            

        This

            Assim como em uma função construtora, this faz referência ao objeto criado 
            com new. Você pode acessar as propriedades e métodos da classe utilizando o this.
*/
        
            class Button {
                constructor(text,background) {
                this.text = text;
                this.background = background;
                }
                element() {
                
                const buttonElement = document.createElement('button')
                buttonElement.innerText = this.text;
                buttonElement.style.background = this.background;
                return buttonElement;
                }
                appendElementTo(target) {
                    console.log(target)
                const targetElement = document.querySelector(target);
                targetElement.appendChild(this.element());
                }
            }
            
            const blueButton = new Button('Clique','blue');
            
            blueButton.appendElementTo('body');

/*
    Propriedades

        Podemos passar qualquer valor dentro de uma propriedade.
*/

            class Button12 {
                constructor(options){
                    this.options = options;
                }
                
            }
            
            const redButton = new Button12({
                backgroundColor:"Red",
                text:"comprar",
                color:"white",
            })

/*
    STATIC vs PROTOTYPE

            Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos
        criar métodos diretamente na classe utilizando a palavra chave (static). Assim como ([].map()) é um metodo de uma array
        e array.from() é um método construtor Array.

        Obs: static transforma protótipo de uma class em um método.
*/
            class Button33{
                constructor(text){
                    this.text = text;
                }
                static createe1(background){
                    const elementButton = document.createElement('button');
                    elementButton.style.background = background;
                    elementButton.innerHTML = this.text;
                    return elementButton;
                }

            }
            
            const optionsButton = {
                backgroundColor:"Red",
                text:"comprar",
                color:"white",
            }

            const createe = new Button33(optionsButton)



            const metodoCreate = Button33.createe1('red') //Acessando por método.

            console.log(metodoCreate)// Retorna um button

/*
    Static

        Você pode utilizar um método static para retornar a própria classe com propriedades já pré 
    definidas.
*/

            class Button44{
                constructor(text, background, color){
                    this.text = text;
                    this.background = background;
                    this.color = color;
                }
                element(){
                    const createButton2 = document.createElement('button');// Cria o botão
                    createButton2.innerHTML = this.text; // Adiciona um texto pra ele
                    createButton2.style.background = this.background;  //adiciona uma cor de fundo para ele
                    createButton2.style.color = this.color;//Adiciona uma cor para a letra do botão
                    return createButton2; // Retorna o botão
                }
                aparecer(target){
                    const selecionar = document.querySelector(target);
                    selecionar.appendChild(this.element())

                }
                static createBlack(text){
                    return new Button44(text, 'black','white')
                }
            }
                const blackButton = Button44.createBlack('Comprar')
        for(let i = 0; i < 10; i++){
            blackButton.aparecer('.black')
        }
