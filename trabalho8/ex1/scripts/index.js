// Obtém todos os elementos h2
var titles = document.querySelectorAll('h2');

// Adiciona um ouvinte de evento de clique para cada título
titles.forEach(function(title) {
  title.addEventListener('click', function() {
    // Obtém o próximo elemento irmão
    var content = this.nextElementSibling;
      // Se estiver visível, torna-o invisível
      content.style.display = 'none';
  });

  // Adiciona um ouvinte de evento de duplo clique para cada título
  title.addEventListener('dblclick', function(event) {
    // Evita que o título seja selecionado
    event.preventDefault();
    // Obtém o próximo elemento irmão
    var content = this.nextElementSibling;
    // Torna o conteúdo visível
    content.style.display = 'block';
  });
});