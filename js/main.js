
// Carregamento dinâmico de componentes
function loadComponent(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
      return res.text();
    })
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .catch(err => console.error(err));
}

// Abertura e fechamento de modais genérica
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function initModalListeners() {
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modalOpen));
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.modalClose));
  });

  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target.id);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('headerPlaceholder', 'components/header.html');
  loadComponent('menuPlaceholder', 'components/menu.html');

  initModalListeners();
});
