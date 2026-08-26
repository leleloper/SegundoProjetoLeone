const nmb1 = Number(prompt("Digite o primerio numero"))
const nmb2 = Number(prompt("Digite o segundo numero"))
const nmb3 = Number(prompt("Digite o terceiro numero"))

if(nmb1>nmb2 && nmb1>nmb3)
{
    console.log(nmb1 + "é o maior");
    alert(nmb1 + "é o maior")  
}
else if(nmb3>nmb2 && nmb3>nmb1)
{
    console.log(nmb3 + "é o maior");
    alert(nmb3 + "é o maior") 
}
else if(nmb2>nmb3 && nmb2>nmb1)
{
    console.log(nmb2 + "é o maior");
    alert(nmb2 + "é o maior") 
}
