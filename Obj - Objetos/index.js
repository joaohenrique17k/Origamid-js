/*
    Object 

    todo objeto é criado apartir do contrudor de Object e por isso herda as 
    propriedades e métodos de seu prototype.
*/

    const carro1 = {
        nome:'Ferrari',
        ano:2002,
    }

    //Outra forma de fazer 

    const carros = new Object({
        nome:'Corsa Amarelo',
        ano:2001,
    })

    //Métodos de Object

/*
    Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento
    
*/

    const carro = {
        rodas: 4,
        init(valor){
            this.marca = valor;
            return this;
        },
        acelerar(){
            return `${this.marca} acelerou as ${this.rodas} rodas`
        },
        buzinar(){
            return this.marca + ' Buzinou';
        }
    }

    //const honda  =  Object.create(carro)//O objeto passado faz parte do protótipo de honda
   // honda.marca = 'Honda';
    //console.log(honda.acelerar())// Retorna: Honda acelerou as 4 rodas, ele subistitui marca por honda.
    //honda.init('Ford')

    const honda = Object.create(carro).init('Honda')
    const ferrari = Object.create(carro).init('Ferrari');

/*
    Object.assign

    Object.assign(Alvo, arg1, arg2) Adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assingn irá modificar o objeto alvo.
*/

    const skate = {
        rodas:'gastas',
        skateNovo:true
    }
    const LongBoard = {
        rodas:'novas',
        ShapeNovo:false,
    }

    const manobra = {
        remar(){
            return `Remando na velocidade máxima`
        },
        desviar(){
            return `Desviar`
        }
        
    }

    Object.assign(skate, manobra) // A const manombra e suas propriedades são adicionadas ao skate
    Object.assign(LongBoard, manobra)// A const manobra e suas propriedades são adicionada ao longbord
    //Depois de adicionar Object.assign ele mudará o objeto original passado no primeiro argumento.

    
/*
    Object.defineProperties(Alvo, propriedade) Adiciona ao alvo novas propriedades. A diferença é a possibilidade
    de  serem definidas essas caracteristicas.

    Exemplo: Bloquear a edição de das propriedades com configurable ou mudança de valor com writable 
    o valor passado pelo objeto é através do (value) pode ser qualquer tipo de valor

*/

    const filmes = {}; 

    Object.defineProperties(filmes, {
        Genero:{
            value:'Comédia',
            configurable:false,
        },
        DataLancamento:{
            value:2002,
            configurable:false,
            writable:false,
        }

    })

/*
    Metódo dentro de defineProperties: Set e Get possibilita diferente comportamentos para get e set de uma 
    propriedade.

    lembrando que quando colocamos por exemplo no console "exemplo.atividade" a função get é ativada e quando
    colocamos "exemplo.atividade = 'Futebol'" A propriedade set é ativada

*/

    const conta = {};

    Object.defineProperties(conta, {
        contas: {
            get(){
                return this._contas
            },
            set(valor){
                this._contas = valor + 4;
            }
        }
    })

    conta.contas = 4;
    console.log(conta.contas) // 8

    const musica = {};

    Object.defineProperties(musica, {
        rock:{
            get(){
                return this._rock
            },
            set(valor){
                this._rock = valor + ` É o melhor gênero musical`
            }
        }
    })
    musica.rock = 'Rock';

    console.log(musica.rock) // "Rock É o melhor gênero musical"