'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /**
   * INICIALIZA FORMULÁRIO DE REDEFINIÇÃO DE SENHA
   */
  function initPasswordForm() {
    const form = document.getElementById('password-reset-form');
    if (!form) return;

    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    function showError(input, message) {
      const formGroup = input.parentElement;
      const errorDisplay = formGroup.querySelector('.error-message');
      input.classList.add('error');
      errorDisplay.textContent = message;
    }

    function clearError(input) {
      const formGroup = input.parentElement;
      const errorDisplay = formGroup.querySelector('.error-message');
      input.classList.remove('error');
      errorDisplay.textContent = '';
    }

    function validatePasswordForm() {
      let isValid = true;
      clearError(newPasswordInput);
      clearError(confirmPasswordInput);

      if (newPasswordInput.value.length < 8) {
        showError(newPasswordInput, 'A nova senha deve ter no mínimo 8 caracteres.');
        isValid = false;
      }

      if (newPasswordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'As senhas não coincidem.');
        isValid = false;
      }
      
      return isValid;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validatePasswordForm()) {
        alert('Senha atualizada com sucesso! (Simulação)');
        form.reset(); // Limpa o formulário após o sucesso
      }
    });
  }

  /**
   * INICIALIZA CONTROLES DE ACESSIBILIDADE
   * (Poderia ser um script global importado em todas as páginas)
   */
  function initAccessibility() {
    const body = document.body;
    const htmlEl = document.documentElement;
    const increaseFontBtn = document.getElementById('increase-font');
    if (!increaseFontBtn) return; // Sai se o menu não existir

    const decreaseFontBtn = document.getElementById('decrease-font');
    const resetFontBtn = document.getElementById('reset-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');
    const toggleDarkModeBtn = document.getElementById('toggle-darkmode');
    
    const FONT_STEP = 1, MIN_FONT_SIZE = 12, MAX_FONT_SIZE = 24, DEFAULT_FONT_SIZE = 16;
    const getCurrentFontSize = () => parseFloat(getComputedStyle(htmlEl).fontSize);

    increaseFontBtn.addEventListener('click', () => {
      const currentSize = getCurrentFontSize();
      if (currentSize < MAX_FONT_SIZE) htmlEl.style.fontSize = `${currentSize + FONT_STEP}px`;
    });

    decreaseFontBtn.addEventListener('click', () => {
      const currentSize = getCurrentFontSize();
      if (currentSize > MIN_FONT_SIZE) htmlEl.style.fontSize = `${currentSize - FONT_STEP}px`;
    });

    resetFontBtn.addEventListener('click', () => {
      htmlEl.style.fontSize = `${DEFAULT_FONT_SIZE}px`;
    });
    
    toggleContrastBtn.addEventListener('click', () => body.classList.toggle('high-contrast'));
    toggleDarkModeBtn.addEventListener('click', () => body.classList.toggle('dark-mode'));
  }
  /**
   * Inicializa o botão "Voltar ao Topo".
   */
  function initBackToTop() {
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  // --- Inicialização ---
  initPasswordForm();
  initAccessibility();
});s