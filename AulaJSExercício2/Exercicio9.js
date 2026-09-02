//versao do aluno

/*
for( let i = 1; i <= 5; i++)
{
    const number = prompt("Digite um número inteiro positivo")
    const reversednumber = number.split('').reverse().join('')
    console.log(`O número ${number} invertido é ${reversednumber}.`)
}
*/

//-------------------------------------//--------------------------------------//

//versao do Prof
let numero = Number(prompt("Digite um número"));

let invertido = 0

while(numero > 0)
{
    let digito = numero % 10
    invertido = invertido * 10 + digito
    numero = Math.floor(numero /10 )
}

console.log("Numero invertido: " + invertido)