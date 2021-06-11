// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  let x = 0;
  let z = 0;
 transacoes.forEach((item)=>{
         let i = item.valor.replace('R$ ','')
        item.descricao.slice(0,4) === 'Taxa'? x+=parseInt(i):z+=parseInt(i);  
 })
 console.log(`A soma dos valores de Tava é ${x} e o valor de recebimento é ${z}`);
  
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const transportesA = transportes.split(';')
  console.log(transportesA)
  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

   html = html.split('span').join('a')
   

  
  // Retorne o último caracter da frase
  const frasee = 'Melhor do ano!';
    let nn = frasee.slice(-1)
  
  // Retorne o total de taxas
  const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  let dd = 0;
  transacoes1.forEach((item)=>{
   item = item.trim().toLowerCase();
   if(item.slice(0,4) === 'taxa'){
       dd++;
       
   }
   
    
  })
  console.log(dd)
  
