/* modal.js | v1.0 */

class Modal {
    constructor() {
      this.modals = document.querySelectorAll('.modal');
      this.bindEvents();
    }
  
    bindEvents() {
      // Open modal buttons
      document.querySelectorAll('[data-modal-target]').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-modal-target');
          this.openModal(document.querySelector(target));
        });
      });
  
      // Close buttons & backdrop
      this.modals.forEach(modal => {
        modal.querySelector('.modal-close')?.addEventListener('click', () => this.closeModal(modal));
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal(modal);
        });
      });
  
      // Close with ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          this.modals.forEach(modal => this.closeModal(modal));
        }
      });
    }
  
    openModal(modal) {
      modal.classList.add('show');
    }
  
    closeModal(modal) {
      modal.classList.remove('show');
    }
  }
  
  // Initialize the modal system
  document.addEventListener('DOMContentLoaded', () => {
    new Modal();
  });
  