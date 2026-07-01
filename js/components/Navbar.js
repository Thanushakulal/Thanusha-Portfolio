/* Navbar Component */

export function renderNavbar() {
  return `
    <div class="container nav-container">
      <div class="logo" id="nav-logo">
      <span><</span>
        Thanusha <span>/></span>
      </div>
      
      <ul class="nav-links" id="nav-links-list">
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div class="theme-switch-container">
        <button class="theme-toggle-btn" id="nav-theme-toggle" aria-label="Switch Theme"></button>
      </div>

      <button class="nav-menu-btn" id="mobile-menu-btn" aria-label="Open Navigation Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;
}

export function initNavbarEvents() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinksList = document.getElementById('nav-links-list');
  const navLinks = document.querySelectorAll('.nav-links a');
  const logo = document.getElementById('nav-logo');
  const header = document.querySelector('header');

  // Sticky scroll class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveLink();
  });

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinksList.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Close menu
        menuBtn.classList.remove('open');
        navLinksList.classList.remove('open');

        // Scroll smoothly
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Logo scroll to top
  logo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Highlight active link based on scroll section
  function highlightActiveLink() {
    let currentSection = '';
    const sections = document.querySelectorAll('section, header');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    // Default to home if near top
    if (window.scrollY < 200) {
      currentSection = 'home';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
}
