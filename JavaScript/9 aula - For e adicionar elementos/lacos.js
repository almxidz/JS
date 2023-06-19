let x = document.getElementById("valorInicial");
let y = document.getElementById("valorFinal")

function Aperte(){
    while(x.value <= parseInt(y.value))
    {
        /*Criar elemento p*/
        let paragrafo = document.createElement("p")

        /*criação de texto*/
        let texto = document.createTextNode(x.value)

        /*adicionar texto no elemento*/
        paragrafo.appendChild(texto);

        /*adicionar o elemento body*/
        document.getElementById("contar").appendChild(paragrafo)

        console.log(x.value)
        x.value++ /*x = x + 1*/
    }
}