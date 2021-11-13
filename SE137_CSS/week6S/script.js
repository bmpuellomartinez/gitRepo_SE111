var toggle = document.querySelector('#toggle')
var tray = document.querySelector('.tray')
var tabs = document.querySelectorAll('nav a')

var p = document.querySelector('#editor p')


toggle.addEventListener('click', (e) =>{
    e.preventDefault();
    tray.classList.toggle('Closed')
})

for(let i=0; i< tabs.length; i++){
    tabs[i].addEventListener('click', selectTab);
}
function selectTab(e)
{
    for(let i=0; i < tabs.length; i++)
    {
        tabs[i].style.backgroundColor = 'crimson';
    }
    e.target.style.backgroundColor= 'yellow';
    p.innerHTML = 
                '<a href =#>Words</a> >>
                <a href =#>Words</a> >>
                <a href =#>Words</a> >>
                <a href=#>Tab ${tabs.indexOF(e.target)+1}</a>'
                  
}



