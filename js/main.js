
  'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // --- Seletores do DOM ---
  const body = document.body;
  const htmlEl = document.documentElement;
  const backToTopBtn = document.getElementById('back-to-top');

  // Seletores do menu de acessibilidade
  const increaseFontBtn = document.getElementById('increase-font');
  const decreaseFontBtn = document.getElementById('decrease-font');
  const resetFontBtn = document.getElementById('reset-font');
  const toggleContrastBtn = document.getElementById('toggle-contrast');
  const toggleDarkModeBtn = document.getElementById('toggle-darkmode');
  
  const FONT_STEP = 1; // em pixels
  const MIN_FONT_SIZE = 12; // em pixels
  const MAX_FONT_SIZE = 24; // em pixels
  const DEFAULT_FONT_SIZE = 16; // em pixels

  /**
   * Inicializa os controles de acessibilidade.
   */
  function initAccessibility() {
    if (!increaseFontBtn) return; // Se os botões não existem, sai da função

    const getcurrentFontSize = () => parseFloat(getComputedStyle(htmlEl).fontSize);

    increaseFontBtn.addEventListener('click', () => {
      const currentSize = getcurrentFontSize();
      if (currentSize < MAX_FONT_SIZE) {
        htmlEl.style.fontSize = `${currentSize + FONT_STEP}px`;
      }
    });

    decreaseFontBtn.addEventListener('click', () => {
      const currentSize = getcurrentFontSize();
      if (currentSize > MIN_FONT_SIZE) {
        htmlEl.style.fontSize = `${currentSize - FONT_STEP}px`;
      }
    });

    resetFontBtn.addEventListener('click', () => {
      htmlEl.style.fontSize = `${DEFAULT_FONT_SIZE}px`;
    });

    toggleContrastBtn.addEventListener('click', () => {
      body.classList.toggle('high-contrast');
      // Garante que dark mode seja desativado se alto contraste for ativado
      if (body.classList.contains('high-contrast')) {
        body.classList.remove('dark-mode');
      }
    });

    toggleDarkModeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      // Garante que alto contraste seja desativado se dark mode for ativado
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('high-contrast');
      }
    });
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
  initAccessibility();
  initBackToTop();

});

