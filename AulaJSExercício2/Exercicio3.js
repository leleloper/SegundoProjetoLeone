const vezes = Number(prompt("Digite um numero inteiro"))

if(vezes <=0)
{
    console.log("❌ valor invalido")
}
else
{
    let result=0
    for(let i = 1; i <=vezes; i++)
    { 
        result = result+i
        console.log(result)
    }
}
