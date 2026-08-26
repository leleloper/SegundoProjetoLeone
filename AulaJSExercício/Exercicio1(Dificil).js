const l1 = Number(prompt("Digite a medida do lado 1"))
const l2 = Number(prompt("Digite a medida do lado 2"))
const l3 = Number(prompt("Digite a medida do lado 3"))

if(l1+l2>l3 || l1+l3>l2 || l2+l3>l1)
if(l1=l2=l3)
{
    console.log("Triângulo Equilatero")
    alert("Triângulo Equilatero")
}
else if(l1==l2 || l1==l3 || l2==l3)
{
    console.log("Triângulo Isôsceles")
    alert("Triângulo Isôsceles")
}
else
{
    console.log("Triângulo Escaleno")
    alert("Triângulo Escaleno")
}


//////////INCOMPLETO//////////////