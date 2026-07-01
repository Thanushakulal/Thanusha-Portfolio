/* Main Application Orchestrator */

// Imports Components
import { renderNavbar, initNavbarEvents } from './components/Navbar.js';
import { renderHero, initHeroEvents } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects, initProjectsEvents } from './components/Projects.js';
import { renderEducation } from './components/Education.js';
import { renderCertifications } from './components/Certifications.js';
import { renderContact, initContactEvents } from './components/Contact.js';
import { renderFooter, initFooterEvents } from './components/Footer.js';

// Imports Utilities
import { initTheme, toggleTheme } from './utils/theme.js';
import { initCursor, initScrollReveal, runTypingEffect } from './utils/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mount All Reusable HTML UI Components
  const navbarMount = document.getElementById('navbar-mount');
  const heroMount = document.getElementById('home');
  const aboutMount = document.getElementById('about');
  const skillsMount = document.getElementById('skills');
  const projectsMount = document.getElementById('projects');
  const educationMount = document.getElementById('education');
  const certificationsMount = document.getElementById('certifications');
  const contactMount = document.getElementById('contact');
  const footerMount = document.getElementById('footer-mount');

  if (navbarMount) navbarMount.innerHTML = renderNavbar();
  if (heroMount) heroMount.innerHTML = renderHero();
  if (aboutMount) aboutMount.innerHTML = renderAbout();
  if (skillsMount) skillsMount.innerHTML = renderSkills();
  if (projectsMount) projectsMount.innerHTML = renderProjects();
  if (educationMount) educationMount.innerHTML = renderEducation();
  if (certificationsMount) certificationsMount.innerHTML = renderCertifications();
  if (contactMount) contactMount.innerHTML = renderContact();
  if (footerMount) footerMount.innerHTML = renderFooter();

  // 2. Initialize App State & Utilities
  initTheme();
  initCursor();
  
  // 3. Initialize Interactive Components Event Listeners
  initNavbarEvents();
  initHeroEvents();
  initProjectsEvents();
  initContactEvents();
  initFooterEvents();

  // Bind Theme Toggle Buttons (Navbar toggle)
  const themeToggle = document.getElementById('nav-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // 4. Run Hero Tagline Typewriter Animation
  const taglineEl = document.getElementById('hero-typewriter-text');
  if (taglineEl) {
    runTypingEffect(taglineEl, [
      "Building clean, responsive frontend UIs.",
      "Bridging hardware systems with web tools.",
      "Developing useful, real-world solutions.",
      "Designing premium browser experiences."
    ], 60, 2000);
  }

  // 5. Trigger Intersection Observer for Scroll Reveals
  // Give a small delay to make sure DOM templates are fully constructed
  setTimeout(() => {
    initScrollReveal();
  }, 100);
});
