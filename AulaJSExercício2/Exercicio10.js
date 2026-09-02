for(let numero = 1; numero <= 1000; numero++)
{
    let soma = 0

    for(let divisor = 1; divisor < numero; divisor++)
    {
        if(numero % divisor === 0)
        {
            soma +=divisor;
        }
    }
    
    if(soma === numero)
    {
        console.log(numero)
    }
}

