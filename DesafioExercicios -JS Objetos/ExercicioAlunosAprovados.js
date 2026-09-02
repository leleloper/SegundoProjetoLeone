const alunos = [
    {nome: "Eric", nota: 0 },
    {nome: "Davi 1", nota: 7 },
    {nome: "Davi 2", nota: 1.92 },
    {nome: "Luiz", nota: 1 },
]

for(const no of alunos)
{
    alunos[no]
    if(nota<7)
    {
        continue;
    }
    else
    {
        console.log(no)
    }
}