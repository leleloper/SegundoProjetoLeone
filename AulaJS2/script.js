//let nome = prompt("Digite seu nome")

//console.log("Olá " + nome + "!")

// == compara valor
// === compara valor e tipo
// = atribuição

//-------------------------------//---------------------------//

/* MÉDIA 
let number1 = Number (prompt("Primeiro numero"))
let number2 = Number (prompt("Segundo numero"))

let media = numero1 + numero2 / 2 //divisao por

console.log(media)
*/

//-------------------------------//---------------------------//

/*IMC
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
*/

//-------------------------------//---------------------------//

// && - Condição: todas as condições devem ser TRUE
// || - se alguma condição for certa, vai entrar no IF
// ! - siginifica NÃO. Ele inverte o valor do booleano.

//-------------------------------//---------------------------//

//console.log(!true) //false

let idade = 15

//Se NAO idade maior ou igual a 18
if(!(idade >=18))
{
    console.log("Não é maior de idade")
}
