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



const galerias = {
imovel1: [

  "imagem/Sala fora.JPG",
  "imagem/Mapa.JPG",
  "imagem/Tênis .JPG",
  "imagem/Piscina.JPG",
  "imagem/quintal.JPG",
   "imagem/Cartoon.png",
  
],
imovel2: [
  "imagem/apartamento.JPG",
  "imagem/Confi_Apartamento.PNG",
  "imagem/Sala.JPG",
  "imagem/Quarto.JPG",
  "imagem/Banheiro.JPG",
  "imagem/garagem.JPG",
  "imagem/Cartoon.png",
]

};

let imagensAtuais = [];
let galeriaIndex = 0;

function abrirGaleria(nomeGaleria, posicao = 0) {
  imagensAtuais = galerias[nomeGaleria];
  if (!imagensAtuais) return;

  galeriaIndex = posicao;
  galeria.style.display = "flex";
  galeriaImg.src = imagensAtuais[galeriaIndex];
}

function avancar() {
  galeriaIndex = (galeriaIndex + 1) % imagensAtuais.length;
  galeriaImg.src = imagensAtuais[galeriaIndex];
}

function voltar() {
  galeriaIndex =
    (galeriaIndex - 1 + imagensAtuais.length) % imagensAtuais.length;
  galeriaImg.src = imagensAtuais[galeriaIndex];
}
