// ===============================
// MENU HAMBURGUER
// ===============================
const menuToggle = document.querySelector('.menu-toggle');//Botão hambúrguer
const menu = document.querySelector('.menu'); //Menu flutuante
const menuClose = document.querySelector('.menu-close'); //Botão X

// Toggle (abre/fecha)
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Botão fechar
menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha ao clicar em link
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});



// ===============================
// DARK MODE COM BOTÃO INTELIGENTE
// ===============================

// Cria botão
const botaoDark = document.createElement('button');
document.body.appendChild(botaoDark);
botaoDark.classList.add('dark-mode-btn');

// Função para atualizar ícone
function atualizarIcone() {
  if (document.body.classList.contains('dark')) {
    botaoDark.textContent = '☀️'; // modo escuro → mostra sol
  } else {
    botaoDark.textContent = '🌙'; // modo claro → mostra lua
  }
}

// Verifica se já estava ativado
if (localStorage.getItem('darkMode') === 'ativado') {
  document.body.classList.add('dark');
}

// Atualiza ícone ao carregar
atualizarIcone();

// Evento do botão
botaoDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Salva estado
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'ativado');
  } else {
    localStorage.setItem('darkMode', 'desativado');
  }

  // Atualiza ícone
  atualizarIcone();
});