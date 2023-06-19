let corpo = document.body
let botao = document.getElementById('botao')

function ModoDark()
{
    corpo.classList.toggle('dark-mode')
    botao.innerHTML = 'Modo-Light'
}