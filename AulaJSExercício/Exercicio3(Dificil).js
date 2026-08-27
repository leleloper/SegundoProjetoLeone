let peso = Number (prompt("Peso (Kg)"))
let altura = Number (prompt("Altura (metro)"))

let imc = peso / (altura ** 2)

if(imc <=18)
{
    console.log(imc.toFixed(2) + "baixo")
    alert(imc.toFixed(2) + "baixo") //popup
}
else if(imc >18 && imc <=24)
{
     console.log(imc.toFixed(2) + "normal")
     alert(imc.toFixed(2) + "normal") //popup
}
else 
{
    console.log(imc.toFixed(2) + "sobrepeso")
    alert(imc.toFixed(2) + "sobrepeso") //popup
}
//obesidade é uma consequência do sobrepeso