const NavBtn=document.querySelector(".menu-burger")
const Menu=document.querySelector("nav")
const Tel=document.querySelector(".header-tel")
NavBtn.onclick = function() {
    NavBtn.classList.toggle('menu-on')
    Menu.classList.toggle('nav-visible')
    Tel.classList.toggle('tel-off')
}

