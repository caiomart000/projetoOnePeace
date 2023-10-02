const botao = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');

botao.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    desmarcarBotao();
    desmarcarPersonagem();
    botao.classList.add('selecionado');
    personagem[index].classList.add('selecionado');
  });
});

function desmarcarPersonagem() {
  const personagemSelecionado = document.querySelector(
    '.personagem.selecionado',
  );
  personagemSelecionado.classList.remove('selecionado');
}

function desmarcarBotao() {
  const botaoSelecionado = document.querySelector('.botao.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
