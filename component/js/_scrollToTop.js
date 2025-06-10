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