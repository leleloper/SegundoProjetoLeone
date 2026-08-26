const valor = Number(prompt("Digite o valor do produto"))
let valorPag 

if(valor >=100)
{
    valorPag = valor * 0.1
    valorPag = valor - valorPag

    console.log("O valor a ser pago é" + valorPag)
    alert("O valor a ser pago é" + valorPag)
}
else
{
    console.log("O valor a ser pago é" + valor)
    alert("O valor a ser pago é" + valor)
}