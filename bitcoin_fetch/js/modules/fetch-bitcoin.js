// Usando Promise
export default  function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  })
}

 // Outra forma de fazer com async await
 
//  export default async function initFetchBitcoin(){
//   try{
//     const  bitcoin = await fetch('https://blockchain.info/ticker');
//     const bitcoinJson = await bitcoin.json();
//     const btcPreco = document.querySelector('.btc-preco');
//     btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
//    }
//     catch{
//       console.log(Error(erro))
//     }
// }