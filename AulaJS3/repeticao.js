//While (enquanto)
//Permite criar loops que são executados zero ou mais vezes
//Enquanto a condição for TRUE, executa o bloco de código!

/*
while(false)
{
    console.log("Ao infinito e Além!")
}
*/

//--------------------------------//---------------------------//

//Contador que exibe na tela de 1 a 5

//contadoor inicia no 1
/*let contador = 1

//enquanto o meu contador por menor ou igual a 5, continue.

while ( contador <= 5)
{
    console.log("Contagem: " + contador)

                  // 1 + 1 =2
    contador = (contador + 1) //contador recebe ele + 1

    contador++ //contador recebe ele + 1

    //contador = 2
}
*/

//--------------------------------//---------------------------//

// CONTAGEM REGRESSIVA

/*
let tempo = 10

while(tempo > 0)
{
    console.log(tempo)

    //tempo = tempo -1 //tempo sub - 1
    
    tempo-- //tempo sub - 1
}

console.log("Código acabou.")
*/

//--------------------------------//---------------------------//

//Validação senha

/*
const senhaCorreta = "148supersenha"
let tentativa = ""

while(tentativa != senhaCorreta)
{
    tentativa = prompt("Digiteva senha:")

    if(tentativa === senhaCorreta)
    {
        console.log("✅ Senha correta! Acesso liberado.")
    }
    else
    {
        console.log("❌Senha incorreta. Tentativa novamente")
    }
}
*/

//--------------------------------//---------------------------//

/*
let contador = Number(prompt("Digite um numero"))

while ( contador <= 100)
{
    console.log("Contagem: " + contador)
                  
    contador = (contador + 1) 

}
*/

//--------------------------------//---------------------------//

//DO - WHILE Permite criar loop que são executados uma ou mais vezes

/*
let repetir = false

//FAÇA
do
{
    console.log("Só uma vez.")
}
while(repetir)//ENQUANTO a condição for TRUE
*/

//--------------------------------//---------------------------//

//WHILE vs Do...WHILE

/*
let num = 10;

//analista e o bloco de codigo vai ser executado
while(num < 5)
{
    console.log("Isso NÃO vai aparecer")
}

//executa o bloco de depois analisa se vai repetir
do
{
    console.log("Isso VAI aparecer pelo menos 1x")
}
while(num <5)
*/

//--------------------------------//---------------------------//

//ADIVINHE O NUMERO

//1 A 10
const numeroSecreto = Math.floor(Math.random()*10) +1;

let palpite;
let tentativas = 0;

console.log("Advinhe o numero entre 1 e 10")

do
{
   // alert(Math.floor(Math.random()*10) +1)
   
    palpite = Number(prompt("Seu palpite"))
    tentativas++

    if(Number.isNaN(palpite))
    {
        alert("Digite um número válido")
    }

    else if(palpite == numeroSecreto)
    {
        console.log("ACERTOU!!!" +"Foram "+tentativas+" tentativas" )
        alert("ACERTOU!!!" +"Foram "+tentativas+" tentativas")
    }
    else if(palpite < numeroSecreto)
    {
        console.log("Muito alto! Tente um numero menor")
        alert("Muito alto! Tente um numero menor")
    }
    else if(palpite > numeroSecreto)
    {
        console.log("Muito baixo! Tente um numero maior")
        alert("Muito baixo! Tente um numero maior")
    }
}
while(palpite != numeroSecreto)
