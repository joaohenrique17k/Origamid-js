// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.querySelector('.btnCep');
const resultadoCep = document.querySelector('.resultadoCep')
btnCep.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();
    const cepp = inputCep.value
    buscaCep(cepp)
    console.log(event)
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.text())
    .then(body =>{
        resultadoCep.innerText = body;
    })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc');

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(btcJson => {
        
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
    })
}
//setInterval(fetchBtc, 1000)
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.querySelector('.proximo');
const pPiada =  document.querySelector('.piada')

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random').then(r => r.json()).then(piada => {
        pPiada.innerHTML = piada.value;
    })
}
btnPiada.addEventListener('click', puxarPiada)
puxarPiada();