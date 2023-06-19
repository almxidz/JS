var P1 = document.getElementById("p1");
var P2 = document.getElementById("p2");
var P3 = document.getElementById("p3");
var P4 = document.getElementById("p4");
var Resultado = document.getElementById("Resultado");
var média;

function Média(){
    p1.value;
    p2.value;
    p3.value;
    p4.value;
    média = (parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value) + parseInt(p4.value) ) / 4;
    Resultado.innerHTML = média;
}