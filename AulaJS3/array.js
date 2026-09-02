//Array
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

//--------------------------------------------//-------------------------------------------//

//Vetor - guarda valores
//posições (indice) -> 0
//for of -> percorrer toda a lista.

//Objeto - São como "fichas" com informações
// - Cada informação  tem um nome (CHAVE) e um VALOR.

//PESSOA - ( Nome, Idade, Email, Genero, CPF)

const pessoa = {
    nome: "Eric",
    idade: 33,
    email: "email@teste.com",
    genero: "M",
    CPF: "739.686.460-70"
}

console.log(pessoa) //acessar todo o objeto
console.log(pessoa.nome) //Eric
console.log(pessoa["idade"]) //33

//FOR IN

for(const chave in pessoa)
{
     //chave é o NOME da prioridade
     //objeto[chave] é o valor

     console.log(pessoa[chave]) 
     /*para cada vez que o for percorrer, ele vai pegar a 
       Chave atual e retornar o VALOR que a chave representa */
}

//--------------------------------------------//-------------------------------------------//

//Objeto [Aluno] que guarde os dados de nome, matricula, curso e nota
const aluno = {
    //sempre chave e valor
    nome: "Ana",
    matricula: "202609021",
    curso: "JavaScript",
    nota: 9.5
}
console.log("Dados do Aluno\n")

for(const chave in aluno)
{
    const valor = aluno[chave]
    console.log("chave: " + chave + " valor: " + valor)
}

//--------------------------------------------//-------------------------------------------//

//LISTA DE PRODUTOS

//informação de produto, preço, quantidade.

const carrinho = [
    //objeto
    {produto: "Camiseta", preco: 49.90, quantdade: 2 },
    {produto: "Calça Jeans", preco: 150.90, quantdade: 1 },
    {produto: "Tenis", preco: 925.00, quantdade: 1 }
]

for (const itemDoMercado of carrinho)
{
    //retornar apeans o nome do produto e preço
    console.log(itemDoMercado.produto)
    console.log(itemDoMercado.preco)
}

// FOR IN -> Objetos | Retorna chaves / indice
// FOR OF -> Arrays, String | Retorna valores