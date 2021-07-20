import Countdown from "./countdown.js";

const tempoParaonatal = new Countdown('25 December 2021 23:59 GMT-0300');
console.log(tempoParaonatal.total)
const temporal = tempoParaonatal.total;

function contadorTempo(tempo){
    const selecionar = document.querySelector(tempo);
    setInterval(()=>{
        selecionar.innerHTML = `${tempoParaonatal.total.days} Dias ${tempoParaonatal.total.minutes} Minutos e ${tempoParaonatal.total.segunds} segundos`
    },1000)
}
contadorTempo('.tempoH1')

