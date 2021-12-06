var toggle = document.querySelector(`#toggle`)

var tray = document.querySelector(`.tray`)

var tabs = document.querySelectorAll(`nav a`)

var p = document.querySelector(`#ed p`)

toggle.addEventListener(`click`, (e)=>{
    e.preventDefault();
    tray.classList.toggle(`closed`)

})

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, selectTab);
}

function selectTab(e)
{
    for(let i = 0; i<tabs.length; i++)
    {
        tabs[i].style.backgroundColor =`#373737`;
    }
    e.target.style.backgroundColor= `#161616`;
    p.innerHTML = `<a href=#>Words</a> >>
                   <a href=#>Words</a> >>
                   <a href=#>Words</a> >>
                   <a href=#>Tab ${Array.from(tabs).indexOf(e.target)+1}</a>`

}   