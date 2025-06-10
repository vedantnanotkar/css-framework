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
