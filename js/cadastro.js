'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('registration-form');
  if (!form) return; // Se o formulário não existir na página, não faz nada

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  /**
   * Mostra uma mensagem de erro para um campo específico.
   * @param {HTMLInputElement} input O campo de input.
   * @param {string} message A mensagem de erro a ser exibida.
   */
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    errorDisplay.textContent = message;
  }

  /**
   * Limpa a mensagem de erro de um campo específico.
   * @param {HTMLInputElement} input O campo de input.
   */
  function clearError(input) {
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector('.error-message');
    
    input.classList.remove('error');
    errorDisplay.textContent = '';
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
  /**
   * Valida o formulário inteiro.
   * @returns {boolean} Retorna true se o formulário for válido, senão false.
   */
  function validateForm() {
    let isValid = true;

    // Limpa erros antigos
    clearError(usernameInput);
    clearError(passwordInput);
    clearError(confirmPasswordInput);

    // 1. Validação do nome de usuário
    if (usernameInput.value.trim() === '') {
      showError(usernameInput, 'O nome de usuário é obrigatório.');
      isValid = false;
    }

    // 2. Validação da senha
    if (passwordInput.value.length < 8) {
      showError(passwordInput, 'A senha deve ter no mínimo 8 caracteres.');
      isValid = false;
    }

    // 3. Validação da confirmação de senha
    if (confirmPasswordInput.value === '') {
      showError(confirmPasswordInput, 'A confirmação de senha é obrigatória.');
      isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, 'As senhas não coincidem.');
      isValid = false;
    }

    return isValid;
  }


  form.addEventListener('submit', (event) => {
    // Impede o envio do formulário para podermos validar primeiro
    event.preventDefault();

    if (validateForm()) {
      console.log('Formulário válido! Enviando dados...');
      // Aqui você enviaria os dados para o servidor.
      // Exemplo:
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log('Dados:', data);

      // Feedback para o usuário
      alert('Cadastro realizado com sucesso!');
      // form.submit(); // Descomente para enviar de verdade
    } else {
      console.log('Formulário inválido. Por favor, corrija os erros.');
    }
  });

  // Validação em tempo real ao sair do campo (melhora a experiência)
  [usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.addEventListener('blur', () => {
        validateForm(); // Re-valida o formulário quando o usuário muda de campo
    });
  });

});