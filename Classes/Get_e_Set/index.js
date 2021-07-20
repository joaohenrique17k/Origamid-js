/*
    Get e Set 
        Podemos definir comportamentos diferentes de get e set para um método.
*/

    const button = {
        get element(){
            return this._element;
        },
        set element(tipo){
            this._element = document.createElement(tipo)
        }
    }

    button.element = 'button'; //set
    button.element;// get (<button></button>);

    const button2 = {
        get element(){
            // return 200 // console.log(button2.element) // Retorna 200;
            return this._numero || 100;
        },
        set element(numero){
            return this._numero = numero
        },
    }
/*
    Valor estático
            Se definirmos apenas o get de um método, teremos então um valor 
        estático que não será possível mudarmos.
*/
    const matematica = {
        get PI(){
            return 3.14;
        }
    }

    console.log(matematica.PI) // GET (3.14)
    console.log(matematica.Pi = 20) // nada acontece

/*
    Set 
        Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto

*/
    const frutas = {
        lista: [],
        set nova(fruta){
            this.lista.push(fruta)
        }
    }

    frutas.nova = 'banana';
    frutas.nova = 'melancia';
    console.log(frutas.lista) //Array [ "banana", "melancia" ]

/*
    Class
        Assim como em um objeto, as classes podem ter métodos de get e set também.    
*/
    class Button1{
        constructor(text, background){
            this.text = text;
            this.background = background;
        }
        get element(){
            const criar = document.createElement('button');
            criar.innerHTML = this.text;
            criar.style.background = this.background;
            return criar;
        }
      
    }
    
    const novosss = new Button1('euu','red');
/*
    Set e Class

        Com o set podemos modificar apenas parte do elemento de get. É comum definirmos variáveis 
        privadas, utilizando o underscore _privada.
*/

class Button2{
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    get element(){
        const type = this._elementType || 'button'
        const criar = document.createElement(type);
        criar.innerHTML = this.text;
        criar.style.background = this.background;
        return criar;
    }
    set element(typee){
        this._elementType = typee;
    }
  
}

const novo = new Button2('euu','red');

console.log(novo.element) // Retorna um botão
console.log(novo.element = 'div') // seta o botão e trnasforma em div
console.log(novo.element)// Retorna uma div

    



