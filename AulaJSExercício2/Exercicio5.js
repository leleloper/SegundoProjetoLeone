
const alvo = 4
let numb;

do
{
    numb = Number(prompt("Digite um numero:"))
    if(numb == alvo)
    {
        console.log("ACERTOU!!!")
        alert("ACERTOU!!!")
    }
    else if(numb > alvo)
    {
        console.log("Tente um numero menor")
        alert("Tente um numero menor")
    }
    else
    {
        console.log("Tente um numero maior")
        alert("Tente um numero maior")
    }
}while(numb != alvo)
