const NavBtn=document.querySelector(".menu-burger")
const Menu=document.querySelector("nav")
NavBtn.onclick = function() {
    NavBtn.classList.toggle('menu-on')
    Menu.classList.toggle('nav-visible')
}

