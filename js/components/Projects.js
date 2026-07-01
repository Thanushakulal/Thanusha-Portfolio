/* Projects Section Component */
import { projectsData } from '../data/projects.js';
import { initScrollReveal } from '../utils/animations.js';

export function renderProjects() {
  return `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Real-World Projects</span>
        <h2 class="section-title">My Projects</h2>
      </div>
      
      <!-- Interactive Filter Bar -->
      <div class="projects-filter-bar reveal">
        <div class="projects-tabs">
          <button class="projects-tab-btn active" data-filter="all">All</button>
          <button class="projects-tab-btn" data-filter="featured">Featured</button>
          <button class="projects-tab-btn" data-filter="Web App">Web Apps</button>
          <button class="projects-tab-btn" data-filter="IoT / Hardware">IoT / Hardware</button>
        </div>
        
        <div class="projects-search-wrapper">
          <svg class="projects-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="projects-search-input" id="project-search-input" placeholder="Search by name/tech...">
        </div>
      </div>
      
      <!-- Dynamic Projects Grid -->
      <div class="grid-3" id="projects-grid">
        <!-- Rendered dynamically by JavaScript -->
      </div>
    </div>
  `;
}

export function initProjectsEvents() {
  const tabs = document.querySelectorAll('.projects-tab-btn');
  const searchInput = document.getElementById('project-search-input');
  
  let activeFilter = 'all';
  let activeSearch = '';

  // Initial render
  updateProjectsGrid();

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      updateProjectsGrid();
    });
  });

  // Search input typing
  searchInput.addEventListener('input', (e) => {
    activeSearch = e.target.value.toLowerCase().trim();
    updateProjectsGrid();
  });

  // Core filtering logic
  function updateProjectsGrid() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = projectsData.filter(proj => {
      // 1. Category Filter
      let matchesFilter = false;
      if (activeFilter === 'all') {
        matchesFilter = true;
      } else if (activeFilter === 'featured') {
        matchesFilter = proj.featured;
      } else {
        matchesFilter = proj.category === activeFilter;
      }

      // 2. Search Text Filter
      let matchesSearch = true;
      if (activeSearch) {
        const titleMatch = proj.title.toLowerCase().includes(activeSearch);
        const descMatch = proj.description.toLowerCase().includes(activeSearch);
        const techMatch = proj.tech.some(t => t.toLowerCase().includes(activeSearch));
        matchesSearch = titleMatch || descMatch || techMatch;
      }

      return matchesFilter && matchesSearch;
    });

    // Render cards
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="grid-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <p style="font-weight: 600;">No projects found matching your filters.</p>
        </div>
      `;
      return;
    }

    let cardsHtml = '';
    filtered.forEach(proj => {
      const techTags = proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
      
      const featuresHtml = proj.keyFeatures.map(f => `
        <li class="project-feature-item">
          <svg class="project-feature-bullet" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${f}</span>
        </li>
      `).join('');

      cardsHtml += `
        <div class="card project-card reveal">
          <div class="project-visual">
            ${proj.illustration}
            ${proj.featured ? `
              <div class="project-badge-wrapper">
                <span class="badge badge-featured">Featured</span>
              </div>
            ` : ''}
          </div>
          
          <div class="project-details">
            <span class="project-meta-cat">${proj.category}</span>
            <h3 class="project-card-title">${proj.title}</h3>
            <p class="project-card-desc">${proj.description}</p>
            
            <ul class="project-features-list">
              ${featuresHtml}
            </ul>
            
            <div class="project-tech">
              ${techTags}
            </div>
            
            ${(proj.demoUrl || proj.codeUrl) ? `
            <div class="project-links">
              ${proj.demoUrl ? `
              <a href="${proj.demoUrl}" target="_blank" class="btn btn-primary btn-sm">
                Live Demo
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>` : ''}
              ${proj.codeUrl ? `
              <a href="${proj.codeUrl}" target="_blank" class="btn btn-secondary btn-sm">
                Code Repo
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>` : ''}
            </div>` : ''}
          </div>
        </div>
      `;
    });

    grid.innerHTML = cardsHtml;
    
    // Re-trigger scroll reveal so new filtered cards animate in
    initScrollReveal();
  }
}
