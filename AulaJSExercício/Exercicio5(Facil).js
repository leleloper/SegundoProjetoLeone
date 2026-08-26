const idade = Number(prompt("Digite a idade"))

if(idade >= 0 && idade <= 12)
{
    console.log("Criança")
    alert("Criança")
}
else if(idade >= 13 && idade <= 17)
{
    console.log("Adolescente")
    alert("Adolescente")
}
else if(idade >= 18)
{
    console.log("Adulto")
    alert("Adulto")
}
else if(idade <0)
{
    console.log("Inválido TU N EXISTE")
    alert("Inválido")
}