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
  