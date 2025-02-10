const hamburger=document.getElementById('hamburger')
const navitems=document.getElementById('nav-items')
hamburger.addEventListener('click',()=>{
    navitems.classList.toggle('nav-items-active')
});