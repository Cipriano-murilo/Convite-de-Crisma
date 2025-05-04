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

function enviarMensagemWhatsApp() {
  const numero = '5527992520209';
  const mensagem = "Siiim! 😍 Eu aceito ser sua madrinha! 💖";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');

  setTimeout(() => {
    window.location.href = 'fotos.html';
  }, 1000);
}
