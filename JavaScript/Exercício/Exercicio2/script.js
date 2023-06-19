let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let operacao = document.getElementById("operacao")
let soma;
let subtracao;
let multiplicacao;
let divisao;
let resultado = document.getElementById("resultado")

function calcular()
{
    switch(operacao.value)
    {
        case "+":
            resultado.innerHTML = parseInt(numero1.value) + parseInt(numero2.value)
            break;
        case "-":
            resultado.innerHTML = parseInt(numero1.value) - parseInt(numero2.value)
            break;
        case "*":
            resultado.innerHTML = parseInt(numero1.value) * parseInt(numero2.value)
            break;
        case "/":
            resultado.innerHTML = parseInt(numero1.value) / parseInt(numero2.value)
            break;
        default:
            resultado.innerHTML = "Esta operação não consta no sistema"
    }
}