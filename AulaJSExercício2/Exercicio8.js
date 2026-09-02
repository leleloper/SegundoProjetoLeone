const numb = Number(prompt("Digite um número inteiro"))
let result = 1;
if(numb<0)
{
    console.log("❌ valor inválido")
    alert("❌ valor inválido")
}
else
{
    for( let i = 1; i <= numb; i++)
    {
        result = result * i
        console.log(result)
       
    }
}