//Ex1

/*
let horas = 1.2

function calcularValor ()
{
    let preco = Math.ceil(horas)
    return preco *6
}

console.log(calcularValor(1))
console.log(calcularValor())
*/

//---------------------------------------------//--------------------------------------------------//

//Ex2

/*
let horas = 1.2

function calcularValor(horas, tipo) 
{
    if (tipo == 'carro') 
    {
        let preco = Math.ceil(horas)
        return preco * 6
    } 
    else if (tipo == 'moto') 
    {
        let preco = Math.ceil(horas)
        return preco * 3
    }
} 

console.log(calcularValor(1, 'carro'))
console.log(calcularValor(1, 'moto'))
console.log(calcularValor(3, 'moto'))
*/

//---------------------------------------------//--------------------------------------------------//

//Ex3

/*
 function calcularValor(horas, tipo) 
 {
    if (horas <= 0.25) 
    {
        return 0
    }

    let valorPrimeiraHora = 0
    let valorHoraAdd = 0

    if (tipo == 'carro') 
    {
        valorPrimeiraHora = 8.00
        valorHoraAdd = 4.00
    } 
    else if (tipo == 'moto')
    {
        valorPrimeiraHora = 4.00
        valorHoraAdd = 2.00
    }

    const horascobradas = Math.ceil(horas)
    let valorTotal = valorPrimeiraHora

    if (horascobradas > 1) 
    {
        const horasAdicionais = horascobradas - 1
        valorTotal += (horasAdicionais * valorHoraAdd)
    }
    
    return valorTotal;
}

console.log(calcularValor(0.2, 'carro'))
console.log(calcularValor(1, 'carro'))
console.log(calcularValor(1.5, 'carro'))
console.log(calcularValor(3, 'moto'))
*/

//---------------------------------------------//--------------------------------------------------//

//Ex4

/*
function calcularValor(horasEntrada, horasSaida, tipo) 
{
    let horas = horasSaida - horasEntrada;
    if (horas < 0) 
    {
        horas += 24;
    }

    let valorTotal = 0;
    let horaAtual = horasEntrada;
    let precoBaseHora = tipo === 'carro' ? 4 : 2;

    for (let i = 0; i < horas; i++) 
    {
        if (horaAtual >= 22 || horaAtual < 6) 
        {
            valorTotal += precoBaseHora * 2;
        } 
        else 
        {
            valorTotal += precoBaseHora;
        }
        
        horaAtual = (horaAtual + 1) % 24;
    }

    if (tipo === 'carro') 
    {
        valorTotal = Math.min(valorTotal, 40);
    } 
    else if (tipo === 'moto') 
    {
        valorTotal = Math.min(valorTotal, 20);
    }

    return valorTotal;
}

console.log(calcularValor(21, 23, 'carro')); 
console.log(calcularValor(23, 5, 'carro'));  
console.log(calcularValor(10, 12, 'moto'));
*/  

//---------------------------------------------//--------------------------------------------------//

//Ex5

/*
const veiculos = [
    { placa: 'ABC1234', tipo: 'carro', horaEntrada: 8, horaSaida: 11 },
    { placa: 'XYZ9876', tipo: 'moto', horaEntrada: 23, horaSaida: 2 },
    { placa: 'JJJ0001', tipo: 'carro', horaEntrada: 9, horaSaida: 20 },
];

function processarRelatorio(lista) {
    let faturamentoTotal = 0;
    let totalCarros = 0;
    let totalMotos = 0;
    let maiorValor = 0;
    let veiculoMaisCaro = null;
    let textoRecibo = "--- Recibus ---\n";
    for (let i = 0; i < lista.length; i++) 
    {
        let veiculo = lista[i];
        let horasEstacionado = 0;

        if (veiculo.horaSaida >= veiculo.horaEntrada) 
        {
            horasEstacionado = veiculo.horaSaida - veiculo.horaEntrada;
        } 
        else 
        {
            horasEstacionado = (24 - veiculo.horaEntrada) + veiculo.horaSaida;
        }

        let valorCobrado = 0;

        if (veiculo.tipo === 'carro') 
        {
            valorCobrado = horasEstacionado * 10;
            totalCarros++;
        }
        else if (veiculo.tipo === 'moto') 
        {
            valorCobrado = horasEstacionado * 5;
            totalMotos++;
        }

        faturamentoTotal += valorCobrado;

        if (valorCobrado > maiorValor) 
        {
            maiorValor = valorCobrado;
            veiculoMaisCaro = veiculo;
        }

        textoRecibo += `Placa: ${veiculo.placa} | Tipo: ${veiculo.tipo} | Tempo: ${horasEstacionado}h | Valor: R$ ${valorCobrado.toFixed(2)}\n`;
    }

    console.log("=== relatorio do dia ===");
    console.log(`Faturamento Total: R$ ${faturamentoTotal.toFixed(2)}`);
    console.log(`Total de Carros: ${totalCarros}`);
    console.log(`Total de Motos: ${totalMotos}`);
    console.log(`veiculo que mais pagou: Placa ${veiculoMaisCaro.placa} (${veiculoMaisCaro.tipo}) - R$ ${maiorValor.toFixed(2)}`);
    console.log("\n" + textoRecibo);
}

processarRelatorio(veiculos);
*/

