console.log('começo!')

function soma(valorStrings) {
  const valorDeVerdade = parseInt(valorStrings)
  return valorDeVerdade + 1;
}

function subtracao(valorStrings) {
  const valorDeVerdade = parseInt(valorStrings)
  return valorDeVerdade - 1;
}

function iniciaApp() {
  console.log('PEGA BOTOES')
  const botaoSoma = document.getElementById('bota');
  const botaoTira = document.getElementById('tira');
  console.log('PEGUEI BOTOES BOTOES: ', botaoSoma, botaoTira);

  console.log('PEGA MOSTRADOR')
  const contador = document.getElementById('mostrador-placar');
  console.log('PEGUEI BOTOES BOTOES: ', botaoSoma, botaoTira)

  botaoSoma.addEventListener('click', (evento) => {
    console.log('CLICK NO SOMA')

    contador.innerHTML = soma(contador.innerHTML);
  })

  botaoTira.addEventListener('click', function tiraClick(evento) {
    console.log('CLICK NO TIRA')

    contador.innerHTML = subtracao(contador.innerHTML);
  })

}

console.log('vou invocar a funçao!')
iniciaApp()
console.log('sucesso!')