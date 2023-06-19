let números = document.getElementById("Números")
let resultado = document.getElementById("resultado")

function Apertar()
{
    switch(numeros.value)
    {
        case "1":
            resultado.innerHTML = "Domingo não é dia útil"
            break;
        case "2":
            resultado.innerHTML = "Segunda-feira é um dia útil"
            break;
        case "3":
            resultado.innerHTML = "Terça-feira é dia útil"
            break;
        case "4":
             resultado.innerHTML = "Quarta-feira é dia útil"
             break;
        case "5":
            resultado.innerHTML = "Quinta-feira é dia útil"
            break;
        case "6":
            resultado.innerHTML = "Sexta-feira é dia útil"
            break;
        case "7":
            resultado.innerHTML = "Sabádo não é dia útil"
            break;
        default:
            resultado.innerHTML = "Este dia da semana é inválido"
    }
}