const number = Number(prompt("Digite uma taboada: "))

if(number <=0 || number >10 || Number.isNaN(number))
{
    console.log("❌ valor inválido")
}
else
{
    for( i = 1; i <=10; i++)
    {
        result = number * i
        console.log(`${number} x ${i} = ${result}`)
    }
}

