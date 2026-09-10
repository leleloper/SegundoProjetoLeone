
//DOCUMENT   --> PAGINA INTEIRA DO MEU HTML 
// getElementByID -> procura pelo atributo id=""

// titulo-filme -> ID que queremos. 

//const elemento = document.getElementById('filme-principal')
//console.log(elemento)
//console.log(elemento.tagName)


function selecionarPorId() {

    const tituloFilme = document.getElementById('titulo-filme')

    console.log(tituloFilme)
    console.log(tituloFilme.tagName) //H3
    console.log(tituloFilme.textContent) //o conteudo do H3
    console.log(tituloFilme.id) //titulo-filme

    //adicionei uma classe no elemento.
    tituloFilme.classList.add('elemento-selecionado')

}

//getElementsByClassName -> retorna uma lista de todos os elementos existentes.


function selecionarPorClasse() {

    const elementos = document.getElementsByClassName('genero-acao')

    //elementos.length quantidade de elementos encontrados.
    console.log('Quantidade: ' + elementos.length)

    for (i = 0; i < elementos.length; i++) {

        console.log(elementos[i].textContent.trim())
        elementos[i].classList.add('elemento-selecionado')
    }
}

//QuerySelector -> retorna o PRIMEIRO elemento.

function selecionarPorQuery() {

    const elemento = document.querySelector('.filme-mini')
    console.log(elemento)
    elemento.classList.add('elemento-selecionado')
}

//querySelectorAll  --> 


function selecionarTodos() {

    const elementos = document.querySelectorAll('.filme-mini')

    //  => arrow function
    // el = elemento atual, indice = posição (0, 1, 2...)

    elementos.forEach((el, indice) => {
        console.log(indice, el.textContent.trim())
        el.classList.add('elemento-selecionado')
    }
    )
}


function mudarTexto() {

    //selecionar o element oque queremos mudar
    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = document.getElementById('input-busca').value

    console.log('Novo Teste', titulo.textContent)

}

function adicionarBadge() {
    
    //Criar o elemento
    // createElement('span')
    const badge = document.createElement('span')

    badge.className = 'badge'
    badge.textContent = '⭐ Em Alta'

    // Procura um elemento do HTML pelo ID
    const container = document.getElementById('badge-container')

    // Remove tudo que estiver dentro do container
    container.innerHTML = ''
    // Adiciona um elemento FILHO dentro de outro elemento
    container.appendChild(badge)
}

function mudarPoster(){

const poster = document.getElementById('poster-destaque')
const titulo = document.getElementById('titulo-destaque')


const opcoes = [
        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        }
    ];
    
    const sorteado = opcoes[Math.floor(Math.random()  * opcoes.length)];

    poster.src = sorteado.url
    poster.alt = sorteado.nome
    titulo.textContent = sorteado.nome
   
    console.log("Poster trocado para: " , sorteado.nome)

    poster.style.opacity ='0'
    poster.style.transition = 'opacity 0.3s';

    //() => funcao anonima

    setTimeout( () =>{

           //todo esse bloco de codigo sera executado apos 300ms
          poster.style.opacity ='1';
          poster.classList.add('poster-fade-in')
           
          //remover uma classe apos 600ms
          setTimeout( () =>  poster.classList.remove('poster-fade-in'), 600 )          


      },300     //300ms
    );
}


function lerInput(){

     const input =  document.getElementById('input-busca').value.trim()

  
     if(input === ''){
           alert(" ⚠️ Digite algo no campo! ")
           return; //interrompe a função
     }
    
    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = input

    titulo.classList.add('texto-animado')


}
function adicionarFilme(){
    const input = document.getElementById('input-filme').value.trim()
    if (input == ''){
        alert('digite o nome de um filme')
        return;//interrompe a função
    }
    const li = document.createElement('li')
    const span = document.createElement('span')
span.textContent = input//nome do filme
const btnRemover = document.createElement('button')
btnRemover.textContent = 'Remover'
li.appendChild(span)
li.appendChild(btnRemover)
const lista = document.getElementById('minha-lista')
lista.appendChild(li)
//BOTAO REMOVER
btnRemover.onclick = function(){
    this.parentElement.remove()
    
}
document.getElementById('input-filme').value=''

}
//addEventListener - Escuta os eventos da pagina
document.addEventListener('DOMContentLoaded', function(){
    const cardFavorito = document.getElementById('card-favorito')
    const statusFavorito = document.getElementById('status-favorito')
    //escutar p evento click da div cardFavorito
    cardFavorito.addEventListener('click', function(){
        statusFavorito.textContent = 'FAVORITADO!'
    })
    const cardDetalhes = document.getElementById('card-detalhes')
    const statusDetalhes = document.getElementById('status-detalhes')
    cardDetalhes.addEventListener('dblclick', function(){
        statusDetalhes.textContent = 'Carregando...'
        statusDetalhes.style.color="#ffd700"
        setTimeout (() => {
            statusDetalhes.textContent = 'Detalhes carregados'
            statusDetalhes.style.color = '#3fb950'
        }, 1000);
    })
    const inputFiltro = document.getElementById('input-filtro')
    if(inputFiltro){
        inputFiltro.addEventListener('input', function(){
            filtroFilmes(this.value)
        })
    }

}
)
const todosFilmes = [
    {
        nome: 'Stranger Things',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg'
    },
    {
        nome: 'Breaking Bad',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg'
    },
    {
        nome: 'The Witcher',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg'
    },
    {
        nome: 'La Casa de Papel',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg'
    },
    {
        nome: 'Round 6',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg'
    },
    {
        nome: 'Peaky Blinders',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg'
    },
    {
        nome: 'Wednesday',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg'
    },
    {
        nome: 'The Last of Us',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
    },
    {
        nome: 'Oppenheimer',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
    },
    {
        nome: 'Barbie',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'
    },
    {
        nome: 'Duna',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg'
    },
    {
        nome: 'Coringa',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
    },
    {
        nome: 'A Origem',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    },
    {
        nome: 'Interestelar',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
        nome: 'Parasita',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    },
    {
        nome: 'Vingadores: Ultimato',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
    }
];
function inicializarGaleria(){
    const galeria = document.getElementById('galeria-filmes')
    todosFilmes.forEach( function(filme){
        const card = document.createElement('div')
        card.className = 'card-galeria'
        card.dataset.name = filme.nome
        card.innerHTML = `
                            <img
                                src="${filme.img}"
                                alt="${filme.nome}"
                                onerror="this.style.background='#2a2a2a'"
                            >
                            <div class="card-nome">
                                ${filme.nome}
                            </div>
                            <div class="card-tipo">
                                ${filme.tipo}
                            </div>
               `; 
               galeria.appendChild(card)
    }

    )
}
inicializarGaleria()
function filtroFilmes(termoBusca){
    const termo = termoBusca.toLowerCase().trim()
    const cards = document.querySelectorAll('.card-galeria')
    let visiveis = 0
    cards.forEach( function(card){
        const nomeDoFilme = card.dataset.name.toLowerCase()
        const combina = termo === ''||nomeDoFilme.includes(termo);
        if(combina){
            card.classList.remove('oculto')
            visiveis++
        }
        else{
            card.classList.add('oculto')
        }
        const semResultado = document.getElementById('sem-resultado')
        if(semResultado){
            semResultado.style.display = visiveis === 0 ? "block" : 'none'
        }
        
    })

    }
