'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /**
   * INICIALIZA FUNCIONALIDADES DA PÁGINA DE CURSO
   */
  function initCoursePage() {
    const backButton = document.getElementById('back-button');

    if (backButton) {
      backButton.addEventListener('click', () => {
        // Ação de voltar para a página anterior no histórico do navegador
        window.history.back();
      });
    }
  }

  /**
   * INICIALIZA CONTROLES DE ACESSIBILIDADE
   */
  function initAccessibility() {
    const body = document.body;
    const htmlEl = document.documentElement;
    const increaseFontBtn = document.getElementById('increase-font');
    if (!increaseFontBtn) return; 

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
  initCoursePage();
  initAccessibility();

});