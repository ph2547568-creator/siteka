const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
  });
}