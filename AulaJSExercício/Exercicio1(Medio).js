const numero1 = Number(prompt("Digite o primeiro numero"))
const simbol = prompt("Digite o simbolo da operação")
const numero2 = Number(prompt("Digite o segundo numero"))

if(simbol === "+")
{
    resultado = numero1 + numero2;
    console.log(resultado)
    alert(resultado)
}

else if(simbol === "-")
{
    resultado = numero1 - numero2;
    console.log(resultado)
    alert(resultado)
}
else if(simbol === "*")
{
    resultado = numero1 * numero2;
    console.log(resultado)
    alert(resultado)
}
else if(simbol === "/")
{
    if(numero2 ===0)
    {
        console.log("Não é possível realizar o resultado")
    }
    resultado = numero1 / numero2;
    console.log(resultado)
    alert(resultado)
}

else 
{
    alert("Invalido!")
}

