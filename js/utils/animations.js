/* Animation & Interface Interaction Utilities */

// 1. Custom Interactive Cursor
export function initCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const outline = document.querySelector('.custom-cursor-outline');
  if (!dot || !outline) return;

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    if (!isVisible) {
      dot.style.opacity = '1';
      outline.style.opacity = '1';
      isVisible = true;
    }

    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Lerp function for outline lagging smoothness
  function animateOutline() {
    const lerp = 0.15;
    outlineX += (mouseX - outlineX) * lerp;
    outlineY += (mouseY - outlineY) * lerp;
    
    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;
    
    requestAnimationFrame(animateOutline);
  }
  requestAnimationFrame(animateOutline);

  // Delegate hover state activation on body
  document.body.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .card, .tech-tag, .theme-toggle-btn, .nav-menu-btn, input, textarea, [role="button"], .timeline-content');
    if (target) {
      document.body.classList.add('cursor-hover');
    } else {
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    outline.style.opacity = '0';
    isVisible = false;
  });
}

// 2. Scroll Reveal IntersectionObserver
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scale-in');
  revealElements.forEach(el => observer.observe(el));
}

// 3. Typewriter Text Effect Helper
export function runTypingEffect(element, words, speed = 80, pause = 2200) {
  if (!element) return;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let text = '';

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      text = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      text = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    element.innerHTML = `${text}<span class="typing-cursor"></span>`;

    let typeSpeed = speed;
    if (isDeleting) {
      typeSpeed /= 2; // Delete twice as fast
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = pause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}
