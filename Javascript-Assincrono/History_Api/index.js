/*
    History API

        É possível acessar o histórico de acesso do browser em uma sessão específica através do window.history.
        O objeto history possui diferentes métodos e propriedades

        window.history;
        window.history.back(); // vai para a anterior
        window.history.forward(); // vai para a próxima
*/

//console.log(window.history.pushState(null, null, 'oi.html')) //volta para a primeira página 

/*
    pushState()

        A parte interessante de manipularmos o history é que podemos modificar o histórico e
         adicionar um novo item. window.history.pushState(obj, title, url).

*/

        // Em obj podemos enviar um objeto com dados
        // mas o seu uso é restrito por isso geralmente utilizamos
        // null. O title ainda é ignorado por alguns browsers, também
        // utilizamos null nele. O url que é parte importante.

        window.history.pushState(null, null, 'sobre.html');

/*
    popstate

        O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma 
    função toda vez que o usuário clicar no botão de voltar ou próximo.
*/
    window.addEventListener('popstate', () => {
        fetchPage(window.location.pathname);
    });
/*
    Fetch e History

        Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a
         history api conseguimos simular uma navegação real entre páginas, sem a necessidade de
          recarregamento da mesma.
*/
    function handleClick(event){
        event.preventDefault();
        fetchPage(event.target.href)
    }
   async function fetchPage(url){
       const response = await fetch(url)
       const responseText = await response.text();
       replaceContent(responseText)
    }

    function replaceContent(newText){
        const newHtml = document.createElement('div')
        newHtml.innerHTML = newText;
        const oldContent = document.querySelector('.content');
        const newContent = newHtml.querySelector('.content');

        oldContent.innerHTML = newContent.innerHTML;
        console.log(newHtml)
    }

   const links =  document.querySelectorAll('a');

   links.forEach(link =>{
       link.addEventListener('click', handleClick)
   })