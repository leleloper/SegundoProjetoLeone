//array
//um array é um tipo de dados que serve para armazenar valor
//seqeuncialmente em forma de lista

//itens começam do numero zero

const numeros = [ 1,2,3,4,5 ]
const nomes = ["Ana", "Caio", "Lucas", "Eric"]

//na minha lista de numeros
//euquero a posição 0
console.log(numeros[0])
console.log(nomes[0])

//--------------------------------------------//-------------------------------------------//

//Lenght
//É uma prioridade para obter o comprimento de uma array

console.log(nomes.length)


//vamos percorrer toda a lista
//e colocar no console cada item

for(let i = 0; i < nomes.length; i++)
{
    console.log(nomes[i])
}

//--------------------------------------------//-------------------------------------------//

//For of
const frutas = ["Maçã", "Laranja", "Uva", "Eric"]

for(const fruta of frutas)
{
    console.log(fruta)
}

//--------------------------------------------//-------------------------------------------//

//Faça a soma de todos os numeros de um array

const listaNumeros = [10,25,8,42,15,7]

let soma = 0;

//of listaNumeros - Percorra toda a lista!

for(const numero of listaNumeros)
{
    soma += numero
    //mesmo que soma = soma + numero
}

console.log("Numero " , listaNumeros)
console.log("Soma " , soma)

//--------------------------------------------//-------------------------------------------//

const ListaNota = [7.5, 9.0, 6.5, 8.8, 10.0, 5.5]

let maiorNota = ListaNota[0]

for(const nota of ListaNota)
{
  if(nota > maiorNota)
    maiorNota = nota
}
console.log("Maior nota: " + maiorNota)