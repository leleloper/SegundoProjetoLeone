const nota = Number(prompt("Digite uma nota de 0 a 100"))

if(nota <0)
{
    console.log("Valor Inválido")
    alert("Valor Inválido")
}
else if(nota >=90 && nota <=100)
{
    console.log("Nota A")
    alert("Nota A")
}
else if(nota >=80 && nota <=89)
{
    console.log("Nota B")
    alert("Nota B")
}
else if(nota >=70 && nota <=79)
{
    console.log("Nota C")
    alert("Nota C")
}
else if(nota >=60 && nota <=69)
{
    console.log("Nota D")
    alert("Nota D")
}
else if(nota <60)
{
    console.log("Nota F")
    alert("Nota F")
}
else if(nota >100)
{
    console.log("Valor Inválido")
    alert("Valor Inválido")
}