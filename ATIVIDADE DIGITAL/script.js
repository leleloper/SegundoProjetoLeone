//DOCUMENT --> PAGINA INTEIRA DO MEU HTML
//getElementByID -> procura pelo atributo id="a "

//titulo-filme -> ID que queremos.

/*const elemento = document.getElementById('filme-principal')

console.log(elemento)
console.log(elemento.tagName)*/

function selecionarPorId()
{
  const tituloFilme = document.getElementById('titulo-filme')

  console.log(tituloFilme)
  console.log(tituloFilme.tagName) //H3
  console.log(tituloFilme.textContent) //o conteudo do H3
  console.log(tituloFilme.id) //titulo-filme

  //adiciona uma classe no elemento
  tituloFilme.classList.add('elemento-selecionado')
}

function selecionarPorClasse()
{
  const elementos = document.getElementsByClassName('genero-acao')

  //elementos.length quantidade de elementos encontrados
  console.log('Quantidade: ' + elementos.length)

  for(let i = 0; i < elementos.length; i++)
  {
    console.log(elementos[i].textContent.trim())
    elementos[i].classList.add('elemento-selecionado')
  }
}

//QuerySelector -> retorna o Primeiro elemento.

function selecionarPorQuery()
{
  const elemento = document.querySelector('.filme-mini')
  console.log(elemento)

  elemento.classList.add('elemento-selecionado')
}

//querySelectorAll ->

function selecionarTodos()
{
  const elementos = document.querySelectorAll('.filme-mini')

  // => arrow function
  // el = elemento atual, indice = posição (0, 1, 2...)

  elementos.forEach( (el, indice) => {
      console.log(indice, el.textContent.trim())
      el.classList.add('elemento-selecionado')
    }
  )
}

function mudarTexto()
{
  //selecionar o element oque queremos mudar
  const titulo = document.getElementById('titulo-destaque')

  titulo.textContent = document.getElementById('input-busca').value
  console.log('Novo Teste', titulo.textContent)

}

function adicionarBadge()
{
  const badge = document.createElement('span')

  badge.className = 'badge'
  badge.textContent = '⭐ Em Alta'

  //Procura um elemento do HTML pelo ID
  const container = document.getElementById('badge-container')

  //Remove tudo que estiver dentro do container
  container.innerHTML = ''

  //Adiciona um elemento FILHO dentro de outro elemento
  container.appendChild(badge)
}

function mudarPoster()
{
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

  const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

  poster.src = sorteado.url
  poster.alt = sorteado.nome
  titulo.textContent = sorteado.nome

  console.log("Poster trocado para: " , sorteado.nome)

  poster.style.opacity = '0';
  poster.style.transition = 'opacity 0.3s';

  //() => função anonima

  setTimeout( () => {
    
    //todo esse bloco de codigo sera executado apos 300ms
    poster.style.opacity = '1'
    poster.classList.add('poster-fade-in')

      //remover uma classe apos 600ms
      setTimeout( () => poster.classList.remove('poster-fade-in'), 600)
    },300  //300ms
  );
}
  
function lerInput()
{
  const input = document.getElementById('input-busca').value.trim()

  if(input === '')
  {
    alert("⚠️ Digite algo no campo ! ")
    return; //para processo da função
  }

  const titulo = document.getElementById('titulo-destaque')

  titulo.textContent = input
  titulo.classList.add('texto-animado')
}
 