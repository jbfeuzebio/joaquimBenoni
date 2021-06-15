const botaoMenu = document.getElementById('botaoMenu')


function deslizarMenu(event){
    if (event.type === 'touchstart')event.preventDefault()
    const navBar = document.getElementById('navBar')
    navBar.classList.toggle('navAtiva')
}

botaoMenu.addEventListener('click', deslizarMenu)
botaoMenu.addEventListener('touchstart', deslizarMenu)