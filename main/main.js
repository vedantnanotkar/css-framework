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
  
/* scroll to top */

// JavaScript to handle scroll & click
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scrollToTop');
  
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });
  
    // Scroll to top smoothly on click
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

/* Tooltip | Help user with more details | v1.0 */

class Tooltip {
    constructor() {
      this.tooltip = document.createElement('div');
      this.tooltip.className = 'tooltip';
      document.body.appendChild(this.tooltip);
      this.attachEvents();
    }
  
    attachEvents() {
      document.querySelectorAll('[data-tooltip]').forEach(el => {
        el.addEventListener('mouseenter', (e) => this.showTooltip(e, el));
        el.addEventListener('mouseleave', () => this.hideTooltip());
        el.addEventListener('mousemove', (e) => this.moveTooltip(e));
      });
    }
  
    showTooltip(e, el) {
      this.tooltip.textContent = el.getAttribute('data-tooltip');
      this.tooltip.classList.add('show');
      this.moveTooltip(e);
    }
  
    hideTooltip() {
      this.tooltip.classList.remove('show');
    }
  
    moveTooltip(e) {
      const offset = 12;
      const tooltipRect = this.tooltip.getBoundingClientRect();
      const pageWidth = document.documentElement.clientWidth;
      const pageHeight = document.documentElement.clientHeight;
  
      let left = e.pageX + offset;
      let top = e.pageY - offset;
  
      // Prevent overflow on the right
      if (left + tooltipRect.width > pageWidth) {
        left = e.pageX - tooltipRect.width - offset;
      }
  
      // Prevent overflow at the top
      if (top < 0) {
        top = e.pageY + offset;
      }
  
      this.tooltip.style.left = `${left}px`;
      this.tooltip.style.top = `${top}px`;
    }
  }
  
  // Initialize tooltips
  document.addEventListener('DOMContentLoaded', () => {
    new Tooltip();
  });
  