'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /**
   * INICIALIZA VALIDAÇÃO DO FORMULÁRIO DE LOGIN
   */
  function initLoginForm() {
    const form = document.getElementById('login-form');
    if (!form) return;

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

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

    function validateForm() {
      let isValid = true;
      clearError(usernameInput);
      clearError(passwordInput);

      if (usernameInput.value.trim() === '') {
        showError(usernameInput, 'Por favor, informe seu nome de usuário.');
        isValid = false;
      }

      if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Por favor, informe sua senha.');
        isValid = false;
      }

      return isValid;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateForm()) {
        console.log('Formulário válido! Redirecionando para a home...');
        
        // Redireciona o usuário para a página Home.html
        window.location.href = 'Home.html';

      } else {
        console.log('Formulário inválido.');
      }
    });
  }


  /**
   * INICIALIZA CONTROLES DE ACESSIBILIDADE (pode ser um script global)
   */
  function initAccessibility() {
    const body = document.body;
    const htmlEl = document.documentElement;
    const increaseFontBtn = document.getElementById('increase-font');
    if (!increaseFontBtn) return; // Se não houver menu, não faz nada
    
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
  // --- Inicialização de todas as funções da página ---
  initLoginForm();
  initAccessibility();

});