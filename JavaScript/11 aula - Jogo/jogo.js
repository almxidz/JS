let NomedoJogador;
let resposta;

NomedoJogador = document.getElementById("NomedoJogador")
resposta = document.getElementById("resposta");

function EnviarNome()
{
    if(NomedoJogador.value == "")
    {
        alert("Insira um nome")
    }
    else
    {
    resposta.innerHTML = "Olá, " + NomedoJogador.value + ". Vamos jogar!"
    }
}