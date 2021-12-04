const titulo = document.querySelector('.title');

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';

  textoArray.forEach((letra, index) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * index)
  })
  
}

typeWriter(titulo);