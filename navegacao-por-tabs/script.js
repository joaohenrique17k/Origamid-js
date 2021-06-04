function initTabMav(){
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section')
    if(tabmenu.length && tabcontent.length){


    tabcontent[0].classList.add('ativo')
    function activetab(index){
        tabcontent.forEach(content =>{
            content.classList.remove('ativo')
        })
        tabcontent[index].classList.add('ativo')
    }
        tabmenu.forEach((item,index) =>{
            item.addEventListener('click',() =>{
                activetab(index)
            })
        })
    }
}
initTabMav();
function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    function active(i){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) =>{
        item.addEventListener('click',active);
    })
}
initAccordion();
function initScroll(){
const scrollSuave = document.querySelectorAll('.js-menu a[href^="#"]');
function scrollToSection(event){
    event.preventDefault();
    const hrf = event.currentTarget.getAttribute('href');
    const section = document.querySelector(hrf)
    const topo = section.offsetTop;
    /* forma alternativa
    window.scrollTo({
        top:topo,
        behavior: 'smooth'
    })*/
    section.scrollIntoView({
        behavior: 'smooth',
        block:'start',
    });
}
scrollSuave.forEach((link)=>{
    link.addEventListener('click',scrollToSection)
})}
initScroll();