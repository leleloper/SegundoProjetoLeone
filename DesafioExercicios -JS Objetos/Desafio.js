const produtos = [
    {nome:"Brabo Smokehouse", precounid: 50.90, quantidade:3},
    {nome:"McShake Morango 400ml", precounid: 25.50, quantidade:3},
    {nome:"McFritas Cheddar Bacon", precounid: 23.50 , quantidade:3},
    {nome:"Brinquedo Crocs Arcos Dourados & Sorriso McLanche Feliz Branco", precounid: 20.00 , quantidade:1},
]

let nomeitem = 0
let MaiorValor = 0
let total = 0
for(const pedido of produtos)
{
    
    preco = pedido.precounid * pedido.quantidade;

    console.log("Nome: "+pedido.nome)
    console.log("Preco Unid.: "+ pedido.precounid)
    console.log("Quantidade: "+pedido.quantidade)
    console.log("Preco: "+ preco)
    console.log("\n")

    total = total + preco

   if(preco > MaiorValor)
   {
     MaiorValor=preco
     nomeitem = pedido.nome
   }
}
console.log("Total do pedido: " + total)
console.log("Maior valor total por item:  " + MaiorValo )
console.log("Item mais carO: " + nomeitem)