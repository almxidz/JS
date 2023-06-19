function Apertar()
{
let input, ul, li, a
input = document.getElementById('myInput')
ul = document.getElementById('myUL')
li = ul.getElementsByTagName('li')
filtro = input.value.toUpperCase();

for(i = 0; i <li.length; i++)
{
    a = li[i].getElementsByTagName('a')[0]
    if(a.innerHTML.toUpperCase().indexOf(filtro) > -1)
    {
        li[i].style.display = '';
    }
    else
    {
        li[i].style.display = 'none'
    }
}
}