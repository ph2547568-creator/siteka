// ===== FILTRO (continua funcionando) =====
const filtroBtn = document.getElementById('filtrar');
const opcao = document.getElementById('opcao');
const tipo = document.getElementById('tipo');
const pesquisa = document.getElementById('pesquisa');
const cards = document.querySelectorAll('.card');

filtroBtn.addEventListener('click', () => {
  const opcaoVal = opcao.value;
  const tipoVal = tipo.value;
  const busca = pesquisa.value.toLowerCase();

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    const matchOpcao = opcaoVal === 'all' || texto.includes(opcaoVal);
    const matchTipo = tipoVal === 'all' || texto.includes(tipoVal);
    const matchBusca = !busca || texto.includes(busca);

    card.style.display = (matchOpcao && matchTipo && matchBusca)
      ? 'block'
      : 'none';
  });
});

// ===== GALERIA =====
const imagens = [
  "imagem/apartamento.JPG",
  "imagem/banheiro.JPG",
  "imagem/garagem.JPG",
  "imagem/lavanda.JPG",
];

let index = 0;

const galeria = document.getElementById("galeria");
const galeriaImg = document.getElementById("galeriaImg");

function abrirGaleria(posicao = 0) {
  index = posicao;
  galeria.style.display = "flex";
  galeriaImg.src = imagens[index];
}

function fecharGaleria() {
  galeria.style.display = "none";
}

function avancar() {
  index++;
  if (index >= imagens.length) index = 0;
  galeriaImg.src = imagens[index];
}

function voltar() {
  index--;
  if (index < 0) index = imagens.length - 1;
  galeriaImg.src = imagens[index];
}

// deixa acessível no HTML
window.abrirGaleria = abrirGaleria;
window.fecharGaleria = fecharGaleria;
window.avancar = avancar;
window.voltar = voltar;



