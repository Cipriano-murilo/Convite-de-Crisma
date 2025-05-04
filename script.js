const btnNao = document.getElementById('nao');

btnNao.addEventListener('mouseover', () => {
  const larguraJanela = window.innerWidth - btnNao.offsetWidth;
  const alturaJanela = window.innerHeight - btnNao.offsetHeight;

  const novaPosX = Math.floor(Math.random() * larguraJanela);
  const novaPosY = Math.floor(Math.random() * alturaJanela);

  btnNao.style.position = 'absolute';
  btnNao.style.left = novaPosX + 'px';
  btnNao.style.top = novaPosY + 'px';
});
