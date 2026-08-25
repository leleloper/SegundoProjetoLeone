// Linguagem Interpretada
//Node.js

//Tipagem Fraca, oq vc põe ele subistitui, n importa o tipo

/*
let minhaVariavel =  10;

minhaVariavel = "Olá Mundo"

minhaVariavel = true;
*/

//-------------------------------------//-----------------------------//

/*
let numero = 10;
let texto = "20";
let resultado = numero + texto;
console.log(resultado)

//resultado = 1020
*/

//-------------------------------------//-----------------------------//

/*
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("oi"));
/*

//-------------------------------------//-----------------------------//

/*
Condicionais (if, else,operadores lógicos)
const chovendo = true;
const solApareceu = false;

console.log(typeof chovendo);
console.log(solApareceu);
console.log(chovendo);
*/

//-------------------------------------//-----------------------------//

/*
const idade = 20;
if(idade >= 20)
{
    console.log("Maior de idade!")
}
else
{
    console.log("Menor de idade!")
}
*/

//-------------------------------------//-----------------------------//

/*
const idade = 15;
if(idade >= 18)
{
    console.log("Você é maior de idade!")
}
else
{
    console.log("Você é menor de idade!")
}
*/

//-------------------------------------//-----------------------------//

/*
const idade = Number(prompt("Digite sua idade:"))
if(idade >= 18)
{
    console.log("Você pode dirigir!")
}
else
{
    console.log("Você ainda não pode dirigir!")
}
*/

//-------------------------------------//-----------------------------//

/*
const idade = 20;
const temDocumento = true;
const estaLista = true;

if (idade >= 18 && temDocumento && estaLista)
{
    console.log("Pode entrar!")
}
else
{
    console.log("Acesso Negado")
}
*/

//-------------------------------------//-----------------------------//

/*
const temDinheiro = false;
const temCartao  = true;
const temPix = false;

if(temDinheiro || temCartao || temPix)
{
    console.log(`Pode pagar`)
}
else
{
    console.log(`Não pode pagar`)
}
*/

//-------------------------------------//-----------------------------//

/*
const usuario = "admin";
const senha = 1234;

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta))
{
    console.log(`Acesso Liberado!`);
}
else
{
    console.log(`Acesso Negado!`);
}

              //⬇️OU⬆️

if((ehAdmin || ehGerente) && senhaCorreta)
{

}
else
{

}
*/

//-------------------------------------//-----------------------------//

/*
const usuario = prompt("Usuário:");
const senha = prompt("Senha:");

const acessoAdmin = (usuario === "admin" && senha === "1234");
const acessoUser = (usuario === "user" && senha === "senha1234");

if(acessoAdmin || acessoUser)
{
    console.log("Acesso liberado!")
}
else
{
    console.log("Acesso negado!")
}
*/

//-------------------------------------//-----------------------------//

/*
const nota = 75;

if(nota >=80)
{
    console.log("Aprovado!");
}
else if(nota >=60)
{
    console.log("Recuperação!");
}
else
{
    console.log("Reprovado!");
}
*/

//-------------------------------------//-----------------------------//

const temp = prompt("Temperatura em °C:");

if(temp <=0 )
{
    console.log("Frio absoluto 🥶");
}
else if(temp >=0 && temp <=15 )
{
    console.log("Frio🤒");
}
else if(temp >=16 && temp <=25)
{
    console.log("Agrádavel😊");
}
else if(temp >=26 && temp <=35)
{
    console.log("Quente🥵");
}
else if(temp >=35 )
{
    console.log("Inferno😈");
}