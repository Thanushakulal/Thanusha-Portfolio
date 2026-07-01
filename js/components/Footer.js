/* Footer Component */

export function renderFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <div class="container footer-container">
      <div class="logo footer-logo" id="footer-logo">
        Thanusha
      </div>
      
      <div class="footer-copyright">
        &copy; ${currentYear} Thanusha. All rights reserved. Designed with passion.
      </div>
      
      <div class="footer-back-to-top">
        <button id="back-to-top-btn" class="btn btn-secondary btn-sm" style="border: 1px solid var(--border-color); border-radius: var(--radius-full); width: 40px; height: 40px; padding: 0;" aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </button>
      </div>
    </div>
  `;
}

export function initFooterEvents() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const footerLogo = document.getElementById('footer-logo');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (footerLogo) {
    footerLogo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
