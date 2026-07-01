/* Theme Utility Controller */

export function initTheme() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
  
  updateToggleIcons();
}

export function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  const theme = isLight ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  
  updateToggleIcons();
  
  // Emit event for dynamic canvas/svg elements that need redrawing
  const themeEvent = new CustomEvent('themechanged', { detail: { theme } });
  window.dispatchEvent(themeEvent);
}

function updateToggleIcons() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const isLight = document.body.classList.contains('light-mode');
  
  toggleBtns.forEach(btn => {
    if (isLight) {
      // Sun icon
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></svg>`;
      btn.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      // Moon icon
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
      btn.setAttribute('aria-label', 'Switch to light mode');
    }
  });
}
