//BREAK -> Parar de percorrer a lista

const numeros = [5,12,8,3,19,7,25]

const procurado = 19 

for(const num of numeros)
{
    console.log("Número analisado: " + num)
    if( num === procurado)
    {
        console.log("Encontrado")
        break; //para o loop imediatamente
    }
}

console.log("Loop terminou.")

//-------------------------------------------//------------------------------------------//

//CONTINUE -> PULAR ETAPA ATUAL

console.log("Números Impares de 1 a 10")

for( let numero = 1; numero <= 10; numero++)
{
    if(numero %2 == 0)
    {
        continue;
    }
    console.log(numero)
}

//-------------------------------------------//------------------------------------------//

//INVERTE A ORDEM
const nomes = ["Eric","Lailton","Rita","Miguel","Guilherme","Michael Jackson"]
nomes.reverse()
console.log(nomes)

//-------------------------------------------//------------------------------------------//