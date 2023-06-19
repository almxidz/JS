let eu = 
{
    Nome: "Maria",
    Idade: 17,
    Escola: "Adventista"
}

let Aluno =
{
    PrimeiroNome: 'Eduardo',
    SegundoNome: 'Ximenes',
    Idade: 18,
    Altura: 1.85,
    Peso: 90,
    FullName: function()
    {
        return this.PrimeiroNome + " " + this.SegundoNome
    }
}

let a = ["a", 2, "b"]
const tarefas =
[
{
    id: 1,
    texto: 'Levar o lixo para fora',
    completado: true, 
},
{
    id: 2,
    texto: 'Fazer miojo',
    completado: true
},
{
    id: 3,
    texto: 'Dormir',
    completado: false,
}
]