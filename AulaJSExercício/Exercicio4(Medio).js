const user = prompt("Digite seu usuario:")
const senha = prompt("Digite sua senha:")

if( user === "admin" && senha === "1234")
{
    console.log("Login bem-sucedido")
    alert("Login bem-sucedido")
}
else
{
    console.log("Acesso negado")
    alert("Acesso negado")
}