let Html = document.getElementById("p1")
var Css = document.getElementById("p2")
var Js = document.getElementById("p3")
var Resultado = document.getElementById("Resultado")
var media;

function Média()
{
    p1.value;
    p2.value;
    p3.value;
    média = (parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value)) / 3
    Resultado.innerHTML = média;
}
