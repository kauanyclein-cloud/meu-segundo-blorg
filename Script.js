// Seleciona todos os botões de reação da página
const botoes = document.querySelectorAll(".btn-reacao");

// Percorre cada botão individualmente
botoes.forEach(function (botao) {
  // Variável de controle individual de cada botão
  let curtiu = false;

  botao.addEventListener("click", function () {
    let texto = botao.querySelector("span");

    // Lógica para alternar entre curtir e descurtir (Toggle)
    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  });
});
