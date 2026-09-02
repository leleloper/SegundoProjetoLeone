let numero = Number(prompt("Digite um número inteiro"))

let soma = 0;

if(numero<0)
{
    console.log("❌ valor inválido")
    alert("❌ valor inválido")
}
else
{
    while (numero > 0)
    {
        soma += numero % 10;
        numero = Math.floor(numero/ 10);
    }
    console.log(soma);
}