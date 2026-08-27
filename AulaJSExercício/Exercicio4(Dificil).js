const ano = Number(prompt("Digite um ano"))

if((ano % 4 ===0 && ano % 100 !== 0) || (ano % 400 ==0))
{
    console.log(ano + "É um ano bissexto")
    alert(ano +"É um ano bissexto")
}
else
{
    console.log(ano + "Não é um ano bissexto")
    alert(ano + "Não é um ano bissexto")
}
// % -> resto da divisao depois da vírgula

